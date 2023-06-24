/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  XML TypeScript Library

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License; you may not use this file except in
  compliance with the License. You may obtain a copy of the MIT License at
  https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
import XMLNode from './XMLNode.js';
/**
 * Represent an XML tag.
 */
export interface XMLTag {
    /**
     * Attributes of the XML tag. Attribute names might include a namespace.
     */
    attributes?: Record<string, string>;
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
     * Encapsuled inner text, if the XML tag is part of an XMLTree.
     */
    innerText?: string;
    /**
     * Name of the XML tag. The name might include a namespace.
     */
    tag: string;
}
export default XMLTag;
