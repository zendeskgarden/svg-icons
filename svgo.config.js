/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

module.exports = {
  js2svg: { pretty: true, indent: 2 },
  multipass: true,
  plugins: [
    {
      name: 'preset-default',
      params: {
        floatPrecision: 3,
        overrides: {
          convertColors: { currentColor: true },
          removeUnknownsAndDefaults: { unknownAttrs: false },
          inlineStyles: { onlyMatchedOnce: false },
          moveElemsAttrsToGroup: false
        }
      }
    },
    'convertStyleToAttrs',
    'removeRasterImages',
    'removeXlink',
    {
      name: 'cleanupListOfValues',
      params: { floatPrecision: 3 }
    },
    {
      name: 'addAttributesToSVGElement',
      params: { attributes: [{ focusable: 'false' }] }
    },
    {
      name: 'removeAttrs',
      params: { attrs: '(baseProfile|class|clip-rule|id|stroke-miterlimit|version)' }
    },
    {
      name: 'removeAttributesBySelector',
      params: { selectors: [{ selector: 'svg', attributes: ['fill'] }] }
    },
    'mergePaths'
  ]
};
