# Garden SVG Icons [![npm version][npm version badge]][npm version link] [![Build Status][build status badge]][build status link] [![Dependency Status][dependency status badge]][dependency status link]

[npm version badge]: https://flat.badgen.net/npm/v/@zendeskgarden/svg-icons
[npm version link]: https://www.npmjs.com/package/@zendeskgarden/svg-icons
[build status badge]: https://flat.badgen.net/circleci/github/zendeskgarden/svg-icons/main?label=build
[build status link]: https://circleci.com/gh/zendeskgarden/svg-icons/tree/main
[dependency status badge]: https://flat.badgen.net/david/dev/zendeskgarden/svg-icons?label=dependencies
[dependency status link]: https://david-dm.org/zendeskgarden/svg-icons?type=dev

> :seedling: Garden is the design system by Zendesk

This repo packages a collection of SVG icons used throughout Zendesk
products. All source icons are optimized for size + readability.

## Installation

```sh
npm install @zendeskgarden/svg-icons
```

The package contains a `src` folder with individual SVG icons along with
a combined "spritemap" `dist` of SVG symbols.

## Usage

Garden SVGs come in two flavors – monochrome and two-tone. The primary
fill/stroke will always be specified as `currentColor`. This means CSS
text `color` style will cascade to the icon. Two-tone icons can receive
a secondary color via the `fill` style property.

In the following example, the top arrow of the "sort" icon will be blue; the bottom arrow
will be red (see [_Spritemap_](#spritemap) below for more re: SVG `use` with an
external source).

```html
<svg style="color: blue; fill: red;">
  <use xlink:href="index.svg#zd-svg-icon-12-sort-fill">
</svg>
```

Once installed and configured, SVG icons may be accessed in a variety of ways depending on your application needs.

### Bundling & configuration

This library delivers icons as raw SVG files. To consume them directly as React components or import them in your JavaScript, your build environment must be configured to transform SVG assets. While many modern frameworks handle this automatically, custom setups may require specific plugins.

**Vite**
Vite does not import SVGs as React components by default. You will likely need to configure a plugin such as [vite-plugin-svgr](https://www.npmjs.com/package/vite-plugin-svgr) to enable this behavior.

**Webpack**
If you are using a custom Webpack configuration, ensure you have a loader installed that can handle SVG files, such as [@svgr/webpack](https://www.npmjs.com/package/@svgr/webpack).

### React / JavaScript

In the following snippet, a source SVG is imported directly as a component.

_Note: This example is for users using `@svgr/webpack`. See bundler configuration details described above._

```jsx
import React from 'react';
import Icon from '@zendeskgarden/svg-icons/src/16/star-stroke.svg';

const StarButton = () => (
  <button>
    <Icon />
  </button>
);

export default StarButton;
```

### Spritemap

The main distribution from the npm package is an SVG "spritemap"
containing all source icons as `<symbol>` elements. Once that file is
hosted, any icon may be externally referenced using its unique ID.

```html
<svg>
  <use xlink:href="/path/to/index.svg#zd-svg-icon-16-chevron-down-stroke">
</svg>
```

By referencing the external resource, you take advantage of the
browser cache. Subsequent `<use xlink:href>` will leverage the cached
SVG spritemap. Note you may need a polyfill like
[svg4everybody](https://github.com/jonathantneal/svg4everybody) to
support legacy browsers that can't handle external SVG content.

### PostCSS

Several Garden [CSS Components](https://github.com/zendeskgarden/css-components) utilize
the [postcss-inline-svg](https://github.com/TrySound/postcss-inline-svg)
plugin to compile SVGs into CSS.

1. **Configure the plugin:**

   ```json
   "postcss-inline-svg": {
     "path": "node_modules/@zendeskgarden/svg-icons/src"
   }
   ```

2. **Load an SVG in your source CSS:**

   ```css
   .icon {
     background-image: svg-load('16/remove.svg', color: #007fab);
   }
   ```

3. **Build via PostCSS** to inline the SVG into your destination CSS as a data URI:

   ```css
   .icon {
     background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)' width='16' height='16' viewBox='0 0 16 16' color='%23007FAB' ...");
   }
   ```

## Contribution

Thanks for your interest in Garden! Community involvement helps make our
design system fresh and tasty for everyone.

Got issues with what you find here? Please feel free to create an
[issue](https://github.com/zendeskgarden/svg-icons/issues/new).

If you'd like to take a crack at making some changes, please follow our
[contributing](.github/CONTRIBUTING.md) documentation for details needed
to submit a PR.

Community behavior is benevolently ruled by a [code of
conduct](.github/CODE_OF_CONDUCT.md). Please participate accordingly.

## License

Copyright 2025 Zendesk

Licensed under the [Apache License, Version 2.0](LICENSE.md)
