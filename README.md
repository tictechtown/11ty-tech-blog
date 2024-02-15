# 11ty-tech-blog

A starter repository to build a basic tech blog, using the Static Site Generator [11ty](https://www.11ty.dev)

## Getting Started

1. Clone the repository

```
git clone https://github.com/tictechtown/11ty-tech-blog
```

2. Review `.eleventy.js` and `_data/metadata.json` to configure your own website

3. Install dependencies

```
nvm use # if using
npm install
```

4. Build or Run the server

```
npm run build # build
npm run serve # or run
```

## Demos

- [GitHub Pages] TODO

## Deploy this to your own site

Deploy this Eleventy site in just a few clicks on these services:

- [Get your own Eleventy web site on Netlify](https://app.netlify.com/start/deploy?repository=https://github.com/11ty/eleventy-base-blog)
- If you run Eleventy locally you can drag your `_site` folder to [`drop.netlify.com`](https://drop.netlify.com/) to upload it without using `git`.
- [Get your own Eleventy web site on Vercel](https://vercel.com/import/project?template=11ty%2Feleventy-base-blog)
- TODO - CloudFlare or Github

## Adding Content

- add/update your own content by updating the folder `content`
- you can use .md file or a njk file
- you can check 11ty website for specs

## Customization

- `public/images/logo.png`: your blog logo
- `public/favicons/apple-touch-icon.png`, `public/favicons/favicon.ico`, `public/icofaviconsns/favicon-16x16.png`, `public/favicons/favicon-32x32.png`, etc: your blog favicon, you can generate from https://realfavicongenerator.net/
- `_data/metadata.json`: your blog configuration
- `_includes/layouts`: your blog HTML layout
- `public/css/index.css`: your blog CSS file

## Project structure

```
.
├── _data
│   └── metadata.json  # Blog Metadata config
│
├── _includes
│   └── layouts        # HTML layout files
│   └── partials       # HTML partial files
│
├── content
│   └── about          # Your about page
│   └── feed           # Atom/RSS feeds
│   └── posts          # Your blog posts
│   └── sitemap        # Sitemap
│   └── 404.md         # 404 page
│   └── archive.njk    # list of all your posts
│   └── index.njk      # home page
│   └── tag.njk        # page for a selected tag
│   └── taglist.njk    # list of all your tags
│
├── public             # Static files
│   └── css            # CSS files
│   └── images         # Images
|   └── favicons       # Favicons
│
└── .eleventy.js       # config build file
```
