declare module "EscapeEntities/XMLEscapeEntities" {
    /*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\
    
      XML TypeScript Library
    
      Copyright (c) TypeScriptLibs and Contributors
    
      Licensed under the MIT License.
      You may not use this file except in compliance with the License.
      You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt
    
    \*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
    export const XMLEscapeEntities: Record<string, string>;
    export default XMLEscapeEntities;
}
declare module "EscapeEntities/XMLSanitizeEntities" {
    /*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\
    
      XML TypeScript Library
    
      Copyright (c) TypeScriptLibs and Contributors
    
      Licensed under the MIT License.
      You may not use this file except in compliance with the License.
      You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt
    
    \*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
    export const XMLCharacterEntities: RegExp;
    export const ControlCharacterEntities: RegExp;
    const _default: {
        ControlCharacterEntities: RegExp;
    };
    export default _default;
}
declare module "EscapeEntities/index" {
    /*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\
    
      XML TypeScript Library
    
      Copyright (c) TypeScriptLibs and Contributors
    
      Licensed under the MIT License.
      You may not use this file except in compliance with the License.
      You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt
    
    \*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
    export * from "EscapeEntities/XMLEscapeEntities";
    export * from "EscapeEntities/XMLSanitizeEntities";
}
declare module "XMLRegExp" {
    /*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\
    
      XML TypeScript Library
    
      Copyright (c) TypeScriptLibs and Contributors
    
      Licensed under the MIT License.
      You may not use this file except in compliance with the License.
      You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt
    
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
        attribute: RegExp;
        /**
         * RegExp pattern for XML attribute selector.
         * - Group 1: Attribute key.
         * - Group 2: Match operation.
         * - Group 3: Match value.
         */
        attributeSelector: RegExp;
        /**
         * RegExp pattern for XML character data.
         * - Group 1: CDATA.
         */
        cdata: RegExp;
        /**
         * RegExp pattern for XML close tag.
         * - Group 1: Tag name.
         */
        closeTag: RegExp;
        /**
         * RegExp pattern for XML comment.
         * - Group 1: Comment.
         */
        comment: RegExp;
        /**
         * RegExp pattern for XML escape entity.
         * - Group 1: Character name.
         * - Group 2: Character decimal code.
         * - Group 3: Character hexadecimal code.
         */
        escapeEntity: RegExp;
        /**
         * RegExp pattern for incomplete XML tag on buffer edge.
         * - Group 1: Incomplete tag name.
         */
        incompleteTag: RegExp;
        /**
         * RegExp pattern for XML open tag.
         * - Group 1: Tag name.
         */
        openTag: RegExp;
        /**
         * RegExp pattern for XML selector.
         * - Group 1: Tag name.
         * - Group 2: ID attribute.
         * - Group 3: Class attribute.
         * - Group 4: Other attributes.
         */
        selector: RegExp;
    };
    export default XMLRegExp;
}
declare module "Escaping" {
    export function escapeXML(str: string): string;
    export function sanitizeTag(str: string): string;
    export function sanitizeXML(str: string): string;
    export function unescapeXML(str: string): string;
    const _default_1: {
        escapeXML: typeof escapeXML;
        sanitizeName: typeof sanitizeTag;
        sanitizeXML: typeof sanitizeXML;
        unescapeXML: typeof unescapeXML;
    };
    export default _default_1;
}
declare module "XMLComment" {
    /*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\
    
      XML TypeScript Library
    
      Copyright (c) TypeScriptLibs and Contributors
    
      Licensed under the MIT License.
      You may not use this file except in compliance with the License.
      You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt
    
    \*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
    /**
     * Represents an XML comment node.
     */
    export interface XMLComment {
        /**
         * Use this property to determine, if the object is a character data node.
         */
        cdata?: undefined;
        /**
         * Text of the comment.
         */
        comment: string;
        /**
         * Use this property to determine, if the object is a tag node.
         */
        tag?: undefined;
    }
    export function isXMLComment(xmlNode: unknown): xmlNode is XMLComment;
    export default XMLComment;
}
declare module "XMLTag" {
    /*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\
    
      XML TypeScript Library
    
      Copyright (c) TypeScriptLibs and Contributors
    
      Licensed under the MIT License.
      You may not use this file except in compliance with the License.
      You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt
    
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
         * Use this property to determine, if the object is a character data node.
         */
        cdata?: undefined;
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
    export function isDocumentDeclaration(xmlNode: unknown): xmlNode is XMLTag & {
        tag: ['!'];
    };
    export function isXMLDeclaration(xmlNode: unknown): xmlNode is XMLTag & {
        tag: ['?'];
    };
    export function isXMLTag(xmlNode: unknown): xmlNode is XMLTag;
    export default XMLTag;
}
declare module "XMLNode" {
    /*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\
    
      XML TypeScript Library
    
      Copyright (c) TypeScriptLibs and Contributors
    
      Licensed under the MIT License.
      You may not use this file except in compliance with the License.
      You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt
    
    \*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
    import XMLCdata from "XMLCdata";
    import XMLComment from "XMLComment";
    import XMLTag from "XMLTag";
    /**
     * Represents a node in an XML source. This can be either a comment, a tag, or a
     * string.
     */
    export type XMLNode = (string | XMLCdata | XMLComment | XMLTag);
    export function isString(xmlNode: unknown): xmlNode is string;
    export default XMLNode;
}
declare module "XMLCdata" {
    /**
     * Represents an XML character data node.
     */
    export interface XMLCdata {
        /**
         * Text of the character data.
         */
        cdata: string;
        /**
         * Use this property to determine, if the object is a comment node.
         */
        comment?: undefined;
        /**
         * Use this property to determine, if the object is a tag node.
         */
        tag?: undefined;
    }
    export function isXMLCdata(xmlNode: unknown): xmlNode is XMLCdata;
    export default XMLCdata;
}
declare module "XMLPrinter" {
    import XMLNode from "XMLNode";
    /**
     * Print options.
     */
    export interface XMLPrinterOptions {
        /**
         * Disable escaping of XML characters. Requires escaping in node properties
         * to avoid security risks like XML injections.
         */
        noEscaping?: boolean;
        /**
         * Print all XML in one line.
         */
        noLineBreaks?: boolean;
    }
    /**
     * Scans text sources for XML tags.
     */
    export class XMLPrinter {
        constructor(nodes?: Array<XMLNode>, options?: XMLPrinterOptions);
        /**
         * Nodes to print.
         */
        readonly nodes: Array<XMLNode>;
        /**
         * Print options.
         */
        readonly options: XMLPrinterOptions;
        /**
         * Prints XML nodes as a string.
         *
         * @param nodes
         * Node or nodes to print as a string.
         *
         * @param noEscape
         * Disable escaping of XML characters. Requires escaping in node properties
         * to prevent security risks like XML injections.
         *
         * @return
         * XML nodes as a string.
         */
        toString(nodes?: (XMLNode | Array<XMLNode>), noEscape?: boolean): string;
    }
    export default XMLPrinter;
}
declare module "XMLScanner" {
    import XMLNode from "XMLNode";
    /**
     * Scans text sources for XML tags.
     */
    export class XMLScanner {
        constructor(text?: string);
        /**
         * Last tag scan with implicit character data.
         */
        private _cdataTag?;
        /**
         * Index for the next scan.
         */
        private _index?;
        /**
         * Node result of the last scan.
         */
        private _node?;
        /**
         * Maximum size of a scan for XMLNode.
         */
        private _scanSize;
        /**
         * Text to scan.
         */
        private _text;
        /**
         * Tags that contain implicitly character data.  Only the close tag will end
         * the inner text.  Default tags are `script` and `style`.
         */
        readonly cdataTags: Array<string>;
        /**
         * Maximum size during a scan.  This limits the size of XMLNode to the given
         * number of characters.
         */
        get scanSize(): number;
        set scanSize(value: number);
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
declare module "XMLSelector" {
    /*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\
    
      XML TypeScript Library
    
      Copyright (c) TypeScriptLibs and Contributors
    
      Licensed under the MIT License.
      You may not use this file except in compliance with the License.
      You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt
    
    \*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
    import XMLNode from "XMLNode";
    import XMLTag from "XMLTag";
    export interface AttributeTerm {
        attribute: string;
        logic: string;
        value: string;
    }
    export interface SelectorTerm {
        attributes?: Array<AttributeTerm>;
        classes?: Array<string>;
        id?: string;
        tag?: string;
    }
    /**
     * Creates a selector to search in a list of XML nodes.
     */
    export class XMLSelector {
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
        static parse(selectorString: string): (XMLSelector | undefined);
        /**
         * @param selector
         * Selector to match against.
         */
        constructor(selectors: Array<SelectorTerm>);
        containsID?: boolean;
        selectors: Array<SelectorTerm>;
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
        find(nodes: Array<XMLNode>, term: SelectorTerm): (Array<XMLTag> | undefined);
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
        query(nodes: Array<XMLNode>): (Array<XMLTag> | undefined);
    }
    export default XMLSelector;
}
declare module "XMLTree" {
    import XMLNode from "XMLNode";
    import XMLScanner from "XMLScanner";
    import XMLTag from "XMLTag";
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
         * Underlying scanner to process text.  Can be used to access the last
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
         * List of XML nodes matching the selector, or `undefined`.
         */
        query(selector: string): (Array<XMLTag> | undefined);
        /**
         * Converts the tree of nodes back to XML text.
         */
        toString(): string;
    }
    export default XMLTree;
}
declare module "index" {
    /*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\
    
      XML TypeScript Library
    
      Copyright (c) TypeScriptLibs and Contributors
    
      Licensed under the MIT License.
      You may not use this file except in compliance with the License.
      You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt
    
    \*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
    import XMLTree from "XMLTree";
    export * from "Escaping";
    export * from "XMLCdata";
    export * from "XMLComment";
    export * from "XMLNode";
    export * from "XMLPrinter";
    export * from "XMLRegExp";
    export * from "XMLScanner";
    export * from "XMLSelector";
    export * from "XMLTag";
    export * from "XMLTree";
    export default XMLTree;
}
