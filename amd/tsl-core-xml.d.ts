declare module "EscapeEntities/XMLEscapeEntities" {
    /*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\
    
      XML TypeScript Library
    
      Copyright (c) TypeScriptLibs and Contributors
    
      Licensed under the MIT License; you may not use this file except in
      compliance with the License. You may obtain a copy of the MIT License at
      https://typescriptlibs.org/LICENSE.txt
    
    \*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
    export const XMLEscapeEntities: Record<string, string>;
    export default XMLEscapeEntities;
}
declare module "EscapeEntities/index" {
    /*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\
    
      XML TypeScript Library
    
      Copyright (c) TypeScriptLibs and Contributors
    
      Licensed under the MIT License; you may not use this file except in
      compliance with the License. You may obtain a copy of the MIT License at
      https://typescriptlibs.org/LICENSE.txt
    
    \*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
    export * from "EscapeEntities/XMLEscapeEntities";
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
         * - Group 1: Attribute name.
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
         * RegExp pattern for XML escape entity.
         * - Group 1: Character name.
         * - Group 2: Character decimal code.
         * - Group 3: Character hexadecimal code.
         */
        EscapeEntity: RegExp;
        /**
         * RegExp pattern for incomplete XML tag on buffer edge.
         * - Group 1: Incomplete tag name.
         */
        IncompleteTag: RegExp;
        /**
         * RegExp pattern for XML tag begin.
         * - Group 1: Tag name.
         */
        OpenTag: RegExp;
    };
    export default XMLRegExp;
}
declare module "Escaping" {
    export function escapeXML(str: string): string;
    export function unescapeXML(str: string): string;
    const _default: {
        escapeXML: typeof escapeXML;
        unescapeXML: typeof unescapeXML;
    };
    export default _default;
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
         * Name of the XML tag. The name might include a namespace.
         */
        tag: string;
    }
    export function isXMLTag(xmlNode: XMLNode): xmlNode is XMLTag;
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
    export function isString(xmlNode: unknown): xmlNode is string;
    export default XMLNode;
}
declare module "XMLComment" {
    /*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\
    
      XML TypeScript Library
    
      Copyright (c) TypeScriptLibs and Contributors
    
      Licensed under the MIT License; you may not use this file except in
      compliance with the License. You may obtain a copy of the MIT License at
      https://typescriptlibs.org/LICENSE.txt
    
    \*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
    import XMLNode from "XMLNode";
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
    export function isXMLComment(xmlNode: XMLNode): xmlNode is XMLComment;
    export default XMLComment;
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
        private scanAttributes;
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
        private indexOfTagEnd;
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
declare module "XMLTree" {
    /*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\
    
      XML TypeScript Library
    
      Copyright (c) TypeScriptLibs and Contributors
    
      Licensed under the MIT License; you may not use this file except in
      compliance with the License. You may obtain a copy of the MIT License at
      https://typescriptlibs.org/LICENSE.txt
    
    \*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
    import XMLNode from "XMLNode";
    import XMLScanner from "XMLScanner";
    /**
     * Scans text sources for XML tags and build a tree.
     */
    export class XMLTree {
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
    export * from "Escaping";
    export * from "XMLComment";
    export * from "XMLNode";
    export * from "XMLRegExp";
    export * from "XMLScanner";
    export * from "XMLTag";
    export * from "XMLTree";
    export default XMLScanner;
}
