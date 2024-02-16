---
title: Post with notices or alert boxes
description: I want to display what notice boxes would look like.
tags:
  - notice
---

This post will show how to create different kinds of notice or alert boxes such as a regular box, as well as info, success, warning, and danger.

In all cases, use the paired shortcode `notice` with the notice type (info, success, warning, danger). Leave the notice type out for the regular notice box. You can use markdown inside.

<div class="notice">
This is the default notice. You _can_ use Markdown.
</div>

<div class="notice info">
This is an info notice. Info means [information](https://en.wikipedia.org/wiki/Information)
</div>

<div class="notice success">
This is a success notice. Great Success.
</div>

<div class="notice warning">
This is a warning notice. Don't use `GOTO` statements!
</div>

<div class="notice danger">
This is a danger notice. **Smoking is fatal**.
</div>

For a regular notice box,

<!-- prettier-ignore-start -->

```html
<div class="notice">This is the default notice. You _can_ use Markdown.</div>
```
<!-- prettier-ignore-end -->

For an info notice box,

<!-- prettier-ignore-start -->

```html
<div class="notice info">
  This is an info notice. Info means
  [information](https://en.wikipedia.org/wiki/Information)
</div>
```
<!-- prettier-ignore-end -->

For a success notice box,

<!-- prettier-ignore-start -->
```html
<div class="notice success">This is a success notice. Great Success.</div>
````

<!-- prettier-ignore-end -->

```html
{% raw %}
<div class="notice warning">
  This is a warning notice. Don't use `GOTO` statements!
</div>
{% endraw %}
```

For a danger notice box,

```html
{% raw %}
<div class="notice danger">This is a danger notice. **Smoking is fatal**.</div>
{% endraw %}
```
