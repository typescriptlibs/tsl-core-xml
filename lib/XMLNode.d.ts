/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  XML TypeScript Library

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
import XMLCdata from './XMLCdata.js';
import XMLComment from './XMLComment.js';
import XMLTag from './XMLTag.js';
/**
 * Represents a node in an XML source. This can be either a comment, a tag, or a
 * string.
 */
export type XMLNode = (string | XMLCdata | XMLComment | XMLTag);
export declare function isString(xmlNode: unknown): xmlNode is string;
export default XMLNode;
