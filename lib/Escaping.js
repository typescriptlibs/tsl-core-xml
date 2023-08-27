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
import * as EscapeEntities from './EscapeEntities/index.js';
import XMLRegExp from "./XMLRegExp.js";
/* *
 *
 *  Constants
 *
 * */
const xmlEscapePatterns = Object
    .entries(EscapeEntities.XMLEscapeEntities)
    .reduce(escapeToRegExpPattern, {});
/* *
 *
 *  Functions
 *
 * */
function escapeToRegExpPattern(patterns = {}, escapeEntity) {
    patterns[escapeEntity[1]] = new RegExp(escapeEntity[1], 'gsu');
    return patterns;
}
function escapeToCharacter(match, name, code, hexCode, _index, _str) {
    if (name) {
        return (EscapeEntities.XMLEscapeEntities[name] ||
            match);
    }
    if (code) {
        return String.fromCharCode(parseInt(code, 10));
    }
    if (hexCode) {
        return String.fromCharCode(parseInt(hexCode, 16));
    }
    return match;
}
export function escapeXML(str) {
    for (const entry of Object.entries(EscapeEntities.XMLEscapeEntities)) {
        if (str.includes(entry[1])) {
            str = str.replace(xmlEscapePatterns[entry[1]], `&${entry[0]};`);
        }
    }
    return str;
}
export function unescapeXML(str) {
    return str.replace(XMLRegExp.escapeEntity, escapeToCharacter);
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
