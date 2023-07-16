/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  XML TypeScript Library

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License; you may not use this file except in
  compliance with the License. You may obtain a copy of the MIT License at
  https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
import XMLNode from './XMLNode.js';
import XMLTag from './XMLTag.js';
export interface SelectorConditions {
    attribute?: string;
    attributeMatch?: string;
    cssClass: string;
    htmlID?: string;
    tag: string;
}
/**
 * Creates a selector to search in a list of XML nodes.
 */
export declare class XMLSelector {
    static parse(selector: string): (XMLSelector | undefined);
    /**
     * @param selector
     * Selector to match against.
     */
    private constructor();
    containsID?: boolean;
    private selector;
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
    find(nodes: Exclude<XMLTag['innerXML'], undefined>, conditions: SelectorConditions): (Array<XMLTag> | undefined);
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
