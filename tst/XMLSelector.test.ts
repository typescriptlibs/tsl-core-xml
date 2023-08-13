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

import { XMLSelector } from 'tsl-core-xml';


/* *
 *
 *  Tests
 *
 * */


test( 'Test XMLSelector parse', async ( assert: test.Assert ) => {
    const selector = XMLSelector.parse( 'rss[xmlns|atom=http://www.w3.org/2005/Atom][version=2.0] channel#news item.a.b.c' );

    assert.ok( selector );

    assert.deepStrictEqual(
        selector.selectors,
        [
            {
                attributes: [{
                    attribute: 'xmlns:atom',
                    logic: '=',
                    value: 'http://www.w3.org/2005/Atom'
                }, {
                    attribute: 'version',
                    logic: '=',
                    value: '2.0'
                }],
                tag: 'rss'
            },
            {
                id: 'news',
                tag: 'channel'
            },
            {
                classes: ['a', 'b', 'c'],
                tag: 'item'
            }
        ]
    );

} );
