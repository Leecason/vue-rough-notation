# Vue Rough Notation

![npm](https://img.shields.io/npm/v/vue-rough-notation)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/vue-rough-notation)
![GitHub](https://img.shields.io/github/license/Leecason/vue-rough-notation)

![Rough Notation logo](https://roughnotation.com/images/social.png)

A Vue wrapper for [RoughNotation](https://roughnotation.com/), a small JavaScript library to create and animate annotations on a web page.

[Visit website to see it in action](https://roughnotation.com/)

## Installation

NPM:

```shell
npm install --save vue-rough-notation
```

CDN:

```js
<script src="https://unpkg.com/vue-rough-notation/dist/vue-rough-notation.js"></script>
```

## Usage

main.js:

```js
import VueRoughNotation from 'vue-rough-notation';

Vue.use(VueRoughNotation);
```

template:

```html
<RoughNotation
  :is-show="isShow"
  type="underline"
>
  <span>This is a text</span>
</RoughNotation>
```

## Props

Check [configuring-the-annotation](https://github.com/pshihn/rough-notation#configuring-the-annotation)

**and**

### isShow

**Type**: `boolean`

**Default**: `false`

Whether draws the annotation.

### tag

**Type**: `string`

**Default**: `'div'`

String HTML tag name (default: `div`); if falsy (for example `null` or `undefined`), the component will be renderless (the content won't be wrapped in a tag), in this case, only the first child will be rendered

## License

[MIT](https://github.com/Leecason/vue-rough-notation/blob/master/LICENSE)
