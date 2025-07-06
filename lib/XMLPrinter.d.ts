/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  XML TypeScript Library

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
import XMLNode from './XMLNode.js';
/**
 * Print options.
 */
export interface XMLPrinterOptions {
    /**
     * Disable escaping of XML characters. Requires escaping in node properties
     * to avoid security risks like XML injections.
     */
    noEscaping?: boolean;
    /**
     * Print all XML in one line.
     */
    noLineBreaks?: boolean;
}
/**
 * Converts XML nodes to strings.
 */
export declare class XMLPrinter {
    constructor(nodes?: Array<XMLNode>, options?: XMLPrinterOptions);
    /**
     * Nodes to print.
     */
    readonly nodes: Array<XMLNode>;
    /**
     * Print options.
     */
    readonly options: XMLPrinterOptions;
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
