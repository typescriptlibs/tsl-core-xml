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


import { escapeXML, sanitizeTag, sanitizeXML } from "./Escaping.js";

import XMLNode from './XMLNode.js';

import { isDocumentDeclaration, isXMLDeclaration } from './XMLTag.js';


/* *
 *
 *  Declarations
 *
 * */


/**
 * Print options.
 */
export interface XMLPrinterOptions {

    /**
     * Disable escaping of XML characters. Requires escaping in node properties
     * to avoid security risks like XML injections.
     */
    noEscaping?: boolean;

    /**
     * Print all XML in one line.
     */
    noLineBreaks?: boolean;

}


/* *
 *
 *  Class
 *
 * */


/**
 * Converts XML nodes to strings.
 */
export class XMLPrinter {


    /* *
     *
     *  Constructor
     *
     * */


    public constructor (
        nodes: Array<XMLNode> = [],
        options: XMLPrinterOptions = {}
    ) {
        this.nodes = nodes;
        this.options = options;
    }


    /* *
     *
     *  Constructor
     *
     * */


    /**
     * Nodes to print.
     */
    public readonly nodes: Array<XMLNode>;


    /**
     * Print options.
     */
    public readonly options: XMLPrinterOptions;


    /* *
     *
     *  Functions
     *
     * */


    /**
     * Prints XML nodes as a string.
     *
     * @param nodes
     * Node or nodes to print as a string.
     *
     * @param noEscape
     * Disable escaping of XML characters. Requires escaping in node properties
     * to prevent security risks like XML injections.
     *
     * @return
     * XML nodes as a string.
     */
    public toString (
        nodes: ( XMLNode | Array<XMLNode> ) = this.nodes,
        noEscape?: boolean
    ): string {

        switch ( typeof nodes ) {
            case 'object':
                if ( nodes instanceof Array ) {
                    const printer = this;

                    let str: string = '';

                    // array of nodes
                    for ( let i = 0, iEnd = nodes.length; i < iEnd; ++i ) {
                        str += printer.toString( nodes[i] );
                    }

                    return str;
                }
                else if ( typeof nodes.tag === 'string' ) {
                    const attributes = nodes.attributes || {};
                    const attributeKeys = Object.keys( attributes );
                    const innerXML = nodes.innerXML || [];

                    // tag
                    let str: string = `<${nodes.tag}`;

                    // attributes
                    if ( noEscape ) {
                        for ( let i = 0, iEnd = attributeKeys.length, key: string, value: string; i < iEnd; ++i ) {
                            key = attributeKeys[i];
                            value = attributes[key];
                            str += (
                                value ?
                                    ` ${sanitizeTag( key )}="${sanitizeXML( value )}"` :
                                    ` ${sanitizeTag( key )}`
                            );
                        }
                    }
                    else {
                        for ( let i = 0, iEnd = attributeKeys.length, key: string, value: string; i < iEnd; ++i ) {
                            key = attributeKeys[i];
                            value = attributes[key];
                            str += (
                                value ?
                                    ` ${sanitizeTag( key )}="${escapeXML( value )}"` :
                                    ` ${sanitizeTag( key )}`
                            );
                        }
                    }

                    // self-closing tags
                    if ( isDocumentDeclaration( nodes ) ) {
                        if ( innerXML.length ) {
                            str += this.toString( innerXML );
                        }
                        return str + '>';
                    }
                    else if ( isXMLDeclaration( nodes ) ) {
                        return str + '?>';
                    }
                    else if ( nodes.empty ) {
                        return str + ' />';
                    }

                    // innerXML
                    str += '>' + this.toString( innerXML );

                    // close
                    str += `</${nodes.tag}>`;

                    return sanitizeXML( str );
                }
                else if ( typeof nodes.comment === 'string' ) {
                    // comment
                    return `<!--${sanitizeXML( nodes.comment )}-->`;
                }
                else if ( typeof nodes.cdata === 'string' ) {
                    // cdata
                    return `<![CDATA[${sanitizeXML( nodes.cdata )}]]>`;
                }
            default:
                // text
                if ( noEscape ) {
                    return sanitizeXML( nodes.toString() );
                }
                else {
                    return escapeXML( nodes );
                }
        }

    }


}


/* *
 *
 *  Default Export
 *
 * */


export default XMLPrinter;
