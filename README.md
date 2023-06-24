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
const xml = new XMLScanner(
    '<!DOCTYPE html>',
    '<html lang="en"><head><title>My Webpage</title></head>'
    '<body style="background:#9CF"><h1>My Webpage</h1><hr /></body></html>';
);

await xml.open();

console.log(await xml.scan()); // { tag: "!DOCTYPE", attributes: { html: "" } }
console.log(await xml.scan()); // { tag: "html", attributes: { lang: "en" } }
console.log(await xml.scan()); // { tag: "head" }
console.log(await xml.scan()); // { tag: "title" }
console.log(await xml.scan()); // "My Webpage"
console.log(await xml.scan()); // { tag: "/title" }
console.log(await xml.scan()); // { tag: "/head" }
console.log(await xml.scan()); // { tag: "body", attributes: { style: "background:#9CF" } }
console.log(await xml.scan()); // { tag: "h1" }
console.log(await xml.scan()); // "My Webpage"
console.log(await xml.scan()); // { tag: "/h1" }
console.log(await xml.scan()); // { tag: "/body" }
console.log(await xml.scan()); // { tag: "hr", empty: true }
console.log(await xml.scan()); // { tag: "/html" }

await xml.close();
```
