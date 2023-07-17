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

  Licensed under the MIT License; you may not use this file except in
  compliance with the License. You may obtain a copy of the MIT License at
  https://typescriptlibs.org/LICENSE.txt

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

  Licensed under the MIT License; you may not use this file except in
  compliance with the License. You may obtain a copy of the MIT License at
  https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
define("EscapeEntities/index", ["require", "exports", "EscapeEntities/XMLEscapeEntities"], function (require, exports, XMLEscapeEntities_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(XMLEscapeEntities_js_1, exports);
});
/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  XML TypeScript Library

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License; you may not use this file except in
  compliance with the License. You may obtain a copy of the MIT License at
  https://typescriptlibs.org/LICENSE.txt

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
        Attribute: /([^'"\s\/<=>]+)(?:=(?:'([^']*)'|"([^"]*)"|([^'"\s\/<=>]+)))?/gsu,
        /**
         * RegExp pattern for XML character data.
         * - Group 1: CDATA.
         */
        Cdata: /<!\[CDATA\[((?:[^\]]|\][^\]])*?)\]\]>/su,
        /**
         * RegExp pattern for XML close tag.
         * - Group 1: Tag name.
         */
        CloseTag: /<(\/[\w:][\w\-.:]*)>/su,
        /**
         * RegExp pattern for XML comment.
         * - Group 1: Comment.
         */
        Comment: /<!--((?:[^<]|<[^!])*?)-->/su,
        /**
         * RegExp pattern for XML escape entity.
         * - Group 1: Character name.
         * - Group 2: Character decimal code.
         * - Group 3: Character hexadecimal code.
         */
        EscapeEntity: /&(?:(\w+)|#(\d+)|#x([0-9A-F]+));/gisu,
        /**
         * RegExp pattern for incomplete XML tag on buffer edge.
         * - Group 1: Incomplete tag name.
         */
        IncompleteTag: /<$|<([\/!?]?[\w\-.:]*)\b[^<]*$/su,
        /**
         * RegExp pattern for XML tag begin.
         * - Group 1: Tag name.
         */
        OpenTag: /<([!?]?[\w:][\w\-.:]*)\b/su,
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

  Licensed under the MIT License; you may not use this file except in
  compliance with the License. You may obtain a copy of the MIT License at
  https://typescriptlibs.org/LICENSE.txt

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
        return str.replace(XMLRegExp_js_1.default.EscapeEntity, escapeToCharacter);
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

  Licensed under the MIT License; you may not use this file except in
  compliance with the License. You may obtain a copy of the MIT License at
  https://typescriptlibs.org/LICENSE.txt

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
        return (typeof xmlNode === 'object' &&
            typeof xmlNode.comment === 'string');
    }
    exports.isXMLComment = isXMLComment;
});
/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  XML TypeScript Library

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License; you may not use this file except in
  compliance with the License. You may obtain a copy of the MIT License at
  https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
define("XMLTag", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isXMLTag = void 0;
    /* *
     *
     *  Functions
     *
     * */
    function isXMLTag(xmlNode) {
        return (typeof xmlNode === 'object' &&
            typeof xmlNode.tag === 'string');
    }
    exports.isXMLTag = isXMLTag;
});
/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  XML TypeScript Library

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License; you may not use this file except in
  compliance with the License. You may obtain a copy of the MIT License at
  https://typescriptlibs.org/LICENSE.txt

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

  Licensed under the MIT License; you may not use this file except in
  compliance with the License. You may obtain a copy of the MIT License at
  https://typescriptlibs.org/LICENSE.txt

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
        return (typeof xmlNode === 'object' &&
            typeof xmlNode.cdata === 'string');
    }
    exports.isXMLCdata = isXMLCdata;
});
/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  XML TypeScript Library

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License; you may not use this file except in
  compliance with the License. You may obtain a copy of the MIT License at
  https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
define("XMLScanner", ["require", "exports", "Escaping", "XMLRegExp"], function (require, exports, Escaping_js_1, XMLRegExp_js_2) {
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
            let match = buffer.match(XMLRegExp_js_2.default.CloseTag);
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
            match = buffer.match(XMLRegExp_js_2.default.OpenTag);
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
            // Search character data
            match = buffer.match(XMLRegExp_js_2.default.Cdata);
            if (typeof (match === null || match === void 0 ? void 0 : match.index) === 'number') {
                if (match.index > 0) {
                    nextIndex = (match.index < nextIndex ? match.index : nextIndex);
                }
                else {
                    this._index = index + match[0].length;
                    this._node = {
                        cdata: match[1]
                    };
                    return this._node;
                }
            }
            // Search comment
            match = buffer.match(XMLRegExp_js_2.default.Comment);
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
                this._node = (0, Escaping_js_1.unescapeXML)(buffer.substring(0, nextIndex));
                return this._node;
            }
            // Handle incomplete tag on the buffer edge
            match = buffer.match(XMLRegExp_js_2.default.IncompleteTag);
            if (typeof (match === null || match === void 0 ? void 0 : match.index) === 'number' &&
                match.index > 0) {
                nextIndex = match.index;
                this._index = index + nextIndex;
                this._node = (0, Escaping_js_1.unescapeXML)(buffer.substring(0, nextIndex));
                return this._node;
            }
            // Rest is just text
            this._index = index + buffer.length;
            this._node = (0, Escaping_js_1.unescapeXML)(buffer);
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
            let scanner = new RegExp(XMLRegExp_js_2.default.Attribute.source, XMLRegExp_js_2.default.Attribute.flags);
            while (matchAttribute = scanner.exec(snippet)) {
                attributes[matchAttribute[1]] = (0, Escaping_js_1.unescapeXML)(matchAttribute[2] ||
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

  Licensed under the MIT License; you may not use this file except in
  compliance with the License. You may obtain a copy of the MIT License at
  https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
define("XMLTree", ["require", "exports", "XMLCdata", "XMLNode", "XMLScanner", "XMLTag"], function (require, exports, XMLCdata_js_1, XMLNode_js_1, XMLScanner_js_1, XMLTag_js_1) {
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
         * Whether to keep all empty string nodes. This might be necessary for
         * pre-formatted text like scripts.
         *
         * @return
         * Tree roots, usually the last one is the main root. Malformatted XML might
         * have different roots.
         */
        grow(text = this.scanner.getText(), allStringNodes) {
            var _a;
            const closeStack = [];
            const roots = this.roots;
            const scanner = this.scanner;
            roots.length = 0;
            scanner.setText(text);
            let node;
            scan: while (node = scanner.scan()) {
                // First check for closing tag, then search for opening tag
                if ((0, XMLTag_js_1.isXMLTag)(node) &&
                    ((_a = node.tag) === null || _a === void 0 ? void 0 : _a[0]) === '/') {
                    const openTag = node.tag.substring(1);
                    const openStack = [];
                    // Search backwards for opening tag and build stack with nodes
                    // in-between
                    for (let i = roots.length - 1, node2; i >= 0; --i) {
                        node2 = roots[i];
                        // Find opening tag and remove openStack from roots
                        if ((0, XMLTag_js_1.isXMLTag)(node2) &&
                            node2.tag === openTag &&
                            !node2.empty &&
                            !closeStack.includes(node2)) {
                            if (openStack.length) {
                                node2.innerXML = openStack;
                                roots.length = roots.length - openStack.length;
                            }
                            closeStack.push(node2);
                            continue scan;
                        }
                        // Save node in the openStack for innerXML
                        openStack.unshift(node2);
                    }
                    // Continue and ignore closing tag
                    continue scan;
                }
                // Add CDATA as raw string
                if ((0, XMLCdata_js_1.isXMLCdata)(node)) {
                    roots.push(node.cdata);
                    continue scan;
                }
                // Skip empty string nodes
                if (!allStringNodes &&
                    (0, XMLNode_js_1.isString)(node) &&
                    !node.trim()) {
                    continue scan;
                }
                roots.push(node);
            }
            return roots;
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

  Licensed under the MIT License; you may not use this file except in
  compliance with the License. You may obtain a copy of the MIT License at
  https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
define("index", ["require", "exports", "XMLScanner", "Escaping", "XMLCdata", "XMLComment", "XMLNode", "XMLRegExp", "XMLScanner", "XMLTag", "XMLTree"], function (require, exports, XMLScanner_js_2, Escaping_js_2, XMLCdata_js_2, XMLComment_js_1, XMLNode_js_2, XMLRegExp_js_3, XMLScanner_js_3, XMLTag_js_2, XMLTree_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(Escaping_js_2, exports);
    __exportStar(XMLCdata_js_2, exports);
    __exportStar(XMLComment_js_1, exports);
    __exportStar(XMLNode_js_2, exports);
    __exportStar(XMLRegExp_js_3, exports);
    __exportStar(XMLScanner_js_3, exports);
    __exportStar(XMLTag_js_2, exports);
    __exportStar(XMLTree_js_1, exports);
    exports.default = XMLScanner_js_2.default;
});
//# sourceMappingURL=tsl-core-xml.js.map