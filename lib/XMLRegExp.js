/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  XML TypeScript Library

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License; you may not use this file except in
  compliance with the License. You may obtain a copy of the MIT License at
  https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
/* *
 *
 *  Constants
 *
 * */
/**
 * Regular expressions used to detect and extract XML tags in text.
 */
export const XMLRegExp = {
    /**
     * RegExp pattern for XML attribute.
     * - Group 1: Trailing attribute name, including special characters.
     * - Group 2: Single quote encapsuled value.
     * - Group 3: Double quote encapsuled value.
     * - Group 4: None encapsuled value.
     */
    Attribute: /\s+([^'"\s\/<=>]+)(?:=(?:'([^']*?)'|"([^"]*?)"|([^'"\s\/<=>]+?)))?/gsu,
    /**
     * RegExp pattern for XML comment.
     * - Group 1: Comment.
     */
    Comment: /<!--(.*?)-->/su,
    /**
     * RegExp pattern for XML tag.
     * - Group 1: Trailing tag name, including special characters.
     * - Group 2: Attributes separated by space.
     * - Group 3: Empty character.
     */
    Tag: /<([^\s<=>]+)([^>]*?)([\/?]?)>/su
};
/* *
 *
 *  Default Export
 *
 * */
export default XMLRegExp;
