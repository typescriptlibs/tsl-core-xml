/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  XML TypeScript Library

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
import XMLNode from './XMLNode.js';
import XMLScanner from './XMLScanner.js';
import XMLTag from './XMLTag.js';
/**
 * Scans text sources for XML tags and build a tree.
 */
export declare class XMLTree {
    /**
     * Grows the tree based on all XMLNodes in a given text.
     *
     * @param text
     * Text to grow tree from.
     *
     * @param allStringNodes
     * Whether to keep all empty string nodes.  This might be necessary for
     * pre-formatted text like scripts.
     *
     * @return
     * Tree with roots, where usually the last root is the main one.
     */
    static parse(text?: string, allStringNodes?: boolean): XMLTree;
    constructor(text?: string);
    /**
     * Tree roots after the last grow process.
     */
    readonly roots: Array<XMLNode>;
    /**
     * Underlying scanner to process text.  Can be used to access the last
     * processed text and raw XML.
     */
    readonly scanner: XMLScanner;
    /**
     * Grows new tree roots based on all XMLNodes in a given text.
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
    grow(text?: string, allStringNodes?: boolean): Array<XMLNode>;
    /**
     * Searches for XML nodes matching the specified selector.  If the selector
     * contains the `#` character, only the first machting XML node will be
     * returned.
     *
     * @param selector
     * Selector to match against.
     *
     * @return
     * List of XML nodes matching the selector.
     *
     * @throws
     * SyntaxError, if unexpected patterns in selector terms are found.
     */
    query(selector: string): Array<XMLTag>;
    /**
     * Converts the tree of nodes back to XML text.
     */
    toString(): string;
}
export default XMLTree;
