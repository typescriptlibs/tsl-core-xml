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


import { isXMLCdata } from './XMLCdata.js';

import XMLNode, { isString } from './XMLNode.js';

import XMLScanner from './XMLScanner.js';

import { isXMLTag } from './XMLTag.js';


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
     * Underlying scanner to process text. Can be used to access the last
     * processed text and raw XML.
     */
    public readonly scanner: XMLScanner;


    /* *
     *
     *  Functions
     *
     * */


    /**
     * Grows a new tree based on the XMLNodes in a given text.
     *
     * @param text
     * Text to grow tree from.
     *
     * @param allStringNodes
     * Whether to keep all empty string nodes. This might be necessary for
     * pre-formatted text like scripts.
     *
     * @return
     * Tree roots, usually the last one is the main root. Malformatted XML might
     * have different roots.
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

        let node: ( XMLNode | undefined );

        scan: while ( node = scanner.scan() ) {

            // First check for closing tag, then search for opening tag

            if (
                isXMLTag( node ) &&
                node.tag?.[0] === '/'
            ) {
                const openTag = node.tag.substring( 1 );
                const openStack: Array<XMLNode> = [];

                // Search backwards for opening tag and build stack with nodes
                // in-between

                for ( let i = roots.length - 1, node2: XMLNode; i >= 0; --i ) {
                    node2 = roots[i];

                    // Find opening tag and remove openStack from roots

                    if (
                        isXMLTag( node2 ) &&
                        node2.tag === openTag &&
                        !node2.empty &&
                        !closeStack.includes( node2 )
                    ) {
                        if ( openStack.length ) {
                            node2.innerXML = openStack;
                            roots.length = roots.length - openStack.length;
                        }

                        closeStack.push( node2 );

                        continue scan;
                    }

                    // Save node in the openStack for innerXML

                    openStack.unshift( node2 );
                }

                // Continue and ignore closing tag

                continue scan;
            }

            // Add CDATA as raw string

            if ( isXMLCdata( node ) ) {

                roots.push( node.cdata );

                continue scan;
            }

            // Skip empty string nodes

            if (
                !allStringNodes &&
                isString( node ) &&
                !node.trim()
            ) {
                continue scan;
            }

            roots.push( node );
        }

        return roots;
    }


}


/* *
 *
 *  Default Export
 *
 * */


export default XMLTree;
