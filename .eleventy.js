const path = require("path");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const eleventyImage = require("@11ty/eleventy-img");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

function relativeToInputPath(inputPath, relativeFilePath) {
  let split = inputPath.split("/");
  split.pop();

  return path.resolve(split.join(path.sep), relativeFilePath);
}

module.exports = function (eleventyConfig) {
  // Copy the contents of the `public` folder to the output folder
  // For example, `./public/css/` ends up in `_site/css/`
  eleventyConfig.addPassthroughCopy({
    public: "/",
  });

  // plugins
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  // Filters

  // Format iso date object to human readable YYYY/MM/DD
  eleventyConfig.addFilter("readableDate", function (date, zone) {
    return date.toLocaleDateString(zone ?? "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  });

  // Format iso date object to human readable YYYY/MM/DD
  eleventyConfig.addFilter("htmlDateString", (date) => {
    // dateObj input: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
    return `${date.toLocaleDateString("en-US", {
      year: "numeric",
    })}-${date.toLocaleDateString("en-US", {
      month: "long",
    })}-${date.toLocaleDateString("en-US", { day: "2-digit" })}`;
  });

  // Filter out tags containing nav/post/all
  eleventyConfig.addFilter("filterTagList", function filterTagList(tags) {
    return (tags || []).filter(
      (tag) => ["all", "nav", "post", "posts"].indexOf(tag) === -1
    );
  });
  // Return all the tags used in a collection
  eleventyConfig.addFilter("allTags", (collection) => {
    let tagSet = new Set();
    for (let item of collection) {
      (item.data.tags || []).forEach((tag) => tagSet.add(tag));
    }
    return Array.from(tagSet);
  });

  // Return all the tags used in a collection
  eleventyConfig.addFilter("contains", (tags, value) => {
    return (tags ?? []).includes(value);
  });

  // Get min number from collections
  eleventyConfig.addFilter("min", (...numbers) => {
    return Math.min.apply(null, numbers);
  });
  // Get max number from collections
  eleventyConfig.addFilter("min", (...numbers) => {
    return Math.max.apply(null, numbers);
  });

  // Get the first `n` elements of a collection.
  eleventyConfig.addFilter("head", (array, n) => {
    if (!Array.isArray(array) || array.length === 0) {
      return [];
    }
    if (n < 0) {
      return array.slice(n);
    }

    return array.slice(0, n);
  });

  // Eleventy Image shortcode
  // https://www.11ty.dev/docs/plugins/image/
  eleventyConfig.addAsyncShortcode(
    "image",
    async function imageShortcode(src, alt, widths, sizes) {
      // Full list of formats here: https://www.11ty.dev/docs/plugins/image/#output-formats
      // Warning: Avif can be resource-intensive so take care!
      let formats = ["avif", "webp", "auto"];
      let file = relativeToInputPath(this.page.inputPath, src);
      let metadata = await eleventyImage(file, {
        widths: widths || ["auto"],
        formats,
        outputDir: path.join(eleventyConfig.dir.output, "img"), // Advanced usage note: `eleventyConfig.dir` works here because we’re using addPlugin.
      });

      // TODO loading=eager and fetchpriority=high
      let imageAttributes = {
        alt,
        sizes,
        loading: "lazy",
        decoding: "async",
      };
      return eleventyImage.generateHTML(metadata, imageAttributes);
    }
  );

  return {
    // Control which files Eleventy will process
    // e.g.: *.md, *.njk, *.html, *.liquid
    templateFormats: ["md", "njk", "html", "liquid"],

    passthroughFileCopy: true,
    // Pre-process *.md files with: (default: `liquid`)
    markdownTemplateEngine: "njk",
    // Pre-process *.html files with: (default: `liquid`)
    htmlTemplateEngine: "njk",

    dir: {
      input: "content", // default: "."
      includes: "../_includes", // default: "_includes"
      data: "../_data", // default: "_data"
      output: "_site",
      pathPrefix: "/11ty-tech-blog/",
    },
  };
};
