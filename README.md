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
- [License](#license)

## Demo

[Demo Page](https://leecason.github.io/vue-rough-notation/)

[Code Sandbox](https://codesandbox.io/s/vue-rough-notation-q8cxq)

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

## Global options

The default global options are:

```js
{
  // Turn on/off animation when annotating.
  animate: true,
  // Duration of the animation in milliseconds.
  animationDuration: 800,
  // Delay in animation in milliseconds.
  animationDelay: 0,
  // Representing the color of the annotation sketch.
  color: 'currentColor',
  // Width of the annotation strokes.
  strokeWidth: 1,
  // (in pixels) Padding between the element and roughly where the annotation is drawn.
  padding: 5,
}
```

You can change the options when install:

```js
import VueRoughNotation from 'vue-rough-notation';

Vue.use(VueRoughNotation, options);
```

## RoughNotation Component

### Usage

```html
<RoughNotation
  :is-show="isShow"
  type="underline"
>
  <span>Rough Notation is awesome</span>
</RoughNotation>
```

### Props

#### type

**Type**: `string`

**required**: `true`

This is a mandatory field. It sets the annotation style. Following are the list of supported annotation types:

- **underline**: Create a sketchy underline below an element.
- **box**: This style draws a box around the element.
- **circle**: Draw a circle around the element.
- **highlight**: Creates a highlight effect as if maked by a highlighter.
- **strike-through**: This style draws a box around the element.
- **crossed-off**: This style draws a box around the element.

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

#### animationDelay

**Type**: `number`

**Required**: `false`

**Default**: `0` - You can change it when install _(see above)_.

Delay in animation in milliseconds.

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

**Type**: `number`

**Required**: `false`

**Default**: `5`(in pixels) - You can change it when install _(see above)_

Padding between the element and roughly where the annotation is drawn.

#### tag

**Type**: `string`

**Required**: `false`

**Default**: `'span'`

String HTML tag name; if falsy (for example `null` or `undefined`), the component will be renderless (the content won't be wrapped in a tag), in this case, only the first child will be rendered

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

## License

[MIT](https://github.com/Leecason/vue-rough-notation/blob/master/LICENSE)
