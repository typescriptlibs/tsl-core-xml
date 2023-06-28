/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  XML TypeScript Library

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License; you may not use this file except in
  compliance with the License. You may obtain a copy of the MIT License at
  https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
import XMLNode from './XMLNode.js';
/**
 * Scans text sources for XML tags.
 */
export declare class XMLScanner {
    constructor(text?: string);
    /**
     * Index for the next scan.
     */
    private _index?;
    /**
     * Node result of the last scan.
     */
    private _node?;
    /**
     * Text to scan.
     */
    private _text;
    /**
     * Node result of the last scan.
     */
    get node(): (XMLNode | undefined);
    /**
     * Returns the text used for the scan process.
     *
     * @return
     * Text used for the scan process.
     */
    getText(): string;
    /**
     * Scans the text for the next XML node. It will return a string, if no XML
     * tag can be found in the next 1 million characters. Returns `undefined` if
     * the scan process has reached the end of the text.
     *
     * @return
     * Found XML node; or `undefined`, if reached the end.
     */
    scan(): (XMLNode | undefined);
    private scanAttributes;
    /**
     * Sets the text used by the scan process.
     *
     * @param text
     * Text to scan.
     */
    setText(text: string): void;
    /**
     * Skips the given number of XML nodes in the scan process.
     *
     * @param nodeCount
     * Number of XML nodes to skip.
     */
    skip(nodeCount: number): void;
}
export default XMLScanner;
