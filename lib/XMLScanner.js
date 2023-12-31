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
import { unescapeXML } from "./Escaping.js";
import XMLRegExp from "./XMLRegExp.js";
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
    constructor(text = '') {
        this._scanSize = 1e6;
        this._text = text;
        this.cdataTags = ['script', 'style'];
    }
    /**
     * Maximum size during a scan.  This limits the size of XMLNode to the given
     * number of characters.
     */
    get scanSize() {
        return this._scanSize;
    }
    set scanSize(value) {
        this._scanSize = (value > 0 ? value : 1e6);
    }
    /**
     * Node result of the last scan.
     */
    get node() {
        return this._node;
    }
    ;
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
    getText() {
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
    indexOfTagEnd(snippet) {
        let char = '';
        let index = 0;
        let openQuote = '';
        loop: while (char = snippet[index++]) {
            if (openQuote) {
                if (char === openQuote) {
                    openQuote = '';
                }
                continue;
            }
            switch (char) {
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
    scan() {
        let index = (this._index || 0);
        let nextIndex = Infinity;
        // Restore buffer
        const buffer = this._text.substring(index, index + this._scanSize);
        if (!buffer) {
            return;
        }
        // Search character data
        let match = buffer.match(XMLRegExp.cdata);
        if (typeof (match === null || match === void 0 ? void 0 : match.index) === 'number') {
            if (match.index > 0) {
                nextIndex = (match.index < nextIndex ? match.index : nextIndex);
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
        if (this._cdataTag) {
            let endIndex = buffer.indexOf(`</${this._cdataTag.tag}>`);
            if (endIndex > -1) {
                delete this._cdataTag;
                this._index = index + endIndex;
                this._node = {
                    cdata: buffer.substring(0, endIndex)
                };
            }
            else {
                this._index = index + buffer.length;
                this._node = {
                    cdata: buffer
                };
            }
            return this._node;
        }
        // Search close tag
        match = buffer.match(XMLRegExp.closeTag);
        if (typeof (match === null || match === void 0 ? void 0 : match.index) === 'number') {
            if (match.index > 0) {
                nextIndex = (match.index < nextIndex ? match.index : nextIndex);
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
        match = buffer.match(XMLRegExp.openTag);
        if (typeof (match === null || match === void 0 ? void 0 : match.index) === 'number') {
            if (match.index > 0) {
                nextIndex = (match.index < nextIndex ? match.index : nextIndex);
            }
            else {
                const restIndex = match[0].length;
                const endIndex = this.indexOfTagEnd(buffer.substring(restIndex));
                if (endIndex > -1) {
                    let rest = buffer.substring(restIndex, (restIndex + endIndex - 1));
                    this._index = index + restIndex + endIndex;
                    this._node = {
                        tag: match[1]
                    };
                    // Self-closing tags are marked empty
                    if (rest.endsWith('/') ||
                        rest.endsWith('?')) {
                        this._node.empty = true;
                        rest = rest.substring(0, rest.length - 1);
                    }
                    // Search for attributes
                    if (rest) {
                        const attributes = this.scanAttributes(rest);
                        if (attributes) {
                            this._node.attributes = attributes;
                        }
                    }
                    if (this.cdataTags.includes(this._node.tag.toLowerCase())) {
                        this._cdataTag = this._node;
                    }
                    return this._node;
                }
            }
        }
        // Search comment
        match = buffer.match(XMLRegExp.comment);
        if (typeof (match === null || match === void 0 ? void 0 : match.index) === 'number') {
            if (match.index > 0) {
                nextIndex = (match.index < nextIndex ? match.index : nextIndex);
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
        if (nextIndex > 0 &&
            nextIndex < Infinity) {
            this._index = index + nextIndex;
            this._node = unescapeXML(buffer.substring(0, nextIndex));
            return this._node;
        }
        // Handle incomplete tag on the buffer edge
        match = buffer.match(XMLRegExp.incompleteTag);
        if (typeof (match === null || match === void 0 ? void 0 : match.index) === 'number' &&
            match.index > 0) {
            nextIndex = match.index;
            this._index = index + nextIndex;
            this._node = unescapeXML(buffer.substring(0, nextIndex));
            return this._node;
        }
        // Rest is just text
        this._index = index + buffer.length;
        this._node = unescapeXML(buffer);
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
    scanAttributes(snippet) {
        const attributes = {};
        const scanner = new RegExp(XMLRegExp.attribute.source, XMLRegExp.attribute.flags);
        let matchAttribute;
        while (matchAttribute = scanner.exec(snippet)) {
            attributes[matchAttribute[1]] = unescapeXML(matchAttribute[2] ||
                matchAttribute[3] ||
                matchAttribute[4] ||
                '');
        }
        if (Object.keys(attributes).length) {
            return attributes;
        }
    }
    /**
     * Sets the text used by the scan process.
     *
     * @param text
     * Text to scan.
     */
    setText(text) {
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
    skip(nodeCount) {
        const node = this.node;
        for (let i = 0; i < nodeCount; ++i) {
            if (!this.scan()) {
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
