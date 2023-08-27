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


/* *
 *
 *  Constants
 *
 * */


const pipeRegExp = /\|+/gsu;

const pointRegExp = /\.+/gsu;

const spaceRegExp = /\s+/gsu;


/* *
 *
 *  Functions
 *
 * */


function matchAttributes (
    attributes?: Record<string, string>,
    attributeTerms: Array<AttributeTerm> = []
): boolean {

    if ( !attributes ) {
        return attributeTerms.length === 0;
    }

    let value: string;
    let termValue: string;

    for ( const attributeTerm of attributeTerms ) {
        value = ( attributes[attributeTerm.attribute] || '' );
        termValue = attributeTerm.value;

        switch ( attributeTerm.logic ) {
            case '=':
                if ( value === termValue ) {
                    continue
                }
            case '~=':
                if ( matchClasses( value, [termValue] ) ) {
                    continue;
                }
            case '|=':
                if (
                    value === termValue ||
                    value.startsWith( termValue + '-' )
                ) {
                    continue;
                }
            case '^=':
                if ( value.startsWith( termValue ) ) {
                    continue;
                }
            case '$=':
                if ( value.endsWith( termValue ) ) {
                    continue;
                }
            case '*=':
                if ( value.includes( termValue ) ) {
                    continue
                }
            default:
                return false;
        }
    }

    return true;
}

function matchClasses (
    classValue?: string,
    classNeedles: Array<string> = []
): boolean {

    if ( !classValue ) {
        return classNeedles.length === 0;
    }

    const classes = classValue.split( spaceRegExp );

    for ( let i = 0, iEnd = classNeedles.length; i < iEnd; ++i ) {
        if ( !classes.includes( classNeedles[i] ) ) {
            return false;
        }
    }

    return true;
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
    public static parse (
        selectorString: string
    ): ( XMLSelector | undefined ) {
        const selectorsStrings = selectorString.split( spaceRegExp );
        const selectors: Array<SelectorTerm> = [];
        const selector = new XMLSelector( selectors );

        let match: ( RegExpMatchArray | null );
        let terms: SelectorTerm;

        for ( let i = 0, iEnd = selectorsStrings.length; i < iEnd; ++i ) {
            match = selectorsStrings[i].match( XMLRegExp.selector );

            if ( !match ) {
                continue;
            }

            if ( match[0] !== selectorsStrings[i] ) {
                return;
            }

            terms = {};

            // Tag name
            if (
                match[1] &&
                match[1] !== '*'
            ) {
                terms.tag = match[1].replace( pipeRegExp, ':' );
            }

            // ID attribute
            if ( match[2] ) {
                terms.id = match[2].substring( 1 );
            }

            // Class attribute
            if ( match[3] ) {
                const classesStrings = match[3].split( pointRegExp );
                const classes: Array<string> = [];

                for ( let j = 0, jEnd = classesStrings.length; j < jEnd; ++j ) {
                    if ( classesStrings[j] ) {
                        classes.push( classesStrings[j] );
                    }
                }

                terms.classes = classes;
            }

            // Regular attributes
            if ( match[4] ) {
                const attributes: Array<AttributeTerm> = [];
                const scanner = new RegExp( XMLRegExp.attributeSelector.source, XMLRegExp.attributeSelector.flags );

                let matchAttribute: ( RegExpExecArray | null );

                while ( matchAttribute = scanner.exec( match[4] ) ) {
                    attributes.push( {
                        attribute: matchAttribute[1].replace( pipeRegExp, ':' ),
                        logic: matchAttribute[2],
                        value: matchAttribute[3]
                    } );
                }

                terms.attributes = attributes;
            }

            // Add
            if ( Object.keys( terms ).length ) {
                selectors.push( terms );
            }
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
        selectors: Array<SelectorTerm>
    ) {
        this.selectors = selectors;
    }


    /* *
     *
     *  Properties
     *
     * */


    public containsID?: boolean;

    public selectors: Array<SelectorTerm>;


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
     * @param term
     * Matching term to search for.
     *
     * @return
     * List of matching XML tags, or `undefined`.
     */
    public find (
        nodes: Array<XMLNode>,
        term: SelectorTerm
    ): ( Array<XMLTag> | undefined ) {
        const findings: Array<XMLTag> = [];

        for ( const node of nodes ) {

            // Ignore non-tag nodes
            if ( !isXMLTag( node ) ) {
                continue;
            }

            // Check for direct match
            if (
                (
                    node.tag === term.tag ||
                    term.tag === '*'
                ) &&
                (
                    !term.id ||
                    node.attributes?.id === term.id
                ) &&
                matchClasses( node.attributes?.['class'], term.classes ) &&
                matchAttributes( node.attributes, term.attributes )
            ) {
                findings.push( node );
            }

            // Continue with search in inner XML nodes
            else if ( node.innerXML ) {
                const subFindings = this.find( node.innerXML, term );

                if ( subFindings ) {
                    for ( const subFinding of subFindings ) {
                        findings.push( subFinding );
                    }
                }
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
