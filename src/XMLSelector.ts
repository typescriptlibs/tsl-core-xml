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


export interface AttributeTerm {
    attribute?: string;
    logic?: string;
    value?: string;
}


export interface SelectorTerms {
    attributes?: Array<AttributeTerm>;
    classes?: Array<string>;
    id?: string;
    tag?: string;
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
        selectorString: string
    ): ( XMLSelector | undefined ) {
        const selectorsStrings = selectorString.split( /\s+/su );
        const selectors: Array<SelectorTerms> = [];
        const selector = new XMLSelector( selectors );

        let match: ( RegExpMatchArray | null );
        let terms: SelectorTerms;

        for ( let i = 0, iEnd = selectorsStrings.length; i < iEnd; ++i ) {
            match = selectorsStrings[i].match( XMLRegExp.selector );

            if ( !match ) {
                continue;
            } console.log( match );

            terms = {};

            if (
                match[1] &&
                match[1] !== '*'
            ) {
                terms.tag = match[1].replace( '|', ':' );
            }

            if ( match[2] ) {
                const classesStrings = match[2].split( /\.+/g );
                const classes: Array<string> = [];

                for ( let j = 0, jEnd = classesStrings.length; j < jEnd; ++j ) {
                    if ( classesStrings[j] ) {
                        classes.push( classesStrings[j] );
                    }
                }

                terms.classes = classes;
            }

            if ( match[3] ) {
                terms.id = match[3].substring( 1 );
            }

            if ( match[4] ) {
                const attributes: Array<AttributeTerm> = [];
                const scanner = new RegExp( XMLRegExp.attributeSelector.source, XMLRegExp.attributeSelector.flags );

                let matchAttribute: ( RegExpExecArray | null );

                while ( matchAttribute = scanner.exec( match[4] ) ) {
                    attributes.push( {
                        attribute: matchAttribute[1].replace( '|', ':' ),
                        logic: matchAttribute[2],
                        value: matchAttribute[3]
                    } );
                }

                terms.attributes = attributes;
            }

            selectors.push( terms );
        }

        return selector;
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
    public constructor (
        selectors: Array<SelectorTerms>
    ) {
        this.selectors = selectors;
    }


    /* *
     *
     *  Properties
     *
     * */


    public containsID?: boolean;

    public selectors: Array<SelectorTerms>;


    /* *
     *
     *  Functions
     *
     * */


    /**
     * Creates a list of XML tags matching the specified terms.
     *
     * @param nodes
     * List of nodes to search in.
     *
     * @param terms
     * Matching terms to search for.
     *
     * @return
     * List of matching XML tags, or `undefined`.
     */
    public find (
        nodes: Exclude<XMLTag['innerXML'], undefined>,
        terms: SelectorTerms
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
        const selectors = this.selectors;

        let findings: ( Array<XMLTag> | undefined );

        for ( let i = 0, iEnd = selectors.length; i < iEnd; ++i ) {
            findings = this.find( nodes, selectors[i] );

            if ( !findings ) {
                return;
            }

            nodes = findings;
        }

        return findings;
    }


}


/* *
 *
 *  Default Export
 *
 * */


export default XMLSelector;
