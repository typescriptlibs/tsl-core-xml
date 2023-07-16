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
     * - Group 1: Attribute name.
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
     * RegExp pattern for incomplete XML tag on buffer edge.
     * - Group 1: Incomplete tag name.
     */
    IncompleteTag: RegExp;
    /**
     * RegExp pattern for XML open tag.
     * - Group 1: Tag name.
     */
    OpenTag: RegExp;
    /**
     * RegExp pattern for XMLTree selector.
     * - Group 1: Tag name.
     * - Group 2: CSS class.
     * - Group 3: HTML ID attribute.
     * - Group 4: Attribute name.
     * - Group 5: Attribute value
     */
    Selector: RegExp;
};
export default XMLRegExp;
