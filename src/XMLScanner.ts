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


import { unescapeXML } from "./Escaping.js";

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
        this._scanSize = 1e6;
        this._text = text;
        this.cdataTags = ['script', 'style'];
    }

    /* *
     *
     *  Properties
     *
     * */


    /**
     * Last tag scan with implicit character data.
     */
    private _cdataTag?: XMLTag;


    /**
     * Index for the next scan.
     */
    private _index?: number;


    /**
     * Node result of the last scan.
     */
    private _node?: XMLNode;


    /**
     * Maximum size of a scan for XMLNode.
     */
    private _scanSize: number;


    /**
     * Text to scan.
     */
    private _text: string;


    /**
     * Tags that contain implicitly character data.  Only the close tag will end
     * the inner text.  Default tags are `script` and `style`.
     */
    public readonly cdataTags: Array<string>;


    /**
     * Maximum size during a scan.  This limits the size of XMLNode to the given
     * number of characters.
     */
    public get scanSize (): number {
        return this._scanSize;
    }
    public set scanSize ( value: number ) {
        this._scanSize = ( value > 0 ? value : 1e6 );
    }

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
     * Search the index of the ending tag character outside of attribute
     * strings.
     *
     * @param snippet
     * Text snippet to search in.
     *
     * @return
     * Index of ending tag in snippet.
     */
    private indexOfTagEnd (
        snippet: string
    ): number {
        let char = '';
        let index = 0;
        let openQuote = '';

        loop: while ( char = snippet[index++] ) {

            if ( openQuote ) {
                if ( char === openQuote ) {
                    openQuote = '';
                }
                continue;
            }

            switch ( char ) {
                case '\'':
                case '"':
                    openQuote = char;
                    break;
                case '<':
                    break loop;
                case '>':
                    return index;
            }

        }

        return -1;
    }


    /**
     * Scans the text for the next XML node. It will return a string, if no XML
     * tag can be found in the next 1 million characters. Returns `undefined` if
     * the scan process has reached the end of the text.
     *
     * @return
     * Found XML node; or `undefined`, if reached the end.
     */
    public scan (): ( XMLNode | undefined ) {
        let index = ( this._index || 0 );
        let nextIndex = Infinity;

        // Restore buffer

        const buffer = this._text.substring( index, index + this._scanSize );

        if ( !buffer ) {
            return;
        }

        // Search character data

        let match = buffer.match( XMLRegExp.Cdata );

        if ( typeof match?.index === 'number' ) {
            if ( match.index > 0 ) {
                nextIndex = ( match.index < nextIndex ? match.index : nextIndex );
            }
            else {
                delete this._cdataTag;
                this._index = index + match[0].length;
                this._node = {
                    cdata: match[1]
                };

                return this._node;
            }
        }

        // Search for implicit character data from the previous tag

        if ( this._cdataTag ) {
            let endIndex = buffer.indexOf( `</${this._cdataTag.tag}>` );

            if ( endIndex > -1 ) {
                delete this._cdataTag;
                this._index = index + endIndex;
                this._node = buffer.substring( 0, endIndex );
            }
            else {
                this._index = index + buffer.length;
                this._node = buffer;
            }

            return this._node;
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
                    tag: match[1]
                };

                return this._node;
            }
        }

        // Search open tag

        match = buffer.match( XMLRegExp.OpenTag );

        if ( typeof match?.index === 'number' ) {
            if ( match.index > 0 ) {
                nextIndex = ( match.index < nextIndex ? match.index : nextIndex );
            }
            else {
                const restIndex = match[0].length;
                const endIndex = this.indexOfTagEnd( buffer.substring( restIndex ) );

                if ( endIndex > -1 ) {
                    let rest = buffer.substring( restIndex, ( restIndex + endIndex - 1 ) );

                    this._index = index + restIndex + endIndex;
                    this._node = {
                        tag: match[1]
                    };

                    // Self-closing tags are marked empty

                    if (
                        rest.endsWith( '/' ) ||
                        rest.endsWith( '?' )
                    ) {
                        this._node.empty = true;
                        rest = rest.substring( 0, rest.length - 1 );
                    }

                    // Search for attributes

                    if ( rest ) {
                        const attributes = this.scanAttributes( rest );

                        if ( attributes ) {
                            this._node.attributes = attributes;
                        }
                    }

                    if ( this.cdataTags.includes( this._node.tag.toLowerCase() ) ) {
                        this._cdataTag = this._node;
                    }

                    return this._node;
                }
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

        // Return leading text before match in next round

        if (
            nextIndex > 0 &&
            nextIndex < Infinity
        ) {
            this._index = index + nextIndex;
            this._node = unescapeXML( buffer.substring( 0, nextIndex ) );

            return this._node;
        }

        // Handle incomplete tag on the buffer edge

        match = buffer.match( XMLRegExp.IncompleteTag );

        if (
            typeof match?.index === 'number' &&
            match.index > 0
        ) {
            nextIndex = match.index;

            this._index = index + nextIndex;
            this._node = unescapeXML( buffer.substring( 0, nextIndex ) );

            return this._node;
        }

        // Rest is just text

        this._index = index + buffer.length;
        this._node = unescapeXML( buffer );

        return this._node;
    }


    /**
     * Extracts attribute singles and pairs.
     *
     * @param snippet
     * Text snippet to extract attributes from.
     *
     * @return
     * Dictionary of attributes, or `undefined`. Attribute singles will have an
     * empty value.
     */
    private scanAttributes (
        snippet: string
    ): ( Record<string, string> | undefined ) {
        const attributes: Record<string, string> = {};

        let matchAttribute: ( RegExpExecArray | null );
        let scanner = new RegExp( XMLRegExp.Attribute.source, XMLRegExp.Attribute.flags );

        while ( matchAttribute = scanner.exec( snippet ) ) {
            attributes[matchAttribute[1]] = unescapeXML(
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
