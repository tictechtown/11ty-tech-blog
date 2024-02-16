---
title: How to set Opengraph preview image and metadata
description: Instructions on setting up various Opengraph headers
tags:
  - opengraph
  - image
  - preview
opengraph:
  image: /images/override-placeholder-image.jpg
---

When sharing a URL, some sites will generate a preview with a title, description and image using certain [OpenGraph](https://ogp.me/) metadata.

### Set the preview image

A default Opengraph preview image for all posts is set in the `metadata.json`, which looks like:

```json
{
  "title": "<title>",
  "opengraph": {
    "image": "<image-url>",
    "type": "website"
  }
}
```

To override the preview image for a specific post, set the `opengraph.image` value in the frontmatter:

```markdown
---
title: How to set Opengraph preview image and metadata
opengraph:
  image: /images/image003.jpg
---
```

### Title, description, and tags

All three of these are taken from the post's frontmatter's title, description, and tags.

```markdown
---
title: How to set Opengraph preview image and metadata
description: Instructions on setting up various Opengraph headers
tags:
  - opengraph
  - image
  - preview
opengraph:
  image: /assets/images/image003.jpg
---
```

If missing, the defaults are taken from the `metadata.json` again.

### Author and type

The author and type are always taken from the metadata.json author and type.

## Testing your OpenGraph Metadata

You can go to the [opengraph.xyz](https://www.opengraph.xyz/) website, enter your published URL and see if there's any issue.
