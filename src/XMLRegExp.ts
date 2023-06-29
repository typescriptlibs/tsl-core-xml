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
     * - Group 1: Attribute name.
     * - Group 2: Single quote encapsuled value.
     * - Group 3: Double quote encapsuled value.
     * - Group 4: None encapsuled value.
     */
    Attribute: /([^'"\s\/<=>]+)(?:=(?:'([^']*)'|"([^"]*)"|([^'"\s\/<=>]+)))?/gsu,

    /**
     * RegExp pattern for XML close tag.
     * - Group 1: Tag name.
     */
    CloseTag: /<(\/\w[\w\-.:]*)>/su,

    /**
     * RegExp pattern for XML comment.
     * - Group 1: Comment.
     */
    Comment: /<!--((?:[^<]|<(?!!))*?)-->/su,

    /**
     * RegExp pattern for XML declaration.
     * - Group 1: Declaration name.
     * - Group 2: Attributes separated by space.
     */
    Declaration: /<(\?\w[\w\-.:]*)(\b[^>]*)?\?>/su,

    /**
     * RegExp pattern for XML definition.
     * - Group 1: Definition name.
     * - Group 2: Attributes separated by space.
     */
    Definition: /<(!\w[\w\-.:]*)(\b[^>]*)?>/su,

    /**
     * RegExp pattern for regular XML tag.
     * - Group 1: Tag name.
     * - Group 2: Space of attributes.
     * - Group 3: Self-closing character.
     */
    Tag: /<([\w:][\w\-.:]*)(\b(?:'[^']*'|"[^"]*"|[^'"<>]+)*)?>/su

};


/* *
 *
 *  Default Export
 *
 * */


export default XMLRegExp;
