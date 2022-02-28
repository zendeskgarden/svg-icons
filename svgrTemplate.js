/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

module.exports = (variables, { tpl }) => {
  return tpl`/**
  * Copyright Zendesk, Inc.
  *
  * Use of this source code is governed under the Apache License, Version 2.0
  * found at http://www.apache.org/licenses/LICENSE-2.0.
  */
 
${variables.imports};

${variables.interfaces};

const ${variables.componentName} = (${variables.props}) => (
  ${variables.jsx}
);
 
${variables.exports};
`
}
;
