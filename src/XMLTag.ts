/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  XML TypeScript Library

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/


/* *
 *
 *  Imports
 *
 * */


import XMLNode from './XMLNode.js';


/* *
 *
 *  Declarations
 *
 * */


/**
 * Represent an XML tag.
 */
export interface XMLTag {

    /**
     * Attributes of the XML tag. Attribute names might include a namespace.
     */
    attributes?: Record<string, string>;

    /**
     * Use this property to determine, if the object is a character data node.
     */
    cdata?: undefined;

    /**
     * Use this property to determine, if the object is a comment node.
     */
    comment?: undefined;

    /**
     * Indicates a self-closing XML tag.
     */
    empty?: boolean;

    /**
     * Encapsuled inner XML nodes, if the XML tag is part of an XMLTree.
     */
    innerXML?: Array<XMLNode>;

    /**
     * Name of the XML tag. The name might include a namespace.
     */
    tag: string;

}


/* *
 *
 *  Functions
 *
 * */


export function isXMLTag (
    xmlNode: unknown
): xmlNode is XMLTag {
    return (
        xmlNode !== null &&
        typeof xmlNode === 'object' &&
        typeof ( xmlNode as XMLTag ).tag === 'string'
    );
}


/* *
 *
 *  Default Export
 *
 * */


export default XMLTag;
