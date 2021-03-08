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
      name: 'convertColors',
      params: {
        currentColor: 'red'
      }
    },
    {
      name: 'inlineStyles',
      params: {
        onlyMatchedOnce: false
      }
    },
    {
      name: 'removeAttrs',
      params: {
        attrs: '(baseProfile|class|clip-rule|id|stroke-miterlimit|version)'
      }
    },
    { name: 'removeTitle' },
    {
      name: 'removeViewBox',
      active: false
    },
    {
      name: 'removeUnknownsAndDefaults',
      params: {
        unknownAttrs: false
      }
    },
    { name: 'sortAttrs' }
  ]
};
