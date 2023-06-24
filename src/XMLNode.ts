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
    | XMLComment
    | XMLTag
);


/* *
 *
 *  Default Export
 *
 * */


export default XMLNode;
