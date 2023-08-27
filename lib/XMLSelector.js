/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  XML TypeScript Library

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License; you may not use this file except in
  compliance with the License. You may obtain a copy of the MIT License at
  https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
import XMLRegExp from './XMLRegExp.js';
import { isXMLTag } from './XMLTag.js';
/* *
 *
 *  Constants
 *
 * */
const pipeRegExp = /\|+/gsu;
const pointRegExp = /\.+/gsu;
const spaceRegExp = /\s+/gsu;
/* *
 *
 *  Functions
 *
 * */
function matchAttributes(attributes, attributeTerms = []) {
    if (!attributes) {
        return attributeTerms.length === 0;
    }
    let value;
    let termValue;
    for (const attributeTerm of attributeTerms) {
        value = (attributes[attributeTerm.attribute] || '');
        termValue = attributeTerm.value;
        switch (attributeTerm.logic) {
            case '=':
                if (value === termValue) {
                    continue;
                }
            case '~=':
                if (matchClasses(value, [termValue])) {
                    continue;
                }
            case '|=':
                if (value === termValue ||
                    value.startsWith(termValue + '-')) {
                    continue;
                }
            case '^=':
                if (value.startsWith(termValue)) {
                    continue;
                }
            case '$=':
                if (value.endsWith(termValue)) {
                    continue;
                }
            case '*=':
                if (value.includes(termValue)) {
                    continue;
                }
            default:
                return false;
        }
    }
    return true;
}
function matchClasses(classValue, classNeedles = []) {
    if (!classValue) {
        return classNeedles.length === 0;
    }
    const classes = classValue.split(spaceRegExp);
    for (let i = 0, iEnd = classNeedles.length; i < iEnd; ++i) {
        if (!classes.includes(classNeedles[i])) {
            return false;
        }
    }
    return true;
}
/* *
 *
 *  Class
 *
 * */
/**
 * Creates a selector to search in a list of XML nodes.
 */
export class XMLSelector {
    /* *
     *
     *  Static Functions
     *
     * */
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
    static parse(selectorString) {
        const selectorsStrings = selectorString.split(spaceRegExp);
        const selectors = [];
        const selector = new XMLSelector(selectors);
        let match;
        let terms;
        for (let i = 0, iEnd = selectorsStrings.length; i < iEnd; ++i) {
            match = selectorsStrings[i].match(XMLRegExp.selector);
            if (!match) {
                continue;
            }
            if (match[0] !== selectorsStrings[i]) {
                return;
            }
            terms = {};
            // Tag name
            if (match[1] &&
                match[1] !== '*') {
                terms.tag = match[1].replace(pipeRegExp, ':');
            }
            // ID attribute
            if (match[2]) {
                terms.id = match[2].substring(1);
            }
            // Class attribute
            if (match[3]) {
                const classesStrings = match[3].split(pointRegExp);
                const classes = [];
                for (let j = 0, jEnd = classesStrings.length; j < jEnd; ++j) {
                    if (classesStrings[j]) {
                        classes.push(classesStrings[j]);
                    }
                }
                terms.classes = classes;
            }
            // Regular attributes
            if (match[4]) {
                const attributes = [];
                const scanner = new RegExp(XMLRegExp.attributeSelector.source, XMLRegExp.attributeSelector.flags);
                let matchAttribute;
                while (matchAttribute = scanner.exec(match[4])) {
                    attributes.push({
                        attribute: matchAttribute[1].replace(pipeRegExp, ':'),
                        logic: matchAttribute[2],
                        value: matchAttribute[3]
                    });
                }
                terms.attributes = attributes;
            }
            // Add
            if (Object.keys(terms).length) {
                selectors.push(terms);
            }
        }
        return selector;
    }
    /* *
     *
     *  Constructor
     *
     * */
    /**
     * @param selector
     * Selector to match against.
     */
    constructor(selectors) {
        this.selectors = selectors;
    }
    /* *
     *
     *  Functions
     *
     * */
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
    find(nodes, term) {
        var _a, _b;
        const findings = [];
        for (const node of nodes) {
            // Ignore non-tag nodes
            if (!isXMLTag(node)) {
                continue;
            }
            // Check for direct match
            if ((node.tag === term.tag ||
                term.tag === '*') &&
                (!term.id ||
                    ((_a = node.attributes) === null || _a === void 0 ? void 0 : _a.id) === term.id) &&
                matchClasses((_b = node.attributes) === null || _b === void 0 ? void 0 : _b['class'], term.classes) &&
                matchAttributes(node.attributes, term.attributes)) {
                findings.push(node);
            }
            // Continue with search in inner XML nodes
            else if (node.innerXML) {
                const subFindings = this.find(node.innerXML, term);
                if (subFindings) {
                    for (const subFinding of subFindings) {
                        findings.push(subFinding);
                    }
                }
            }
        }
        if (findings.length) {
            return findings;
        }
    }
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
    query(nodes) {
        const selectors = this.selectors;
        let findings;
        for (let i = 0, iEnd = selectors.length; i < iEnd; ++i) {
            findings = this.find(nodes, selectors[i]);
            if (!findings) {
                return;
            }
            nodes = findings;
        }
        return findings;
    }
}
/* *
 *
 *  Default Export
 *
 * */
export default XMLSelector;
