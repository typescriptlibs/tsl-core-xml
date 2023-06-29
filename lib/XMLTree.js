/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  XML TypeScript Library

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License; you may not use this file except in
  compliance with the License. You may obtain a copy of the MIT License at
  https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
import XMLScanner from './XMLScanner.js';
/* *
 *
 *  Class
 *
 * */
/**
 * Scans text sources for XML tags and build a tree.
 */
export class XMLTree {
    /* *
     *
     *  Constructor
     *
     * */
    constructor(text) {
        this.roots = [];
        this.scanner = new XMLScanner(text);
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
                const tagStack = [];
                // Search opening tag and build stack with nodes in-between
                for (let i = roots.length - 1, stackNode; i >= 0; --i) {
                    stackNode = roots[i];
                    // Check for opening tag and move in-between roots to tag
                    if (typeof stackNode === 'object' &&
                        stackNode.tag === openTag &&
                        !stackNode.empty &&
                        !stackNode.innerXML) {
                        stackNode.innerXML = tagStack;
                        roots.length = roots.length - tagStack.length;
                        continue scan;
                    }
                    // Save all nodes in the tagStack for innerXML
                    tagStack.unshift(stackNode);
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
/* *
 *
 *  Default Export
 *
 * */
export default XMLTree;
