/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  XML TypeScript Library

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License; you may not use this file except in
  compliance with the License. You may obtain a copy of the MIT License at
  https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
/**
 * Regular expressions used to detect and extract XML tags in text.
 */
export declare const XMLRegExp: {
    /**
     * RegExp pattern for XML attribute.
     * - Group 1: Trailing attribute name, including special characters.
     * - Group 2: Single quote encapsuled value.
     * - Group 3: Double quote encapsuled value.
     * - Group 4: None encapsuled value.
     */
    Attribute: RegExp;
    /**
     * RegExp pattern for XML close tag.
     * - Group 1: Tag name.
     */
    CloseTag: RegExp;
    /**
     * RegExp pattern for XML comment.
     * - Group 1: Comment.
     */
    Comment: RegExp;
    /**
     * RegExp pattern for XML declaration.
     * - Group 1: Declaration name.
     * - Group 2: Attributes separated by space.
     */
    Declaration: RegExp;
    /**
     * RegExp pattern for XML definition.
     * - Group 1: Definition name.
     * - Group 2: Attributes separated by space.
     */
    Definition: RegExp;
    /**
     * RegExp pattern for regular XML tag.
     * - Group 1: Trailing tag name, including special characters.
     * - Group 2: Space of attributes and optional self-closing character.
     */
    Tag: RegExp;
};
export default XMLRegExp;
