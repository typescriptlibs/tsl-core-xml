/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  XML TypeScript Library

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/


/* *
 *
 *  Imports
 *
 * */


import { isXMLCdata } from './XMLCdata.js';

import XMLNode, { isString } from './XMLNode.js';

import XMLPrinter from './XMLPrinter.js';

import XMLSelector from './XMLSelector.js';

import XMLScanner from './XMLScanner.js';

import XMLTag, { isXMLTag } from './XMLTag.js';


/* *
 *
 *  Class
 *
 * */


/**
 * Scans text sources for XML tags and build a tree.
 */
export class XMLTree {


    /* *
     *
     *  Static Functions
     *
     * */


    /**
     * Grows the tree based on all XMLNodes in a given text.
     *
     * @param text
     * Text to grow tree from.
     *
     * @param allStringNodes
     * Whether to keep all empty string nodes.  This might be necessary for
     * pre-formatted text like scripts.
     *
     * @return
     * Tree with roots, where usually the last root is the main one.
     */
    public static parse (
        text?: string,
        allStringNodes?: boolean
    ): XMLTree {
        const xmlTree = new XMLTree();

        xmlTree.grow( text, allStringNodes );

        return xmlTree;
    }


    /* *
     *
     *  Constructor
     *
     * */


    public constructor (
        text?: string
    ) {
        this.roots = [];
        this.scanner = new XMLScanner( text );
    }


    /* *
     *
     *  Properties
     *
     * */


    /**
     * Tree roots after the last grow process.
     */
    public readonly roots: Array<XMLNode>;


    /**
     * Underlying scanner to process text.  Can be used to access the last
     * processed text and raw XML.
     */
    public readonly scanner: XMLScanner;


    /* *
     *
     *  Functions
     *
     * */


    /**
     * Grows new tree roots based on all XMLNodes in a given text.
     *
     * @param text
     * Text to grow tree from.
     *
     * @param allStringNodes
     * Whether to keep all empty string nodes.  This might be necessary for
     * pre-formatted text like scripts.
     *
     * @return
     * Tree roots, usually the last one is the main root.  Malformatted XML
     * might have different roots.  These roots are also available in the
     * `roots` property.
     */
    public grow (
        text: string = this.scanner.getText(),
        allStringNodes?: boolean
    ): Array<XMLNode> {
        const closeStack: Array<XMLNode> = [];
        const roots = this.roots;
        const scanner = this.scanner;

        roots.length = 0;
        scanner.setText( text );

        let node2: ( XMLNode | undefined );

        scan: while ( node2 = scanner.scan() ) {

            // First check for closing tag, then search for opening tag

            if (
                isXMLTag( node2 ) &&
                node2.tag?.[0] === '/'
            ) {
                const openTag = node2.tag.substring( 1 );
                const openStack: Array<XMLNode> = [];

                // Search backwards for opening tag and build stack with nodes
                // in-between

                for ( let i = roots.length - 1, node1: XMLNode; i >= 0; --i ) {
                    node1 = roots[i];

                    // Find opening tag and remove openStack from roots

                    if (
                        isXMLTag( node1 ) &&
                        node1.tag === openTag &&
                        !node1.empty &&
                        !closeStack.includes( node1 )
                    ) {
                        if ( openStack.length ) {
                            node1.innerXML = openStack;
                            roots.length = roots.length - openStack.length;
                        }

                        closeStack.push( node1 );

                        continue scan;
                    }

                    // Save node in the openStack for innerXML

                    openStack.unshift( node1 );
                }

                // Continue and ignore closing tag

                continue scan;
            }

            // Add CDATA as raw string

            if ( isXMLCdata( node2 ) ) {

                roots.push( node2.cdata );

                continue scan;
            }

            // Skip empty string nodes

            if (
                !allStringNodes &&
                isString( node2 ) &&
                !node2.trim()
            ) {
                continue scan;
            }

            roots.push( node2 );
        }

        return roots;
    }


    /**
     * Searches for XML nodes matching the specified selector.  If the selector
     * contains the `#` character, only the first machting XML node will be
     * returned.
     *
     * @param selector
     * Selector to match against.
     *
     * @return
     * List of XML nodes matching the selector, or `undefined`.
     */
    public query (
        selector: string
    ): ( Array<XMLTag> | undefined ) {
        const xmlSelector = XMLSelector.parse( selector );

        if ( xmlSelector ) {
            return xmlSelector.query( this.roots );
        }
    }


    /**
     * Converts the tree of nodes back to XML text.
     */
    public toString (): string {
        return ( new XMLPrinter( this.roots ) ).toString();
    }


}


/* *
 *
 *  Default Export
 *
 * */


export default XMLTree;
