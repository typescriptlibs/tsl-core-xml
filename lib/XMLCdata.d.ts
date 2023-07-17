/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  XML TypeScript Library

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License; you may not use this file except in
  compliance with the License. You may obtain a copy of the MIT License at
  https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
import XMLNode from './XMLNode.js';
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
export declare function isXMLCdata(xmlNode: XMLNode): xmlNode is XMLCdata;
export default XMLCdata;
