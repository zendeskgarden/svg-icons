/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

module.exports = {
  rules: {
    attr: [
      {
        'fill-rule': false
      },
      {
        'rule::selector': 'circle',
        'stroke-linejoin': false
      },
      {
        'rule::selector': 'svg',
        viewBox: /^0 0/u
      }
    ],
    custom: [
      (reporter, $, ast) => {
        const strokeCurrentColor = $.find('[stroke="currentColor"]');
        const fillCurrentColor = $.find('[fill="currentColor"]');

        if (strokeCurrentColor.length + fillCurrentColor.length === 0) {
          reporter.error('Missing `currentColor`', null, ast);
        }
      }
    ]
  }
};
