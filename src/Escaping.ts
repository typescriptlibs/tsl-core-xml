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


import * as EscapeEntities from './EscapeEntities/index.js';

import XMLRegExp from "./XMLRegExp.js";


/* *
 *
 *  Constants
 *
 * */


const xmlEscapePatterns: Record<string, RegExp> = Object
    .entries( EscapeEntities.XMLEscapeEntities )
    .reduce( escapeToRegExpPattern, {} );


/* *
 *
 *  Functions
 *
 * */


function escapeToRegExpPattern (
    patterns: Record<string, RegExp> = {},
    escapeEntity: [string, string]
): Record<string, RegExp> {

    patterns[escapeEntity[1]] = new RegExp( escapeEntity[1], 'gsu' );

    return patterns;
}


function escapeToCharacter (
    match: string,
    name: string,
    code: string,
    hexCode: string,
    _index: number,
    _str: string
): string {

    if ( name ) {
        return (
            EscapeEntities.XMLEscapeEntities[name] ||
            match
        );
    }

    if ( code ) {
        return String.fromCharCode( parseInt( code, 10 ) );
    }

    if ( hexCode ) {
        return String.fromCharCode( parseInt( hexCode, 16 ) );
    }

    return match;
}


export function escapeXML (
    str: string
): string {

    for ( const entry of Object.entries( EscapeEntities.XMLEscapeEntities ) ) {
        if ( str.includes( entry[1] ) ) {
            str = str.replace( xmlEscapePatterns[entry[1]], `&${entry[0]};` );
        }
    }

    return str;
}


export function unescapeXML (
    str: string
): string {
    return str.replace( XMLRegExp.EscapeEntity, escapeToCharacter );
}


/* *
 *
 *  Default Export
 *
 * */


export default {
    escapeXML,
    unescapeXML
};
