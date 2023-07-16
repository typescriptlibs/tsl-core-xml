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


import XMLNode from './XMLNode.js';

import XMLRegExp from './XMLRegExp.js';

import XMLTag, { isXMLTag } from './XMLTag.js';


/* *
 *
 *  Declarations
 *
 * */


export interface SelectorConditions {
    attribute?: string;
    attributeMatch?: string;
    cssClass: string;
    htmlID?: string;
    tag: string;
}


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


    public static parse (
        selector: string
    ): ( XMLSelector | undefined ) {
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
    private constructor (
        selector: Array<SelectorConditions>
    ) {
        this.selector = selector;
    }


    /* *
     *
     *  Properties
     *
     * */


    public containsID?: boolean;

    private selector: Array<SelectorConditions>;


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
    public find (
        nodes: Exclude<XMLTag['innerXML'], undefined>,
        conditions: SelectorConditions
    ): ( Array<XMLTag> | undefined ) {
        const findings: Array<XMLTag> = [];

        for ( const node of nodes ) {
            if ( isXMLTag( node ) ) {
                // @todo implement
            }
        }

        if ( findings.length ) {
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
    public query (
        nodes: Array<XMLNode>
    ): ( Array<XMLTag> | undefined ) {
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
