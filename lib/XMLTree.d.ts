/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  XML TypeScript Library

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License; you may not use this file except in
  compliance with the License. You may obtain a copy of the MIT License at
  https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
import XMLNode from './XMLNode.js';
import XMLScanner from './XMLScanner.js';
/**
 * Scans text sources for XML tags and build a tree.
 */
export declare class XMLTree {
    constructor(text?: string);
    /**
     * Tree roots after the last grow process.
     */
    readonly roots: Array<XMLNode>;
    /**
     * Underlying scanner to process text. Can be used to access the last
     * processed text and raw XML.
     */
    readonly scanner: XMLScanner;
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
    grow(text?: string, allStringNodes?: boolean): Array<XMLNode>;
}
export default XMLTree;