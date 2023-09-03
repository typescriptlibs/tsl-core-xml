/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  XML TypeScript Library

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
import XMLNode from './XMLNode.js';
/**
 * Scans text sources for XML tags.
 */
export declare class XMLPrinter {
    constructor(nodes: Array<XMLNode>);
    /**
     * Nodes to print.
     */
    readonly nodes: Array<XMLNode>;
    /**
     * Prints XML nodes as a string.
     *
     * @param nodes
     * Node or nodes to print as a string.
     *
     * @param noEscape
     * Disable escaping of XML characters. Requires escaping in node properties
     * to prevent security risks like XML injections.
     *
     * @return
     * XML nodes as a string.
     */
    toString(nodes?: (XMLNode | Array<XMLNode>), noEscape?: boolean): string;
}
export default XMLPrinter;
