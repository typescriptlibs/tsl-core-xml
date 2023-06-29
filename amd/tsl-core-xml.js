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
define("XMLComment", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
         * RegExp pattern for XML close tag.
         * - Group 1: Tag name.
         */
        CloseTag: /<(\/\w[\w\-.:]*)>/su,
        /**
         * RegExp pattern for XML comment.
         * - Group 1: Comment.
         */
        Comment: /<!--((?:[^<]|<(?!!))*?)-->/su,
        /**
         * RegExp pattern for XML declaration.
         * - Group 1: Declaration name.
         * - Group 2: Attributes separated by space.
         */
        Declaration: /<(\?\w[\w\-.:]*)(\b[^>]*)?\?>/su,
        /**
         * RegExp pattern for XML definition.
         * - Group 1: Definition name.
         * - Group 2: Attributes separated by space.
         */
        Definition: /<(!\w[\w\-.:]*)(\b[^>]*)?>/su,
        /**
         * RegExp pattern for regular XML tag.
         * - Group 1: Tag name.
         * - Group 2: Space of attributes.
         * - Group 3: Self-closing character.
         */
        Tag: /<([\w:][\w\-.:]*)(\b(?:'[^']*'|"[^"]*"|[^'"<>]+)*)?>/su
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
define("XMLScanner", ["require", "exports", "XMLRegExp"], function (require, exports, XMLRegExp_js_1) {
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
            // Search tag
            let match = buffer.match(XMLRegExp_js_1.default.Tag);
            if (typeof (match === null || match === void 0 ? void 0 : match.index) === 'number') {
                if (match.index > 0) {
                    nextIndex = (match.index < nextIndex ? match.index : nextIndex);
                }
                else {
                    this._index = index + match[0].length;
                    this._node = {
                        tag: match[1]
                    };
                    if (match[2]) {
                        let rest = match[2];
                        // Self-closing tags are marked empty
                        if (rest.endsWith('/')) {
                            this._node.empty = true;
                            rest.substring(0, rest.length - 1);
                        }
                        // Search for attributes
                        const attributes = this.scanAttributes(rest);
                        if (attributes) {
                            this._node.attributes = attributes;
                        }
                    }
                    return this._node;
                }
            }
            // Search close tag
            match = buffer.match(XMLRegExp_js_1.default.CloseTag);
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
            // Search comment
            match = buffer.match(XMLRegExp_js_1.default.Comment);
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
            // Search definition
            match = buffer.match(XMLRegExp_js_1.default.Definition);
            if (typeof (match === null || match === void 0 ? void 0 : match.index) === 'number') {
                if (match.index > 0) {
                    nextIndex = (match.index < nextIndex ? match.index : nextIndex);
                }
                else {
                    this._index = index + match[0].length;
                    this._node = {
                        tag: match[1]
                    };
                    // Search for attributes
                    if (match[2]) {
                        const attributes = this.scanAttributes(match[2]);
                        if (attributes) {
                            this._node.attributes = attributes;
                        }
                    }
                    return this._node;
                }
            }
            // Search declaration
            match = buffer.match(XMLRegExp_js_1.default.Declaration);
            if (typeof (match === null || match === void 0 ? void 0 : match.index) === 'number') {
                if (match.index > 0) {
                    nextIndex = (match.index < nextIndex ? match.index : nextIndex);
                }
                else {
                    this._index = index + match[0].length;
                    this._node = {
                        tag: match[1],
                        empty: true
                    };
                    // Search for attributes
                    if (match[2]) {
                        const attributes = this.scanAttributes(match[2]);
                        if (attributes) {
                            this._node.attributes = attributes;
                        }
                    }
                    return this._node;
                }
            }
            // Return leading text before match in next round
            if (nextIndex > 0 && nextIndex < Infinity) {
                this._index = index + nextIndex;
                this._node = buffer.substring(0, nextIndex);
                return this._node;
            }
            // Rest is just text
            this._index = index + buffer.length;
            this._node = buffer;
            return this._node;
        }
        scanAttributes(snippet) {
            const attributes = {};
            let matchAttribute;
            let scanner = new RegExp(XMLRegExp_js_1.default.Attribute.source, XMLRegExp_js_1.default.Attribute.flags);
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
define("XMLTree", ["require", "exports", "XMLScanner"], function (require, exports, XMLScanner_js_1) {
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
                // Check for closing tag, then search for opening tag
                if (typeof node === 'object' &&
                    ((_a = node.tag) === null || _a === void 0 ? void 0 : _a[0]) === '/') {
                    const openTag = node.tag.substring(1);
                    const openStack = [];
                    // Search opening tag and build stack with nodes in-between
                    for (let i = roots.length - 1, node2; i >= 0; --i) {
                        node2 = roots[i];
                        // Find opening tag and remove openStack from roots
                        if (typeof node2 === 'object' &&
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
                // Skip empty string nodes
                if (!allStringNodes &&
                    typeof node === 'string' &&
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
define("index", ["require", "exports", "XMLScanner", "XMLComment", "XMLNode", "XMLRegExp", "XMLScanner", "XMLTag", "XMLTree"], function (require, exports, XMLScanner_js_2, XMLComment_js_1, XMLNode_js_1, XMLRegExp_js_2, XMLScanner_js_3, XMLTag_js_1, XMLTree_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(XMLComment_js_1, exports);
    __exportStar(XMLNode_js_1, exports);
    __exportStar(XMLRegExp_js_2, exports);
    __exportStar(XMLScanner_js_3, exports);
    __exportStar(XMLTag_js_1, exports);
    __exportStar(XMLTree_js_1, exports);
    exports.default = XMLScanner_js_2.default;
});
//# sourceMappingURL=tsl-core-xml.js.map