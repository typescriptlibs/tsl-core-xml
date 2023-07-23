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


import XMLCdata from './XMLCdata.js';

import XMLComment from './XMLComment.js';

import XMLTag from './XMLTag.js';


/* *
 *
 *  Declarations
 *
 * */


/**
 * Represents a node in an XML source. This can be either a comment, a tag, or a
 * string.
 */
export type XMLNode = (
    | string
    | XMLCdata
    | XMLComment
    | XMLTag
);


/* *
 *
 *  Functions
 *
 * */


export function isString (
    xmlNode: unknown
): xmlNode is string {
    return typeof xmlNode === 'string';
}


/* *
 *
 *  Default Export
 *
 * */


export default XMLNode;
