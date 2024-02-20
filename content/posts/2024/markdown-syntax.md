---
title: Markdown Syntax Guide
date: 2024-01-01
description: This post contains examples on how to use Markdown and how it is rendered
tags:
  - markdown
  - css
  - html
---

This post contains the list of all markdown attributes currently supported by this 11ty template.

<!--more-->

## Headings

The following HTML `<h1>`—`<h6>` elements represent 6 levels of section headings. `<h1>` is the highest section level while `<h6>` is the lowest.

# H1

## H2

### H3

#### H4

##### H5

###### H6

## Paragraph

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Dui nunc mattis enim ut. Purus non enim praesent elementum facilisis leo vel fringilla est. Congue nisi vitae suscipit tellus mauris a diam maecenas. Orci sagittis eu volutpat odio. Euismod nisi porta lorem mollis aliquam ut porttitor leo. Viverra nam libero justo laoreet sit amet. Arcu cursus vitae congue mauris rhoncus aenean vel elit. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Ultrices gravida dictum fusce ut placerat. Egestas diam in arcu cursus euismod quis. Sem integer vitae justo eget magna fermentum.

Lacus sed viverra tellus in. Posuere ac ut consequat semper viverra nam libero justo laoreet. Et leo duis ut diam quam nulla porttitor massa id. Augue eget arcu dictum varius duis at consectetur lorem. Cras tincidunt lobortis feugiat vivamus at augue eget. Pulvinar neque laoreet suspendisse interdum consectetur libero id. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Platea dictumst vestibulum rhoncus est pellentesque. Lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis.

## Blockquotes

The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a `footer` or `cite` element, and optionally with in-line changes such as annotations and abbreviations.

#### Blockquote without attribution

> Leo duis ut diam quam nulla.
> **Note** that you can use _Markdown syntax_ within a blockquote.

#### Blockquote with attribution

> The only thing we have to fear is fear itself.<br>
> — <cite>Franklin D. Roosevelt[^1]</cite>

[^1]: The above quote is excerpted from FDR's 1st inaugural [speech](https://historymatters.gmu.edu/d/5057/).

## Code Blocks

#### Code block with backticks

```html
<!DOCTYPE html>
<html class="no-js" lang="">
  <!DOCTYPE html>

  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title></title>
    <link rel="stylesheet" href="css/style.css" />
    <meta name="description" content="" />

    <meta property="og:title" content="" />
    <meta property="og:type" content="" />
    <meta property="og:url" content="" />
    <meta property="og:image" content="" />
    <meta property="og:image:alt" content="" />

    <link rel="icon" href="/favicon.ico" sizes="any" />
    <link rel="icon" href="/icon.svg" type="image/svg+xml" />
    <link rel="apple-touch-icon" href="icon.png" />

    <link rel="manifest" href="site.webmanifest" />
    <meta name="theme-color" content="#fafafa" />
  </head>

  <body>
    <!-- Add your site or application content here -->
    <p>Hello world! This is HTML5 Boilerplate.</p>
    <script src="js/app.js"></script>
  </body>
</html>
```

## List Types

#### Ordered List

1. My First item
2. My Second item
3. My Third item

#### Unordered List

- List item
- Another item
- And another item

#### Nested list

- Fruit
  - Apple
  - Orange
  - Banana
- Dairy
  - Milk
  - Cheese
- Egg

## Other (HTML) Elements

#### abbr

<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

#### sub/sup

H<sub>2</sub>O X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

#### kbd, mark

Press <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd> to end the
session. Most <mark>salamanders</mark> are nocturnal, and hunt for insects,
worms, and other small creatures.
