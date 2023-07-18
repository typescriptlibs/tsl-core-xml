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
     * RegExp pattern for XML character data.
     * - Group 1: CDATA.
     */
    Cdata: RegExp;
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
     * RegExp pattern for XML escape entity.
     * - Group 1: Character name.
     * - Group 2: Character decimal code.
     * - Group 3: Character hexadecimal code.
     */
    EscapeEntity: RegExp;
    /**
     * RegExp pattern for incomplete XML tag on buffer edge.
     * - Group 1: Incomplete tag name.
     */
    IncompleteTag: RegExp;
    /**
     * RegExp pattern for XML tag begin.
     * - Group 1: Tag name.
     */
    OpenTag: RegExp;
};
export default XMLRegExp;
