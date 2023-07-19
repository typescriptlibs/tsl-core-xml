/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  XML TypeScript Library

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License; you may not use this file except in
  compliance with the License. You may obtain a copy of the MIT License at
  https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
/**
 * Represents an XML comment node.
 */
export interface XMLComment {
    /**
     * Use this property to determine, if the object is a character data node.
     */
    cdata?: undefined;
    /**
     * Text of the comment.
     */
    comment: string;
    /**
     * Use this property to determine, if the object is a tag node.
     */
    tag?: undefined;
}
export declare function isXMLComment(xmlNode: unknown): xmlNode is XMLComment;
export default XMLComment;
