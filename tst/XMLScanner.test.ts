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


import { promises as FS } from 'node:fs';

import test from '@typescriptlibs/tst';

import { XMLScanner } from 'tsl-core-xml';


/* *
 *
 *  Tests
 *
 * */


test( 'Test XMLScanner on Atom RSS', async ( assert: test.Assert ) => {
    const text = await FS.readFile( 'tst/xml-files/nrkno.xml', { encoding: 'utf8' } );
    const xml = new XMLScanner( text );

    assert.deepStrictEqual(
        await xml.scan(),
        {
            tag: '?xml',
            empty: true,
            attributes: {
                version: '1.0',
                encoding: 'UTF-8'
            }
        }
    );

    await xml.skip( 1 );

    assert.deepStrictEqual(
        await xml.scan(),
        {
            tag: 'rss',
            attributes: {
                'xmlns:atom': 'http://www.w3.org/2005/Atom',
                'xmlns:dc': 'http://purl.org/dc/elements/1.1/',
                'xmlns:media': 'http://search.yahoo.com/mrss/',
                version: '2.0'
            }
        }
    );

    await xml.skip( 15 );

    assert.deepStrictEqual(
        await xml.scan(),
        {
            tag: 'atom:link',
            empty: true,
            attributes: {
                href: 'https://www.nrk.no/',
                type: 'text/html',
                rel: 'alternate'
            }
        }
    );

    await xml.skip( 30 );

    assert.strictEqual(
        await xml.scan(),
        '2022 fra A til Å'
    );

} );


test( 'Test XMLScanner on XMLComment', async ( assert: test.Assert ) => {
    let xml = new XMLScanner( [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<!DOCTYPE html>',
        '<!---->',
        '<!--3-->',
        '<hr />'
    ].join( '' ) );

    assert.deepStrictEqual(
        await xml.scan(),
        {
            tag: '?xml',
            empty: true,
            attributes: {
                version: '1.0',
                encoding: 'UTF-8'
            }
        },
        'XMLStream should return an XML tag with empty flag and attributes.'
    );

    assert.deepStrictEqual(
        await xml.scan(),
        {
            tag: '!DOCTYPE',
            attributes: {
                html: ''
            }
        },
        'XMLStream should return a DOCTYPE tag with an empty html attribute.'
    );

    assert.deepStrictEqual(
        await xml.scan(),
        {
            comment: ''
        },
        'XMLStream should return an empty comment tag.'
    );

    assert.deepStrictEqual(
        await xml.scan(),
        {
            comment: '3'
        },
        'XMLStream should return a comment tag with a value of 3.'
    );

    assert.deepStrictEqual(
        await xml.scan(),
        {
            tag: 'hr',
            empty: true
        },
        'XMLStream should return a HR tag with empty flag.'
    );

} );
