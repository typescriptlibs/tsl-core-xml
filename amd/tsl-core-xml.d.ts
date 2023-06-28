declare module "XMLComment" {
    /*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\
    
      XML TypeScript Library
    
      Copyright (c) TypeScriptLibs and Contributors
    
      Licensed under the MIT License; you may not use this file except in
      compliance with the License. You may obtain a copy of the MIT License at
      https://typescriptlibs.org/LICENSE.txt
    
    \*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
    /**
     * Represents an XML comment node.
     */
    export interface XMLComment {
        /**
         * Text of the comment.
         */
        comment: string;
        /**
         * Use this property to determine, if the object is a tag node.
         */
        tag?: undefined;
    }
    export default XMLComment;
}
declare module "XMLTag" {
    /*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\
    
      XML TypeScript Library
    
      Copyright (c) TypeScriptLibs and Contributors
    
      Licensed under the MIT License; you may not use this file except in
      compliance with the License. You may obtain a copy of the MIT License at
      https://typescriptlibs.org/LICENSE.txt
    
    \*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
    import XMLNode from "XMLNode";
    /**
     * Represent an XML tag.
     */
    export interface XMLTag {
        /**
         * Attributes of the XML tag. Attribute names might include a namespace.
         */
        attributes?: Record<string, string>;
        /**
         * Use this property to determine, if the object is a comment node.
         */
        comment?: undefined;
        /**
         * Indicates a self-closing XML tag.
         */
        empty?: boolean;
        /**
         * Encapsuled inner XML nodes, if the XML tag is part of an XMLTree.
         */
        innerXML?: Array<XMLNode>;
        /**
         * Encapsuled inner text, if the XML tag is part of an XMLTree.
         */
        innerText?: string;
        /**
         * Name of the XML tag. The name might include a namespace.
         */
        tag: string;
    }
    export default XMLTag;
}
declare module "XMLNode" {
    /*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\
    
      XML TypeScript Library
    
      Copyright (c) TypeScriptLibs and Contributors
    
      Licensed under the MIT License; you may not use this file except in
      compliance with the License. You may obtain a copy of the MIT License at
      https://typescriptlibs.org/LICENSE.txt
    
    \*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
    import XMLComment from "XMLComment";
    import XMLTag from "XMLTag";
    /**
     * Represents a node in an XML source. This can be either a comment, a tag, or a
     * string.
     */
    export type XMLNode = (string | XMLComment | XMLTag);
    export default XMLNode;
}
declare module "XMLRegExp" {
    /*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\
    
      XML TypeScript Library
    
      Copyright (c) TypeScriptLibs and Contributors
    
      Licensed under the MIT License; you may not use this file except in
      compliance with the License. You may obtain a copy of the MIT License at
      https://typescriptlibs.org/LICENSE.txt
    
    \*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
    /**
     * Regular expressions used to detect and extract XML tags in text.
     */
    export const XMLRegExp: {
        /**
         * RegExp pattern for XML attribute.
         * - Group 1: Trailing attribute name, including special characters.
         * - Group 2: Single quote encapsuled value.
         * - Group 3: Double quote encapsuled value.
         * - Group 4: None encapsuled value.
         */
        Attribute: RegExp;
        /**
         * RegExp pattern for XML close tag.
         * - Group 1: Tag name.
         */
        CloseTag: RegExp;
        /**
         * RegExp pattern for XML comment.
         * - Group 1: Comment.
         */
        Comment: RegExp;
        /**
         * RegExp pattern for XML declaration.
         * - Group 1: Declaration name.
         * - Group 2: Attributes separated by space.
         */
        Declaration: RegExp;
        /**
         * RegExp pattern for XML definition.
         * - Group 1: Definition name.
         * - Group 2: Attributes separated by space.
         */
        Definition: RegExp;
        /**
         * RegExp pattern for regular XML tag.
         * - Group 1: Trailing tag name, including special characters.
         * - Group 2: Space of attributes and optional self-closing character.
         */
        Tag: RegExp;
    };
    export default XMLRegExp;
}
declare module "XMLScanner" {
    import XMLNode from "XMLNode";
    /**
     * Scans text sources for XML tags.
     */
    export class XMLScanner {
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
}
declare module "index" {
    /*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\
    
      XML TypeScript Library
    
      Copyright (c) TypeScriptLibs and Contributors
    
      Licensed under the MIT License; you may not use this file except in
      compliance with the License. You may obtain a copy of the MIT License at
      https://typescriptlibs.org/LICENSE.txt
    
    \*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
    import XMLScanner from "XMLScanner";
    export * from "XMLComment";
    export * from "XMLNode";
    export * from "XMLRegExp";
    export * from "XMLScanner";
    export * from "XMLTag";
    export default XMLScanner;
}
