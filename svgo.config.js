/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

module.exports = {
  js2svg: {
    pretty: true,
    indent: 2
  },
  multipass: true,
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeViewBox: false,
          convertPathData: false,
          convertColors: {
            currentColor: true
          },
          removeUnknownsAndDefaults: {
            unknownAttrs: false
          },
          inlineStyles: {
            onlyMatchedOnce: false
          }
        }
      }
    },
    {
      name: 'addAttributesToSVGElement',
      params: {
        attributes: [
          {
            focusable: false
          },
          'height',
          'width'
        ]
      }
    },
    {
      name: 'removeAttrs',
      params: {
        attrs: '(baseProfile|class|clip-rule|id|stroke-miterlimit|version)'
      }
    },
    {
      name: 'removeAttributesBySelector',
      params: {
        selectors: [
          {
            selector: 'svg',
            attributes: ['fill']
          }
        ]
      }
    },
    {
      name: 'mergePaths',
      params: {
        force: true
      }
    }
  ]
};
