/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  XML TypeScript Library

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
/* *
 *
 *  Constants
 *
 * */
export const XMLCharacterEntities = new RegExp('[\'"\\s\\/<=>]', 'gsu');
export const ControlCharacterEntities = new RegExp('[' +
    '\\x00-\\x08' +
    '\\x0b-\\x0c' +
    '\\x0e-\\x1f' +
    '\\x7f-\\x84' +
    '\\x86-\\x9f' +
    ']', 'gsu');
/* *
 *
 *  Default Export
 *
 * */
export default {
    ControlCharacterEntities
};
