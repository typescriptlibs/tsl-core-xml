XML TypeScript Library
======================

This package provides simple ways to parse any XML-like text.



[![CodeQL](https://github.com/typescriptlibs/tsl-core-xml/workflows/CodeQL/badge.svg)](https://github.com/typescriptlibs/tsl-core-xml/actions/workflows/codeql.yml)
[![Node.js](https://github.com/typescriptlibs/tsl-core-xml/workflows/Node.js/badge.svg)](https://github.com/typescriptlibs/tsl-core-xml/actions/workflows/node.js.yml)
[![NPM](https://img.shields.io/npm/v/tsl-core-xml.svg)](https://www.npmjs.com/package/tsl-core-xml)
[![License](https://img.shields.io/npm/l/tsl-core-xml.svg)](https://github.com/typescriptlibs/tsl-core-xml/blob/main/LICENSE.md)



Table of Content
----------------

- [XMLTree](#xmltree)
- [XMLTree Example](#xmltree-example)
- [XMLScanner](#xmlscanner)
- [XMLScanner Example](#xmlscanner-example)
- [Types of XML Nodes](#types-of-xml-nodes)
- [XMLPrinter Example](#xmlprinter-example)



XMLTree
-------


The XML tree, often also called the DOM (Document Object Model), is the natural
representation of XML. The `XMLTree` class can have multiple root nodes in the
`XMLTree.roots` property.

Usually the last root is the one that contains most data. Or you check each root
if it is a tag by using the `isXMLTag` helper function. Afterwards you can check
the `XMLTag.innerXML` property for child nodes.

You can also use the `XMLTag.query` function to extract XML nodes with the help
of selectors as known from CSS. It depends on the selector and use case whether
this is faster than a custom walk through the tree nodes.

The `XMLTree` uses the `XMLScanner`, which is available via the
`XMLTree.scanner` property. There you can adjust the `XMLScanner.cdataTags`
property or the `XMLScanner.scanSize` property for special use cases.



XMLTree Example
---------------

``` TypeScript
const tree = XMLTree.parse(
    '<!DOCTYPE html>' +
    '<html lang="en"><head><title>My Webpage</title></head>' +
    '<body style="background:#9CF"><h1>My Webpage</h1><hr /></body></html>'
);

console.log( JSON.stringify( tree.query('body h1') );
console.log( JSON.stringify( tree.roots, null, '  ' ) );
```
``` JSON
{
  "tag": "h1",
  "innerXML": [
    "My Webpage"
  ]
}
```
``` JSON
[{
  "tag": "!DOCTYPE",
  "attributes": {
    "html": ""
  }
}, {
  "tag": "html",
  "attributes": {
    "lang": "en"
  }
  "innerXML": [{
    "tag": "head",
    "innerXML": [{
      "tag": "title",
      "innerXML": [
        "My Webpage"
      ]
    }]
  }, {
    "tag": "body",
    "attributes": {
      "style": "background:#9CF"
    },
    "innerXML": [{
      "tag": "h1",
      "innerXML": [
        "My Webpage"
      ]
    }, {
      "tag": "hr",
      "empty": true
    }]
  }]
}]
```



XMLScanner
----------

If XML should be read exactly like it is written, the `XMLScanner` is the class
to use. It keeps every linebreak and every variant of a closing tag. The only
things not preserved by the scanner are the surrounding quote characters for
attribute values.

If you expect text between XML tags or an XML tag itself to be larger than 1 MB,
then you should increase the value of the `XMLScanner.scanSize` property
accordingly. If you like to save memory during a scan, you can also decrease the
scan size.



XMLScanner Example
------------------

``` TypeScript
const scanner = new XMLScanner(
    '<!DOCTYPE html>' +
    '<html lang="en"><head><title>My Webpage</title></head>' +
    '<body style="background:#9CF"><h1>My Webpage</h1><hr /></body></html>'
);

let node: ( XMLNode | undefined );

while ( node = scanner.scan() ) {
    console.log( node );
}
```
``` JavaScript
{ tag: "!DOCTYPE", attributes: { html: "" } }
{ tag: "html", attributes: { lang: "en" } }
{ tag: "head" }
{ tag: "title" }
"My Webpage"
{ tag: "/title" }
{ tag: "/head" }
{ tag: "body", attributes: { style: "background:#9CF" } }
{ tag: "h1" }
"My Webpage"
{ tag: "/h1" }
{ tag: "hr", empty: true }
{ tag: "/body" }
{ tag: "/html" }
```



Types of XML Nodes
------------------

XML has 7 different types of nodes.

- `string`: Text strings are the regular escaped text between tags. Use the
  `isString` helper function to test for this node type.

- `XMLCdata`: Character data is unescaped text, that contains raw data like
  JavaScript. Use the `isXMLCdata` helper function to test for this node type.

- `XMLComment`: A comment is a special form of tag, that has not impact on the
  content of the XML. Use the `isXMLComment` helper function to test for this
  node type.

- `XMLTag`: Tags are nodes with a name and attributes. Use the `isXMLTag` helper
  function to test for this node type. There exists 4 subtypes of tags.

  - Empty Tag: This tag is self-closing and has the `XMLTag.empty` property set
    to `true`. Typical empty tags are `img`, `meta`, and `path`.

  - Regular Tag: This tag often contains child nodes in the `XMLTag.innerXML`
    property. Typical regular tags are `a`, `p`, and `text`.

  - Document Type Definition: This tag is similar to a regular tag, but has a
    name starting with a `!` character. A typical definition tag is `!DOCTYPE`.

  - Processing Instruction: This tag is similar to an empty tag, but has a name
    starting with a `?` character. A typical instruction tag is `?xml`.




XMLPrinter Example
------------------

``` TypeScript
const printer = new XMLPrinter( [
    { tag: "!DOCTYPE", attributes: { html: "" } },
    { tag: "html", attributes: { lang: "en" } }
]);

console.log( printer.toString() );
```
``` HTML
<!DOCTYPE html=""><html></html>
```
