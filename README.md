# Vue Rough Notation

![npm](https://img.shields.io/npm/v/vue-rough-notation)
![CircleCI](https://img.shields.io/circleci/build/github/Leecason/vue-rough-notation)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/vue-rough-notation)
![GitHub](https://img.shields.io/github/license/Leecason/vue-rough-notation)

![Rough Notation logo](https://roughnotation.com/images/social.png)

A Vue wrapper for [RoughNotation](https://github.com/pshihn/rough-notation), a small JavaScript library to create and animate annotations on a web page.

## Table of Contents

- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Global options](#global-options)
- [RoughNotation Component](#roughnotation-component)
- [RoughNotationGroup Component](#roughnotationgroup-component)
- [Contributing](#contributing)
- [License](#license)

## Demo

[Demo Page](https://leecason.github.io/vue-rough-notation/)

[Code Sandbox](https://codesandbox.io/s/vue-rough-notation-q8cxq)

## Installation

NPM:

```shell
npm install --save vue-rough-notation
```

To make `vue-rough-notation` work for Vue 2, you need to have `@vue/composition-api` installed:

```shell
npm install --save @vue/composition-api
```

## Usage

### Vue3

```js
import { createApp } from 'vue'
import VueRoughNotation from 'vue-rough-notation';

const app = createApp(...);
app.use(VueRoughNotation);
```

### Vue2

```js
import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api';
import VueRoughNotation from 'vue-rough-notation';

Vue.use(VueCompositionAPI);
Vue.use(VueRoughNotation);
```

## Global options

The default global options are:

```js
{
  // Turn on/off animation when annotating.
  animate: true,
  // Duration of the animation in milliseconds.
  animationDuration: 800,
  // Representing the color of the annotation sketch.
  color: 'currentColor',
  // Width of the annotation strokes.
  strokeWidth: 1,
  // (in pixels) Padding between the element and roughly where the annotation is drawn.
  padding: 5,
  // To annotate multiline text (each line separately), set this property to true.
  multiline: false,
  // By default annotations are drawn in two iterations.
  iterations: 2,
  // When drawing a bracket, this configures which side(s) of the element to bracket.
  brackets: `right`,
}
```

You can change the options when install:

- Vue3

```js
import VueRoughNotation from 'vue-rough-notation';

app.use(VueRoughNotation, options);
```

- Vue2

```js
import VueRoughNotation from 'vue-rough-notation';

Vue.use(VueRoughNotation, options);
```

## RoughNotation Component

### Usage

```html
<RoughNotation :is-show="isShow" type="underline">
  <span>Rough Notation is awesome</span>
</RoughNotation>
```

### Props

#### type

**Type**: `string`

**required**: `true`

This is a mandatory field. It sets the annotation style. Following are the list of supported annotation types:

- **underline**: This style creates a sketchy underline below an element.
- **box**: This style draws a box around the element.
- **circle**: This style draws a circle around the element.
- **highlight**: This style creates a highlight effect as if marked by a highlighter.
- **strike-through**: This style draws horizontal lines through the element.
- **crossed-off**: This style draws an 'X' across the element.
- **bracket**: This style draws a bracket around an element, usually a paragraph of text. By default on the right side, but can be configured to any or all of left, right, top, bottom.

#### isShow

**Type**: `boolean`

**Required**: `false`

**Default**: `false`

Whether draws the annotation.

#### animate

**Type**: `boolean`

**Required**: `false`

**Default**: `true` - You can change it when install _(see above)_.

Turn on/off animation when annotating.

#### animationDuration

**Type**: `number`

**Required**: `false`

**Default**: `800` - You can change it when install _(see above)_.

Duration of the animation in milliseconds.

#### color

**Type**: `string`

**Required**: `false`

**Default**: `currentColor` - You can change it when install _(see above)_.

Representing the color of the annotation sketch.

#### strokeWidth

**Type**: `number`

**Required**: `false`

**Default**: `1` - You can change it when install _(see above)_.

Width of the annotation strokes.

#### padding

**Type**: `number | number[]`

**Required**: `false`

**Default**: `5`(in pixels) - You can change it when install _(see above)_

Padding between the element and roughly where the annotation is drawn. Default value is `5` (in pixels). If you wish to specify different `top`, `left`, `right`, `bottom` paddings, you can set the value to an array akin to CSS style padding `[top, right, bottom, left]` or just `[top & bottom, left & right]`.

#### multiline

**Type**: `boolean`

**Required**: `false`

**Default**: `false`

This property only applies to inline text. To annotate multiline text (each line separately), set this property to true.

#### iterations

**Type**: `number`

**Required**: `false`

**Default**: `2` - You can change it when install _(see above)_

By default annotations are drawn in two iterations, e.g. when underlining, drawing from left to right and then back from right to left. Setting this property can let you configure the number of iterations.

#### brackets

**Type**: `string | string[]`

**Required**: `false`

**Default**: `'right'`

Value could be a string or an array of strings, each string being one of these values: **left**, **right**, **top**, **bottom**. When drawing a bracket, this configures which side(s) of the element to bracket. Default value is `right`.

#### tag

**Type**: `string`

**Required**: `false`

**Default**: `'span'`

String HTML tag name; if falsy (for example `null` or `undefined`), the component will be renderless (the content won't be wrapped in a tag), in this case, only the first child will be rendered

#### order

**Type**: `number` | `string`

**Required**: `false`

**Default**: `0`

Works with `RoughNotationGroup` component, **order** the animation of annotations. When show is called on the group, the annotations are animated in order. For example, an annotation with order `1` will animate before order `2`. Also you can pass `orderAnnotations` prop to `RoughNotationGroup` to customize the order function.

### Events

#### init

**Parameters**: [`Annotation Object`](https://github.com/pshihn/rough-notation#annotation-object)

Called when the component is initialized.

## RoughNotationGroup Component

### Usage

```html
<RoughNotationGroup :is-show="isShow">
  <RoughNotation type="underline">Rough Notation</RoughNotation>
  <RoughNotation type="box">is</RoughNotation>
  <RoughNotation type="highlight">awesome</RoughNotation>
</RoughNotation>
```

### Props

#### isShow

**Type**: `boolean`

**Required**: `false`

**Default**: `false`

Show/Hides the annotations

#### tag

**Type**: `string`

**Required**: `false`

**Default**: `'div'`

String HTML tag name; if falsy (for example `null` or `undefined`), the component will be renderless (the content won't be wrapped in a tag), in this case, only the first child will be rendered

#### orderAnnotations

**Type**: `function`

**Required**: `false`

**Default**: `(a, b) => a - b`

Customize annotations order function. Order will be sorted in ascending order by default.

## Contributing

[CONTRIBUTING](CONTRIBUTING.md)

## License

[MIT](https://github.com/Leecason/vue-rough-notation/blob/master/LICENSE)
