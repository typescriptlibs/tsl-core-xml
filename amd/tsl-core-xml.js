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
         * - Group 1: Trailing attribute name, including special characters.
         * - Group 2: Single quote encapsuled value.
         * - Group 3: Double quote encapsuled value.
         * - Group 4: None encapsuled value.
         */
        Attribute: /\s+([^'"\s\/<=>]+)(?:=(?:'([^']*?)'|"([^"]*?)"|([^'"\s\/<=>]+?)))?/gsu,
        /**
         * RegExp pattern for XML comment.
         * - Group 1: Comment.
         */
        Comment: /<!--(.*?)-->/su,
        /**
         * RegExp pattern for XML tag.
         * - Group 1: Trailing tag name, including special characters.
         * - Group 2: Attributes separated by space.
         * - Group 3: Empty character.
         */
        Tag: /<([^\s<=>]+)([^>]*?)([\/?]?)>/su
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
         * Scans the text for the next XML node. Returns `undefined` if the scan
         * process has reached the end of the text.
         *
         * @return
         * Found XML node; or `undefined`, if reached the end.
         */
        scan() {
            let index = (this._index || 0);
            let node;
            const buffer = this._text.substring(index);
            if (!buffer) {
                return;
            }
            // Search
            const matchComment = buffer.match(XMLRegExp_js_1.default.Comment);
            const matchTag = buffer.match(XMLRegExp_js_1.default.Tag);
            // Comment is next
            if (matchComment &&
                (!matchTag ||
                    matchComment.index <= matchTag.index)) {
                // Return leading text
                if (matchComment.index) {
                    index += matchComment.index;
                    node = buffer.substring(0, matchComment.index);
                }
                // Return the comment itself
                else {
                    index += matchComment[0].length;
                    node = {
                        comment: matchComment[1]
                    };
                }
            }
            // Tag is next
            else if (matchTag) {
                // Return leading text
                if (matchTag.index) {
                    index += matchTag.index;
                    node = buffer.substring(0, matchTag.index);
                }
                // Return the tag itself
                else {
                    index += matchTag[0].length;
                    node = {
                        tag: matchTag[1]
                    };
                    // Self-closing tags are marked empty
                    if (matchTag[3]) {
                        node.empty = true;
                    }
                    // Search for attributes
                    if (matchTag[2]) {
                        let attributes = {};
                        let matchAttribute;
                        let scanner = new RegExp(XMLRegExp_js_1.default.Attribute.source, XMLRegExp_js_1.default.Attribute.flags);
                        let snippet = matchTag[2];
                        while (matchAttribute = scanner.exec(snippet)) {
                            attributes[matchAttribute[1]] = (matchAttribute[2] ||
                                matchAttribute[3] ||
                                matchAttribute[4] ||
                                '');
                        }
                        if (Object.keys(attributes).length) {
                            node.attributes = attributes;
                        }
                    }
                }
            }
            // Rest is just text
            else {
                index += buffer.length;
                node = buffer;
            }
            // Save and return
            this._index = index;
            this._node = node;
            return node;
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
define("index", ["require", "exports", "XMLScanner", "XMLComment", "XMLNode", "XMLRegExp", "XMLScanner", "XMLTag"], function (require, exports, XMLScanner_js_1, XMLComment_js_1, XMLNode_js_1, XMLRegExp_js_2, XMLScanner_js_2, XMLTag_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(XMLComment_js_1, exports);
    __exportStar(XMLNode_js_1, exports);
    __exportStar(XMLRegExp_js_2, exports);
    __exportStar(XMLScanner_js_2, exports);
    __exportStar(XMLTag_js_1, exports);
    exports.default = XMLScanner_js_1.default;
});
//# sourceMappingURL=tsl-core-xml.js.map