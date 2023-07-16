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
 * Represents an XML comment node.
 */
export interface XMLComment {

    /**
     * Text of the comment.
     */
    comment: string;

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


export function isXMLComment (
    xmlNode: XMLNode
): xmlNode is XMLComment {
    return (
        typeof xmlNode === 'object' &&
        typeof xmlNode.comment === 'string'
    );
}


/* *
 *
 *  Default Export
 *
 * */


export default XMLComment;
