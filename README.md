XML TypeScript Library
======================

This package provides simple ways to parse any XML-like text.



[![CodeQL](https://github.com/typescriptlibs/tsl-core-xml/workflows/CodeQL/badge.svg)](https://github.com/typescriptlibs/tsl-core-xml/actions/workflows/codeql.yml)
[![Node.js](https://github.com/typescriptlibs/tsl-core-xml/workflows/Node.js/badge.svg)](https://github.com/typescriptlibs/tsl-core-xml/actions/workflows/node.js.yml)
[![NPM](https://img.shields.io/npm/v/tsl-core-xml.svg)](https://www.npmjs.com/package/tsl-core-xml)
[![License](https://img.shields.io/npm/l/tsl-core-xml.svg)](https://github.com/typescriptlibs/tsl-core-xml/blob/main/LICENSE.md)



Examples
--------


### XMLScanner

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


### XMLTree

``` TypeScript
const tree = new XMLTree(
    '<!DOCTYPE html>' +
    '<html lang="en"><head><title>My Webpage</title></head>' +
    '<body style="background:#9CF"><h1>My Webpage</h1><hr /></body></html>'
);

let roots = tree.grow();

console.log( JSON.stringify( roots, null, '  ' ) );
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
