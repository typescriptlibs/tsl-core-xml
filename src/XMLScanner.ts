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
        let nextIndex = Infinity;

        // Restore buffer

        const buffer = this._text.substring( index );

        if ( !buffer ) {
            return;
        }

        // Search tag

        let match = buffer.match( XMLRegExp.Tag );

        if ( typeof match?.index === 'number' ) {
            if ( match.index > 0 ) {
                nextIndex = ( match.index < nextIndex ? match.index : nextIndex );
            }
            else {
                this._index = index + match[0].length;
                this._node = {
                    tag: match[1]
                };

                if ( match[2] ) {
                    let rest = match[2]

                    // Self-closing tags are marked empty

                    if ( rest.endsWith( '/' ) ) {
                        this._node.empty = true;
                        rest.substring( 0, rest.length - 1 );
                    }

                    // Search for attributes

                    const attributes = this.scanAttributes( rest );

                    if ( attributes ) {
                        this._node.attributes = attributes;
                    }
                }

                return this._node;
            }
        }

        // Search close tag

        match = buffer.match( XMLRegExp.CloseTag );

        if ( typeof match?.index === 'number' ) {
            if ( match.index > 0 ) {
                nextIndex = ( match.index < nextIndex ? match.index : nextIndex );
            }
            else {
                this._index = index + match[0].length;
                this._node = {
                    tag: `/${match[1]}`
                };

                return this._node;
            }
        }

        // Search comment

        match = buffer.match( XMLRegExp.Comment );

        if ( typeof match?.index === 'number' ) {
            if ( match.index > 0 ) {
                nextIndex = ( match.index < nextIndex ? match.index : nextIndex );
            }
            else {
                this._index = index + match[0].length;
                this._node = {
                    comment: match[1]
                };

                return this._node;
            }
        }

        // Search definition

        match = buffer.match( XMLRegExp.Definition );

        if ( typeof match?.index === 'number' ) {
            if ( match.index > 0 ) {
                nextIndex = ( match.index < nextIndex ? match.index : nextIndex );
            }
            else {
                this._index = index + match[0].length;
                this._node = {
                    tag: `!${match[1]}`
                };

                // Search for attributes

                if ( match[2] ) {
                    const attributes = this.scanAttributes( match[2] );

                    if ( attributes ) {
                        this._node.attributes = attributes;
                    }
                }

                return this._node;
            }
        }

        // Search declaration

        match = buffer.match( XMLRegExp.Declaration );

        if ( typeof match?.index === 'number' ) {
            if ( match.index > 0 ) {
                nextIndex = ( match.index < nextIndex ? match.index : nextIndex );
            }
            else {
                this._index = index + match[0].length;
                this._node = {
                    tag: `?${match[1]}`,
                    empty: true
                };

                // Search for attributes

                if ( match[2] ) {
                    const attributes = this.scanAttributes( match[2] );

                    if ( attributes ) {
                        this._node.attributes = attributes;
                    }
                }

                return this._node;
            }
        }

        // Return leading text before match in next round

        if ( nextIndex > 0 && nextIndex < Infinity ) {
            this._index = index + nextIndex;
            this._node = buffer.substring( 0, nextIndex );

            return this._node;
        }

        // Rest is just text

        this._index = index + buffer.length;
        this._node = buffer;

        return this._node;
    }


    private scanAttributes (
        snippet: string
    ): ( Record<string, string> | undefined ) {
        const attributes: Record<string, string> = {};

        let matchAttribute: ( RegExpExecArray | null );
        let scanner = new RegExp( XMLRegExp.Attribute.source, XMLRegExp.Attribute.flags );

        while ( matchAttribute = scanner.exec( snippet ) ) {
            attributes[matchAttribute[1]] = (
                matchAttribute[2] ||
                matchAttribute[3] ||
                matchAttribute[4] ||
                ''
            );
        }

        if ( Object.keys( attributes ).length ) {
            return attributes;
        }
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
