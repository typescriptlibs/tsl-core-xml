/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  XML TypeScript Library

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License; you may not use this file except in
  compliance with the License. You may obtain a copy of the MIT License at
  https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/


/* *
 *
 *  Imports
 *
 * */


import test from '@typescriptlibs/tst';

import {
    XMLNode,
    XMLScanner,
    XMLTree
} from 'tsl-core-xml';


/* *
 *
 *  Tests
 *
 * */


test( 'Test README example for XMLScanner', async ( assert: test.Assert ) => {
    const log: Array<XMLNode> = [];
    const console = {
        log: ( node: XMLNode ) => log.push( node )
    };

    // Example Start

    const scanner = new XMLScanner(
        '<!DOCTYPE html>' +
        '<html lang="en"><head><title>My Webpage</title></head>' +
        '<body style="background:#9CF"><h1>My Webpage</h1><hr /></body></html>'
    );

    let node: ( XMLNode | undefined );

    while ( node = scanner.scan() ) {
        console.log( node );
    }

    // Example End

    assert.deepStrictEqual(
        log,
        [
            { tag: "!DOCTYPE", attributes: { html: "" } },
            { tag: "html", attributes: { lang: "en" } },
            { tag: "head" },
            { tag: "title" },
            "My Webpage",
            { tag: "/title" },
            { tag: "/head" },
            { tag: "body", attributes: { style: "background:#9CF" } },
            { tag: "h1" },
            "My Webpage",
            { tag: "/h1" },
            { tag: "hr", empty: true },
            { tag: "/body" },
            { tag: "/html" }
        ],
        'Example with `console.log` should result in expected array output.'
    );
} );


test( 'Test README example for XMLTree', async ( assert: test.Assert ) => {
    const log: Array<XMLNode> = [];
    const console = {
        log: ( node: XMLNode ) => log.push( node )
    };

    // Example Start

    const tree = new XMLTree(
        '<!DOCTYPE html>' +
        '<html lang="en"><head><title>My Webpage</title></head>' +
        '<body style="background:#9CF"><h1>My Webpage</h1><hr /></body></html>'
    );

    let roots = tree.grow();

    console.log( JSON.stringify( roots, null, '  ' ) );

    // Example End

    assert.deepStrictEqual(
        log,
        [
            '[\n' +
            '  {\n' +
            '    "tag": "!DOCTYPE",\n' +
            '    "attributes": {\n' +
            '      "html": ""\n' +
            '    }\n' +
            '  },\n' +
            '  {\n' +
            '    "tag": "html",\n' +
            '    "attributes": {\n' +
            '      "lang": "en"\n' +
            '    },\n' +
            '    "innerXML": [\n' +
            '      {\n' +
            '        "tag": "head",\n' +
            '        "innerXML": [\n' +
            '          {\n' +
            '            "tag": "title",\n' +
            '            "innerXML": [\n' +
            '              "My Webpage"\n' +
            '            ]\n' +
            '          }\n' +
            '        ]\n' +
            '      },\n' +
            '      {\n' +
            '        "tag": "body",\n' +
            '        "attributes": {\n' +
            '          "style": "background:#9CF"\n' +
            '        },\n' +
            '        "innerXML": [\n' +
            '          {\n' +
            '            "tag": "h1",\n' +
            '            "innerXML": [\n' +
            '              "My Webpage"\n' +
            '            ]\n' +
            '          },\n' +
            '          {\n' +
            '            "tag": "hr",\n' +
            '            "empty": true\n' +
            '          }\n' +
            '        ]\n' +
            '      }\n' +
            '    ]\n' +
            '  }\n' +
            ']'
        ],
        'Example with `console.log` should result in expected JSON output.'
    );
} );
