/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  XML TypeScript Library

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

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
    attribute: RegExp;
    /**
     * RegExp pattern for XML attribute selector.
     * - Group 1: Attribute key.
     * - Group 2: Match operation.
     * - Group 3: Match value.
     */
    attributeSelector: RegExp;
    /**
     * RegExp pattern for XML character data.
     * - Group 1: CDATA.
     */
    cdata: RegExp;
    /**
     * RegExp pattern for XML close tag.
     * - Group 1: Tag name.
     */
    closeTag: RegExp;
    /**
     * RegExp pattern for XML comment.
     * - Group 1: Comment.
     */
    comment: RegExp;
    /**
     * RegExp pattern for XML escape entity.
     * - Group 1: Character name.
     * - Group 2: Character decimal code.
     * - Group 3: Character hexadecimal code.
     */
    escapeEntity: RegExp;
    /**
     * RegExp pattern for incomplete XML tag on buffer edge.
     * - Group 1: Incomplete tag name.
     */
    incompleteTag: RegExp;
    /**
     * RegExp pattern for XML open tag.
     * - Group 1: Tag name.
     */
    openTag: RegExp;
    /**
     * RegExp pattern for XML selector.
     * - Group 1: Tag name.
     * - Group 2: ID attribute.
     * - Group 3: Class attribute.
     * - Group 4: Other attributes.
     */
    selector: RegExp;
};
export default XMLRegExp;
