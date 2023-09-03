var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  XML TypeScript Library

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
define("EscapeEntities/XMLEscapeEntities", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.XMLEscapeEntities = void 0;
    /* *
     *
     *  Enums
     *
     * */
    exports.XMLEscapeEntities = {
        'amp': '&',
        'apos': '\'',
        'gt': '>',
        'lt': '<',
        'quot': '"',
    };
    /* *
     *
     *  Default Export
     *
     * */
    exports.default = exports.XMLEscapeEntities;
});
/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  XML TypeScript Library

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
define("EscapeEntities/index", ["require", "exports", "EscapeEntities/XMLEscapeEntities"], function (require, exports, XMLEscapeEntities_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(XMLEscapeEntities_js_1, exports);
});
/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  XML TypeScript Library

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
define("XMLRegExp", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.XMLRegExp = void 0;
    /* *
     *
     *  Constants
     *
     * */
    /**
     * Regular expressions used to detect and extract XML tags in text.
     */
    exports.XMLRegExp = {
        /**
         * RegExp pattern for XML attribute.
         * - Group 1: Attribute name.
         * - Group 2: Single quote encapsuled value.
         * - Group 3: Double quote encapsuled value.
         * - Group 4: None encapsuled value.
         */
        attribute: /([^'"\s\/<=>]+)(?:=(?:'([^']*)'|"([^"]*)"|([^'"\s\/<=>]+)))?/gsu,
        /**
         * RegExp pattern for XML attribute selector.
         * - Group 1: Attribute key.
         * - Group 2: Match operation.
         * - Group 3: Match value.
         */
        attributeSelector: /\[([^\s\[\]<=>'"]+?)(=|~=|\|=|\^=|\$=|\*=)([^\[\]]*)\]/gsu,
        /**
         * RegExp pattern for XML character data.
         * - Group 1: CDATA.
         */
        cdata: /<!\[CDATA\[(.*?)\]\]>/su,
        /**
         * RegExp pattern for XML close tag.
         * - Group 1: Tag name.
         */
        closeTag: /<(\/[\w:][\w\-.:]*)>/su,
        /**
         * RegExp pattern for XML comment.
         * - Group 1: Comment.
         */
        comment: /<!--((?:[^<]|<[^!])*?)-->/su,
        /**
         * RegExp pattern for XML escape entity.
         * - Group 1: Character name.
         * - Group 2: Character decimal code.
         * - Group 3: Character hexadecimal code.
         */
        escapeEntity: /&(?:(\w+)|#(\d+)|#x([0-9A-F]+));/gisu,
        /**
         * RegExp pattern for incomplete XML tag on buffer edge.
         * - Group 1: Incomplete tag name.
         */
        incompleteTag: /<$|<([\/!?]?[\w\-.:]*)\b[^<]*$/su,
        /**
         * RegExp pattern for XML open tag.
         * - Group 1: Tag name.
         */
        openTag: /<([!?]?[\w:][\w\-.:]*)\b/su,
        /**
         * RegExp pattern for XML selector.
         * - Group 1: Tag name.
         * - Group 2: ID attribute.
         * - Group 3: Class attribute.
         * - Group 4: Other attributes.
         */
        selector: /(\*|[\w\-|]+)(#[\w\-]*)?(\.[\w\-\.]+)?((?:\[[^\[\]]+\])+)?/su,
    };
    /* *
     *
     *  Default Export
     *
     * */
    exports.default = exports.XMLRegExp;
});
/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  XML TypeScript Library

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
define("Escaping", ["require", "exports", "EscapeEntities/index", "XMLRegExp"], function (require, exports, EscapeEntities, XMLRegExp_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.unescapeXML = exports.escapeXML = void 0;
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
    function escapeXML(str) {
        for (const entry of Object.entries(EscapeEntities.XMLEscapeEntities)) {
            if (str.includes(entry[1])) {
                str = str.replace(xmlEscapePatterns[entry[1]], `&${entry[0]};`);
            }
        }
        return str;
    }
    exports.escapeXML = escapeXML;
    function unescapeXML(str) {
        return str.replace(XMLRegExp_js_1.default.escapeEntity, escapeToCharacter);
    }
    exports.unescapeXML = unescapeXML;
    /* *
     *
     *  Default Export
     *
     * */
    exports.default = {
        escapeXML,
        unescapeXML
    };
});
/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  XML TypeScript Library

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
define("XMLComment", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isXMLComment = void 0;
    /* *
     *
     *  Functions
     *
     * */
    function isXMLComment(xmlNode) {
        return (xmlNode !== null &&
            typeof xmlNode === 'object' &&
            typeof xmlNode.comment === 'string');
    }
    exports.isXMLComment = isXMLComment;
});
/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  XML TypeScript Library

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
define("XMLTag", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isXMLTag = exports.isXMLDeclaration = exports.isDocumentDeclaration = void 0;
    /* *
     *
     *  Functions
     *
     * */
    function isDocumentDeclaration(xmlNode) {
        return (isXMLTag(xmlNode) &&
            xmlNode.tag.startsWith('!'));
    }
    exports.isDocumentDeclaration = isDocumentDeclaration;
    function isXMLDeclaration(xmlNode) {
        return (isXMLTag(xmlNode) &&
            xmlNode.tag.startsWith('?'));
    }
    exports.isXMLDeclaration = isXMLDeclaration;
    function isXMLTag(xmlNode) {
        return (xmlNode !== null &&
            typeof xmlNode === 'object' &&
            typeof xmlNode.tag === 'string');
    }
    exports.isXMLTag = isXMLTag;
});
/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  XML TypeScript Library

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
define("XMLNode", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isString = void 0;
    /* *
     *
     *  Functions
     *
     * */
    function isString(xmlNode) {
        return typeof xmlNode === 'string';
    }
    exports.isString = isString;
});
/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  XML TypeScript Library

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
define("XMLCdata", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isXMLCdata = void 0;
    /* *
     *
     *  Functions
     *
     * */
    function isXMLCdata(xmlNode) {
        return (xmlNode !== null &&
            typeof xmlNode === 'object' &&
            typeof xmlNode.cdata === 'string');
    }
    exports.isXMLCdata = isXMLCdata;
});
/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  XML TypeScript Library

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
define("XMLPrinter", ["require", "exports", "Escaping", "XMLTag"], function (require, exports, Escaping_js_1, XMLTag_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.XMLPrinter = void 0;
    /* *
     *
     *  Class
     *
     * */
    /**
     * Scans text sources for XML tags.
     */
    class XMLPrinter {
        /* *
         *
         *  Constructor
         *
         * */
        constructor(nodes) {
            this.nodes = nodes;
        }
        /* *
         *
         *  Functions
         *
         * */
        toString(nodes = this.nodes, noEscape) {
            switch (typeof nodes) {
                case 'object':
                    if (nodes instanceof Array) {
                        const printer = this;
                        let str = '';
                        // array of nodes
                        for (let i = 0, iEnd = nodes.length; i < iEnd; ++i) {
                            str += printer.toString(nodes[i]);
                        }
                        return str;
                    }
                    else if (nodes.tag) {
                        const attributes = nodes.attributes || {};
                        const attributeKeys = Object.keys(attributes);
                        const innerXML = nodes.innerXML || [];
                        // tag
                        let str = `<${nodes.tag}`;
                        // attributes
                        if (noEscape) {
                            for (let i = 0, iEnd = attributeKeys.length, key; i < iEnd; ++i) {
                                key = attributeKeys[i];
                                str += ` ${key}="${attributes[key]}"`;
                            }
                        }
                        else {
                            for (let i = 0, iEnd = attributeKeys.length, key; i < iEnd; ++i) {
                                key = attributeKeys[i];
                                str += ` ${key}="${(0, Escaping_js_1.escapeXML)(attributes[key])}"`;
                            }
                        }
                        // self-closing tags
                        if ((0, XMLTag_js_1.isDocumentDeclaration)(nodes)) {
                            if (innerXML.length) {
                                str += this.toString(innerXML);
                            }
                            return str + '>';
                        }
                        else if ((0, XMLTag_js_1.isXMLDeclaration)(nodes)) {
                            return str + '?>';
                        }
                        else if (nodes.empty) {
                            return str + ' />';
                        }
                        // innerXML
                        str += '>' + this.toString(innerXML);
                        // close
                        str += `</${nodes.tag}>`;
                        return str;
                    }
                    else if (nodes.comment) {
                        // comment
                        return `<!--${nodes.comment}-->`;
                    }
                    else {
                        // cdata
                        return `<![CDATA[${nodes.cdata}]]>`;
                    }
                default:
                    // text
                    if (noEscape) {
                        return nodes.toString();
                    }
                    else {
                        return (0, Escaping_js_1.escapeXML)(nodes);
                    }
            }
        }
    }
    exports.XMLPrinter = XMLPrinter;
    /* *
     *
     *  Default Export
     *
     * */
    exports.default = XMLPrinter;
});
/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  XML TypeScript Library

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
define("XMLScanner", ["require", "exports", "Escaping", "XMLRegExp"], function (require, exports, Escaping_js_2, XMLRegExp_js_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.XMLScanner = void 0;
    /* *
     *
     *  Class
     *
     * */
    /**
     * Scans text sources for XML tags.
     */
    class XMLScanner {
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
            let match = buffer.match(XMLRegExp_js_2.default.cdata);
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
            match = buffer.match(XMLRegExp_js_2.default.closeTag);
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
            match = buffer.match(XMLRegExp_js_2.default.openTag);
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
            match = buffer.match(XMLRegExp_js_2.default.comment);
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
                this._node = (0, Escaping_js_2.unescapeXML)(buffer.substring(0, nextIndex));
                return this._node;
            }
            // Handle incomplete tag on the buffer edge
            match = buffer.match(XMLRegExp_js_2.default.incompleteTag);
            if (typeof (match === null || match === void 0 ? void 0 : match.index) === 'number' &&
                match.index > 0) {
                nextIndex = match.index;
                this._index = index + nextIndex;
                this._node = (0, Escaping_js_2.unescapeXML)(buffer.substring(0, nextIndex));
                return this._node;
            }
            // Rest is just text
            this._index = index + buffer.length;
            this._node = (0, Escaping_js_2.unescapeXML)(buffer);
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
            const scanner = new RegExp(XMLRegExp_js_2.default.attribute.source, XMLRegExp_js_2.default.attribute.flags);
            let matchAttribute;
            while (matchAttribute = scanner.exec(snippet)) {
                attributes[matchAttribute[1]] = (0, Escaping_js_2.unescapeXML)(matchAttribute[2] ||
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
    exports.XMLScanner = XMLScanner;
    /* *
     *
     *  Default Export
     *
     * */
    exports.default = XMLScanner;
});
/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  XML TypeScript Library

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
define("XMLSelector", ["require", "exports", "XMLRegExp", "XMLTag"], function (require, exports, XMLRegExp_js_3, XMLTag_js_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.XMLSelector = void 0;
    /* *
     *
     *  Constants
     *
     * */
    const pipeRegExp = /\|+/gsu;
    const pointRegExp = /\.+/gsu;
    const spaceRegExp = /\s+/gsu;
    /* *
     *
     *  Functions
     *
     * */
    function matchAttributes(attributes, attributeTerms = []) {
        if (!attributes) {
            return attributeTerms.length === 0;
        }
        let value;
        let termValue;
        for (const attributeTerm of attributeTerms) {
            value = (attributes[attributeTerm.attribute] || '');
            termValue = attributeTerm.value;
            switch (attributeTerm.logic) {
                case '=':
                    if (value === termValue) {
                        continue;
                    }
                case '~=':
                    if (matchClasses(value, [termValue])) {
                        continue;
                    }
                case '|=':
                    if (value === termValue ||
                        value.startsWith(termValue + '-')) {
                        continue;
                    }
                case '^=':
                    if (value.startsWith(termValue)) {
                        continue;
                    }
                case '$=':
                    if (value.endsWith(termValue)) {
                        continue;
                    }
                case '*=':
                    if (value.includes(termValue)) {
                        continue;
                    }
                default:
                    return false;
            }
        }
        return true;
    }
    function matchClasses(classValue, classNeedles = []) {
        if (!classValue) {
            return classNeedles.length === 0;
        }
        const classes = classValue.split(spaceRegExp);
        for (let i = 0, iEnd = classNeedles.length; i < iEnd; ++i) {
            if (!classes.includes(classNeedles[i])) {
                return false;
            }
        }
        return true;
    }
    /* *
     *
     *  Class
     *
     * */
    /**
     * Creates a selector to search in a list of XML nodes.
     */
    class XMLSelector {
        /* *
         *
         *  Static Functions
         *
         * */
        /**
         * Parses selector terms in the string and create a XMLSelector instance
         * with them.
         *
         * @param selectorString
         * String with selector terms to parse.
         *
         * @return
         * The XMLSelector instance with the parsed selector terms, or undefined on
         * error.
         */
        static parse(selectorString) {
            const selectorsStrings = selectorString.split(spaceRegExp);
            const selectors = [];
            const selector = new XMLSelector(selectors);
            let match;
            let terms;
            for (let i = 0, iEnd = selectorsStrings.length; i < iEnd; ++i) {
                match = selectorsStrings[i].match(XMLRegExp_js_3.default.selector);
                if (!match) {
                    continue;
                }
                if (match[0] !== selectorsStrings[i]) {
                    return;
                }
                terms = {};
                // Tag name
                if (match[1] &&
                    match[1] !== '*') {
                    terms.tag = match[1].replace(pipeRegExp, ':');
                }
                // ID attribute
                if (match[2]) {
                    terms.id = match[2].substring(1);
                }
                // Class attribute
                if (match[3]) {
                    const classesStrings = match[3].split(pointRegExp);
                    const classes = [];
                    for (let j = 0, jEnd = classesStrings.length; j < jEnd; ++j) {
                        if (classesStrings[j]) {
                            classes.push(classesStrings[j]);
                        }
                    }
                    terms.classes = classes;
                }
                // Regular attributes
                if (match[4]) {
                    const attributes = [];
                    const scanner = new RegExp(XMLRegExp_js_3.default.attributeSelector.source, XMLRegExp_js_3.default.attributeSelector.flags);
                    let matchAttribute;
                    while (matchAttribute = scanner.exec(match[4])) {
                        attributes.push({
                            attribute: matchAttribute[1].replace(pipeRegExp, ':'),
                            logic: matchAttribute[2],
                            value: matchAttribute[3]
                        });
                    }
                    terms.attributes = attributes;
                }
                // Add
                if (Object.keys(terms).length) {
                    selectors.push(terms);
                }
            }
            return selector;
        }
        /* *
         *
         *  Constructor
         *
         * */
        /**
         * @param selector
         * Selector to match against.
         */
        constructor(selectors) {
            this.selectors = selectors;
        }
        /* *
         *
         *  Functions
         *
         * */
        /**
         * Creates a list of XML tags matching the specified terms.
         *
         * @param nodes
         * List of nodes to search in.
         *
         * @param term
         * Matching term to search for.
         *
         * @return
         * List of matching XML tags, or `undefined`.
         */
        find(nodes, term) {
            var _a, _b;
            const findings = [];
            for (const node of nodes) {
                // Ignore non-tag nodes
                if (!(0, XMLTag_js_2.isXMLTag)(node)) {
                    continue;
                }
                // Check for direct match
                if ((node.tag === term.tag ||
                    term.tag === '*') &&
                    (!term.id ||
                        ((_a = node.attributes) === null || _a === void 0 ? void 0 : _a.id) === term.id) &&
                    matchClasses((_b = node.attributes) === null || _b === void 0 ? void 0 : _b['class'], term.classes) &&
                    matchAttributes(node.attributes, term.attributes)) {
                    findings.push(node);
                }
                // Continue with search in inner XML nodes
                else if (node.innerXML) {
                    const subFindings = this.find(node.innerXML, term);
                    if (subFindings) {
                        for (const subFinding of subFindings) {
                            findings.push(subFinding);
                        }
                    }
                }
            }
            if (findings.length) {
                return findings;
            }
        }
        /**
         * Creates a list of XML tags matching the selector conditions.  The
         * matching is done using depth-first pre-order traversal of the XML nodes.
         *
         * @param nodes
         * Array of nodes to search in.
         *
         * @return
         * List of matching XML tags, or `undefined`.
         */
        query(nodes) {
            const selectors = this.selectors;
            let findings;
            for (let i = 0, iEnd = selectors.length; i < iEnd; ++i) {
                findings = this.find(nodes, selectors[i]);
                if (!findings) {
                    return;
                }
                nodes = findings;
            }
            return findings;
        }
    }
    exports.XMLSelector = XMLSelector;
    /* *
     *
     *  Default Export
     *
     * */
    exports.default = XMLSelector;
});
/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  XML TypeScript Library

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
define("XMLTree", ["require", "exports", "XMLCdata", "XMLNode", "XMLSelector", "XMLScanner", "XMLTag"], function (require, exports, XMLCdata_js_1, XMLNode_js_1, XMLSelector_js_1, XMLScanner_js_1, XMLTag_js_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.XMLTree = void 0;
    /* *
     *
     *  Class
     *
     * */
    /**
     * Scans text sources for XML tags and build a tree.
     */
    class XMLTree {
        /* *
         *
         *  Constructor
         *
         * */
        constructor(text) {
            this.roots = [];
            this.scanner = new XMLScanner_js_1.default(text);
        }
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
         * Whether to keep all empty string nodes.  This might be necessary for
         * pre-formatted text like scripts.
         *
         * @return
         * Tree roots, usually the last one is the main root.  Malformatted XML
         * might have different roots.  These roots are also available in the
         * `roots` property.
         */
        grow(text = this.scanner.getText(), allStringNodes) {
            var _a;
            const closeStack = [];
            const roots = this.roots;
            const scanner = this.scanner;
            roots.length = 0;
            scanner.setText(text);
            let node2;
            scan: while (node2 = scanner.scan()) {
                // First check for closing tag, then search for opening tag
                if ((0, XMLTag_js_3.isXMLTag)(node2) &&
                    ((_a = node2.tag) === null || _a === void 0 ? void 0 : _a[0]) === '/') {
                    const openTag = node2.tag.substring(1);
                    const openStack = [];
                    // Search backwards for opening tag and build stack with nodes
                    // in-between
                    for (let i = roots.length - 1, node1; i >= 0; --i) {
                        node1 = roots[i];
                        // Find opening tag and remove openStack from roots
                        if ((0, XMLTag_js_3.isXMLTag)(node1) &&
                            node1.tag === openTag &&
                            !node1.empty &&
                            !closeStack.includes(node1)) {
                            if (openStack.length) {
                                node1.innerXML = openStack;
                                roots.length = roots.length - openStack.length;
                            }
                            closeStack.push(node1);
                            continue scan;
                        }
                        // Save node in the openStack for innerXML
                        openStack.unshift(node1);
                    }
                    // Continue and ignore closing tag
                    continue scan;
                }
                // Add CDATA as raw string
                if ((0, XMLCdata_js_1.isXMLCdata)(node2)) {
                    roots.push(node2.cdata);
                    continue scan;
                }
                // Skip empty string nodes
                if (!allStringNodes &&
                    (0, XMLNode_js_1.isString)(node2) &&
                    !node2.trim()) {
                    continue scan;
                }
                roots.push(node2);
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
        query(selector) {
            const xmlSelector = XMLSelector_js_1.default.parse(selector);
            if (xmlSelector) {
                return xmlSelector.query(this.roots);
            }
        }
    }
    exports.XMLTree = XMLTree;
    /* *
     *
     *  Default Export
     *
     * */
    exports.default = XMLTree;
});
/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  XML TypeScript Library

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
define("index", ["require", "exports", "XMLScanner", "Escaping", "XMLCdata", "XMLComment", "XMLNode", "XMLPrinter", "XMLRegExp", "XMLScanner", "XMLSelector", "XMLTag", "XMLTree"], function (require, exports, XMLScanner_js_2, Escaping_js_3, XMLCdata_js_2, XMLComment_js_1, XMLNode_js_2, XMLPrinter_js_1, XMLRegExp_js_4, XMLScanner_js_3, XMLSelector_js_2, XMLTag_js_4, XMLTree_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(Escaping_js_3, exports);
    __exportStar(XMLCdata_js_2, exports);
    __exportStar(XMLComment_js_1, exports);
    __exportStar(XMLNode_js_2, exports);
    __exportStar(XMLPrinter_js_1, exports);
    __exportStar(XMLRegExp_js_4, exports);
    __exportStar(XMLScanner_js_3, exports);
    __exportStar(XMLSelector_js_2, exports);
    __exportStar(XMLTag_js_4, exports);
    __exportStar(XMLTree_js_1, exports);
    exports.default = XMLScanner_js_2.default;
});
//# sourceMappingURL=tsl-core-xml.js.map