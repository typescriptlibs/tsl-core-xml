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
        this._text = text;
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
        const buffer = this._text.substring(index, index + 1e6);
        if (!buffer) {
            return;
        }
        // Search close tag
        let match = buffer.match(XMLRegExp.CloseTag);
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
        match = buffer.match(XMLRegExp.OpenTag);
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
                    return this._node;
                }
            }
        }
        // Search comment
        match = buffer.match(XMLRegExp.Comment);
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
            this._node = buffer.substring(0, nextIndex);
            return this._node;
        }
        // Handle incomplete tag on the buffer edge
        match = buffer.match(XMLRegExp.IncompleteTag);
        if (typeof (match === null || match === void 0 ? void 0 : match.index) === 'number' &&
            match.index > 0) {
            nextIndex = match.index;
            this._index = index + nextIndex;
            this._node = buffer.substring(0, nextIndex);
            return this._node;
        }
        // Rest is just text
        this._index = index + buffer.length;
        this._node = buffer;
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
        let matchAttribute;
        let scanner = new RegExp(XMLRegExp.Attribute.source, XMLRegExp.Attribute.flags);
        while (matchAttribute = scanner.exec(snippet)) {
            attributes[matchAttribute[1]] = (matchAttribute[2] ||
                matchAttribute[3] ||
                matchAttribute[4] ||
                '');
        }
        if (Object.keys(attributes).length) {
            return attributes;
        }
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
