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


import XMLRegExp from "./XMLRegExp.js";

import XMLNode from './XMLNode.js';

import XMLTag from './XMLTag.js';


/* *
 *
 *  Class
 *
 * */


/**
 * Scans text sources for XML tags.
 */
export class XMLScanner {


    /* *
     *
     *  Constructor
     *
     * */


    public constructor (
        text: string = ''
    ) {
        this._text = text;
    }

    /* *
     *
     *  Properties
     *
     * */


    /**
     * Index for the next scan.
     */
    private _index?: number;

    /**
     * Node result of the last scan.
     */
    private _node?: XMLNode;

    /**
     * Text to scan.
     */
    private _text: string;

    /**
     * Node result of the last scan.
     */
    public get node (): ( XMLNode | undefined ) {
        return this._node;
    };


    /* *
     *
     *  Functions
     *
     * */


    /**
     * Returns the text used for the scan process.
     *
     * @return
     * Text used for the scan process.
     */
    public getText (): string {
        return this._text;
    }


    /**
     * Scans the text for the next XML node. Returns `undefined` if the scan
     * process has reached the end of the text.
     *
     * @return
     * Found XML node; or `undefined`, if reached the end.
     */
    public scan (): ( XMLNode | undefined ) {
        let index = ( this._index || 0 );
        let node: XMLNode;

        const buffer = this._text.substring( index );

        if ( !buffer ) {
            return;
        }

        // Search

        const matchComment = buffer.match( XMLRegExp.Comment );
        const matchTag = buffer.match( XMLRegExp.Tag );

        // Comment is next

        if (
            matchComment &&
            (
                !matchTag ||
                matchComment.index! <= matchTag.index!
            )
        ) {

            // Return leading text

            if ( matchComment.index ) {
                index += matchComment.index;
                node = buffer.substring( 0, matchComment.index );
            }

            // Return the comment itself

            else {
                index += matchComment[0].length;
                node = {
                    comment: matchComment[1]
                };
            }

        }

        // Tag is next

        else if ( matchTag ) {

            // Return leading text

            if ( matchTag.index ) {
                index += matchTag.index;
                node = buffer.substring( 0, matchTag.index );
            }

            // Return the tag itself

            else {
                index += matchTag[0].length;
                node = {
                    tag: matchTag[1]
                };

                // Self-closing tags are marked empty

                if ( matchTag[3] ) {
                    node.empty = true;
                }

                // Search for attributes

                if ( matchTag[2] ) {
                    let attributes: XMLTag['attributes'] = {};
                    let matchAttribute: ( RegExpExecArray | null );
                    let scanner = new RegExp( XMLRegExp.Attribute.source, XMLRegExp.Attribute.flags );
                    let snippet = matchTag[2];

                    while ( matchAttribute = scanner.exec( snippet ) ) {
                        attributes[matchAttribute[1]] = (
                            matchAttribute[2] ||
                            matchAttribute[3] ||
                            matchAttribute[4] ||
                            ''
                        );
                    }

                    if ( Object.keys( attributes ).length ) {
                        node.attributes = attributes;
                    }
                }

            }

        }

        // Rest is just text

        else {
            index += buffer.length;
            node = buffer;
        }

        // Save and return

        this._index = index;
        this._node = node;

        return node;
    }


    /**
     * Sets the text used by the scan process.
     *
     * @param text
     * Text to scan.
     */
    public setText (
        text: string
    ): void {
        delete this._index;
        delete this._node;
        this._text = text;
    }


    /**
     * Skips the given number of XML nodes in the scan process.
     *
     * @param nodeCount
     * Number of XML nodes to skip.
     */
    public skip (
        nodeCount: number
    ): void {
        const node = this.node;

        for ( let i = 0; i < nodeCount; ++i ) {
            if ( !this.scan() ) {
                break;
            }
        }

        this._node = node;
    }


}


/* *
 *
 *  Default Export
 *
 * */


export default XMLScanner;
