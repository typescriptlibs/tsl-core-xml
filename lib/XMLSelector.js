/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  XML TypeScript Library

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License; you may not use this file except in
  compliance with the License. You may obtain a copy of the MIT License at
  https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
import { isXMLTag } from './XMLTag.js';
/* *
 *
 *  Class
 *
 * */
/**
 * Creates a selector to search in a list of XML nodes.
 */
export class XMLSelector {
    /* *
     *
     *  Static Functions
     *
     * */
    static parse(selector) {
        // @todo implement
        return;
    }
    /* *
     *
     *  Constructor
     *
     * */
    /**
     * @param selector
     * Selector to match against.
     */
    constructor(selector) {
        this.selector = selector;
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Creates a list of XML tags matching the specified conditions.
     *
     * @param nodes
     * List of nodes to search in.
     *
     * @param conditions
     * Conditions to search for.
     *
     * @return
     * List of matching XML tags, or `undefined`.
     */
    find(nodes, conditions) {
        const findings = [];
        for (const node of nodes) {
            if (isXMLTag(node)) {
                // @todo implement
            }
        }
        if (findings.length) {
            return findings;
        }
    }
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
    query(nodes) {
        // @todo implement
        return;
    }
}
/* *
 *
 *  Default Export
 *
 * */
export default XMLSelector;
