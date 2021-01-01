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
a secondary color via the `fill` style property. In the following
example, the top arrow of the "sort" icon will be blue; the bottom arrow
will be red (see _spritemap_ below for more re: SVG `use` with an
external source).

```html
<svg style="color: blue; fill: red;">
  <use xlink:href="index.svg#zd-svg-icon-12-sort-fill">
</svg>
```

Once installed, SVG icons may be accessed in a variety of ways. The
following list demonstrates several possibilities, however usage will
vary depending on the particular needs of your application.

- **JavaScript**

  In the following snippet, a source SVG is loaded just like any other
  JS module. SVGs loaded in this manner will benefit from the same
  caching as any other JS asset.

  ```js
  import ZendeskIcon from "@zendeskgarden/svg-icons/src/26/zendesk.svg";

  class ZendeskButton extends React.Component {
    render() {
      return (
        <button>
          <ZendeskIcon />
        </button>
      );
    }
  }
  ```

- **PostCSS**

  Several Garden [CSS
  Components](https://github.com/zendeskgarden/css-components) utilize
  the [postcss-inline-svg](https://github.com/TrySound/postcss-inline-svg)
  plugin to compile SVGs into CSS.

  1. Configure the plugin:

  ```json
  "postcss-inline-svg": {
    "path": "node_modules/@zendeskgarden/svg-icons/src"
  }
  ```

  2. Load an SVG in your source CSS:

  ```css
  .icon {
    background-image: svg-load("14/remove.svg", color: #007fab);
  }
  ```

  3. Build via postcss to inline the SVG into your destination CSS as a
     data URI:

  ```css
  .icon {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 14 14' color='%23007FAB' ...");
  }
  ```

- **Spritemap**

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
  SVG spritemap. Note you'll need to use a polyfill like
  [svg4everybody](https://github.com/jonathantneal/svg4everybody) to
  compensate for browsers (IE9-11) that can't handle external SVG content.

- **Build pipeline**

  There are numerous plugins for handling SVG files via an asset bundler
  (webpack, gulp, grunt, etc.). Search
  [npm](https://www.npmjs.com/search?q=svg) and select one that fits your
  needs.

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

Copyright 2021 Zendesk

Licensed under the [Apache License, Version 2.0](LICENSE.md)
