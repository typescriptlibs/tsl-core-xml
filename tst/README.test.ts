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

import { XMLNode, XMLScanner } from 'tsl-core-xml';


/* *
 *
 *  Tests
 *
 * */


test( 'Test README example', async ( assert: test.Assert ) => {
    const log: Array<XMLNode> = [];
    const console = {
        log: ( node: XMLNode ) => log.push( node )
    };

    // Start Example

    const xml = new XMLScanner(
        '<!DOCTYPE html>' +
        '<html lang="en"><head><title>My Webpage</title></head>' +
        '<body style="background:#9CF"><h1>My Webpage</h1><hr /></body></html>'
    );

    let node: ( XMLNode | undefined );

    while ( node = xml.scan() ) {
        console.log( node );
    }

    // End Example

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
        'Console.log should result in expected output.'
    );
} );
