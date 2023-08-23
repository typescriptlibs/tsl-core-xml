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
    attribute: /([^'"\s\/<=>]+)(?:=(?:'([^']*)'|"([^"]*)"|([^'"\s\/<=>]+)))?/gsu,


    /**
     * RegExp pattern for XML attribute selector.
     * - Group 1: Attribute key.
     * - Group 2: Match operation.
     * - Group 3: Match value.
     */
    attributeSelector: /\[([\w\-|]+?)(=|~=|\|=|\^=|\$=|\*=)([^\[\]]*)\]/gsu,

    /**
     * RegExp pattern for XML character data.
     * - Group 1: CDATA.
     */
    cdata: /<!\[CDATA\[(.*?)\]\]>/su,


    /**
     * RegExp pattern for XML close tag.
     * - Group 1: Tag name.
     */
    closeTag: /<(\/[\w:][\w\-.:]*)>/su,


    /**
     * RegExp pattern for XML comment.
     * - Group 1: Comment.
     */
    comment: /<!--((?:[^<]|<[^!])*?)-->/su,


    /**
     * RegExp pattern for XML escape entity.
     * - Group 1: Character name.
     * - Group 2: Character decimal code.
     * - Group 3: Character hexadecimal code.
     */
    escapeEntity: /&(?:(\w+)|#(\d+)|#x([0-9A-F]+));/gisu,


    /**
     * RegExp pattern for incomplete XML tag on buffer edge.
     * - Group 1: Incomplete tag name.
     */
    incompleteTag: /<$|<([\/!?]?[\w\-.:]*)\b[^<]*$/su,


    /**
     * RegExp pattern for XML open tag.
     * - Group 1: Tag name.
     */
    openTag: /<([!?]?[\w:][\w\-.:]*)\b/su,


    /**
     * RegExp pattern for XML selector.
     * - Group 1: Tag name.
     * - Group 2: ID attribute.
     * - Group 3: Class attribute.
     * - Group 4: Other attributes.
     */
    selector: /(\*|[\w\-|]+)(#[\w\-]*)?(\.[\w\-\.]+)?((?:\[[^\[\]]+\])+)?/su,


};


/* *
 *
 *  Default Export
 *
 * */


export default XMLRegExp;
