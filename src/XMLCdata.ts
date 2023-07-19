/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  XML TypeScript Library

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License; you may not use this file except in
  compliance with the License. You may obtain a copy of the MIT License at
  https://typescriptlibs.org/LICENSE.txt

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
 * Represents an XML character data node.
 */
export interface XMLCdata {

    /**
     * Text of the character data.
     */
    cdata: string;

    /**
     * Use this property to determine, if the object is a comment node.
     */
    comment?: undefined;

    /**
     * Use this property to determine, if the object is a tag node.
     */
    tag?: undefined;

}


/* *
 *
 *  Functions
 *
 * */


export function isXMLCdata (
    xmlNode: unknown
): xmlNode is XMLCdata {
    return (
        xmlNode !== null &&
        typeof xmlNode === 'object' &&
        typeof ( xmlNode as XMLCdata ).cdata === 'string'
    );
}


/* *
 *
 *  Default Export
 *
 * */


export default XMLCdata;
