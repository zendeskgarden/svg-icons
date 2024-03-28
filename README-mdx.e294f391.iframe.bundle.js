/*! For license information please see README-mdx.e294f391.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_zendeskgarden_svg_icons=self.webpackChunk_zendeskgarden_svg_icons||[]).push([[703],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./src/.stories/README.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),external_STORYBOOK_MODULE_CLIENT_LOGGER_=__webpack_require__("@storybook/client-logger"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");(0,external_STORYBOOK_MODULE_CLIENT_LOGGER_.deprecate)("Import from '@storybook/addon-docs/blocks' is deprecated. Please import from '@storybook/blocks' instead.");const README_namespaceObject='# Garden SVG Icons [![npm version][npm version badge]][npm version link] [![Build Status][build status badge]][build status link] [![Dependency Status][dependency status badge]][dependency status link]\n\n[npm version badge]: https://flat.badgen.net/npm/v/@zendeskgarden/svg-icons\n[npm version link]: https://www.npmjs.com/package/@zendeskgarden/svg-icons\n[build status badge]: https://flat.badgen.net/circleci/github/zendeskgarden/svg-icons/main?label=build\n[build status link]: https://circleci.com/gh/zendeskgarden/svg-icons/tree/main\n[dependency status badge]: https://flat.badgen.net/david/dev/zendeskgarden/svg-icons?label=dependencies\n[dependency status link]: https://david-dm.org/zendeskgarden/svg-icons?type=dev\n\n> :seedling: Garden is the design system by Zendesk\n\nThis repo packages a collection of SVG icons used throughout Zendesk\nproducts. All source icons are optimized for size + readability.\n\n## Installation\n\n```sh\nnpm install @zendeskgarden/svg-icons\n```\n\nThe package contains a `src` folder with individual SVG icons along with\na combined "spritemap" `dist` of SVG symbols.\n\n## Usage\n\nGarden SVGs come in two flavors – monochrome and two-tone. The primary\nfill/stroke will always be specified as `currentColor`. This means CSS\ntext `color` style will cascade to the icon. Two-tone icons can receive\na secondary color via the `fill` style property. In the following\nexample, the top arrow of the "sort" icon will be blue; the bottom arrow\nwill be red (see _spritemap_ below for more re: SVG `use` with an\nexternal source).\n\n```html\n<svg style="color: blue; fill: red;">\n  <use xlink:href="index.svg#zd-svg-icon-12-sort-fill">\n</svg>\n```\n\nOnce installed, SVG icons may be accessed in a variety of ways. The\nfollowing list demonstrates several possibilities, however usage will\nvary depending on the particular needs of your application.\n\n- **JavaScript**\n\n  In the following snippet, a source SVG is loaded just like any other\n  JS module. SVGs loaded in this manner will benefit from the same\n  caching as any other JS asset.\n\n  ```js\n  import ZendeskIcon from \'@zendeskgarden/svg-icons/src/26/zendesk.svg\';\n\n  class ZendeskButton extends React.Component {\n    render() {\n      return (\n        <button>\n          <ZendeskIcon />\n        </button>\n      );\n    }\n  }\n  ```\n\n- **PostCSS**\n\n  Several Garden [CSS\n  Components](https://github.com/zendeskgarden/css-components) utilize\n  the [postcss-inline-svg](https://github.com/TrySound/postcss-inline-svg)\n  plugin to compile SVGs into CSS.\n\n  1. Configure the plugin:\n\n  ```json\n  "postcss-inline-svg": {\n    "path": "node_modules/@zendeskgarden/svg-icons/src"\n  }\n  ```\n\n  2. Load an SVG in your source CSS:\n\n  ```css\n  .icon {\n    background-image: svg-load(\'16/remove.svg\', color: #007fab);\n  }\n  ```\n\n  3. Build via postcss to inline the SVG into your destination CSS as a\n     data URI:\n\n  ```css\n  .icon {\n    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'16\' height=\'16\' viewBox=\'0 0 16 16\' color=\'%23007FAB\' ...");\n  }\n  ```\n\n- **Spritemap**\n\n  The main distribution from the npm package is an SVG "spritemap"\n  containing all source icons as `<symbol>` elements. Once that file is\n  hosted, any icon may be externally referenced using its unique ID.\n\n  ```html\n  <svg>\n    <use xlink:href="/path/to/index.svg#zd-svg-icon-16-chevron-down-stroke">\n  </svg>\n  ```\n\n  By referencing the external resource, you take advantage of the\n  browser cache. Subsequent `<use xlink:href>` will leverage the cached\n  SVG spritemap. Note you\'ll need to use a polyfill like\n  [svg4everybody](https://github.com/jonathantneal/svg4everybody) to\n  compensate for browsers (IE9-11) that can\'t handle external SVG content.\n\n- **Build pipeline**\n\n  There are numerous plugins for handling SVG files via an asset bundler\n  (webpack, gulp, grunt, etc.). Search\n  [npm](https://www.npmjs.com/search?q=svg) and select one that fits your\n  needs.\n\n## Contribution\n\nThanks for your interest in Garden! Community involvement helps make our\ndesign system fresh and tasty for everyone.\n\nGot issues with what you find here? Please feel free to create an\n[issue](https://github.com/zendeskgarden/svg-icons/issues/new).\n\nIf you\'d like to take a crack at making some changes, please follow our\n[contributing](.github/CONTRIBUTING.md) documentation for details needed\nto submit a PR.\n\nCommunity behavior is benevolently ruled by a [code of\nconduct](.github/CODE_OF_CONDUCT.md). Please participate accordingly.\n\n## License\n\nCopyright 2021 Zendesk\n\nLicensed under the [Apache License, Version 2.0](LICENSE.md)\n';function _createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"README"}),"\n",(0,jsx_runtime.jsx)(dist.oz,{children:README_namespaceObject.substring(README_namespaceObject.indexOf(">"))})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.R)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent()}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);