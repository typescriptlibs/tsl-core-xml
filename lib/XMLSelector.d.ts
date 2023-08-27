/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  XML TypeScript Library

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
import XMLNode from './XMLNode.js';
import XMLTag from './XMLTag.js';
export interface AttributeTerm {
    attribute: string;
    logic: string;
    value: string;
}
export interface SelectorTerm {
    attributes?: Array<AttributeTerm>;
    classes?: Array<string>;
    id?: string;
    tag?: string;
}
/**
 * Creates a selector to search in a list of XML nodes.
 */
export declare class XMLSelector {
    /**
     * Parses selector terms in the string and create a XMLSelector instance
     * with them.
     *
     * @param selectorString
     * String with selector terms to parse.
     *
     * @return
     * The XMLSelector instance with the parsed selector terms, or undefined on
     * error.
     */
    static parse(selectorString: string): (XMLSelector | undefined);
    /**
     * @param selector
     * Selector to match against.
     */
    constructor(selectors: Array<SelectorTerm>);
    containsID?: boolean;
    selectors: Array<SelectorTerm>;
    /**
     * Creates a list of XML tags matching the specified terms.
     *
     * @param nodes
     * List of nodes to search in.
     *
     * @param term
     * Matching term to search for.
     *
     * @return
     * List of matching XML tags, or `undefined`.
     */
    find(nodes: Array<XMLNode>, term: SelectorTerm): (Array<XMLTag> | undefined);
    /**
     * Creates a list of XML tags matching the selector conditions.  The
     * matching is done using depth-first pre-order traversal of the XML nodes.
     *
     * @param nodes
     * Array of nodes to search in.
     *
     * @return
     * List of matching XML tags, or `undefined`.
     */
    query(nodes: Array<XMLNode>): (Array<XMLTag> | undefined);
}
export default XMLSelector;
