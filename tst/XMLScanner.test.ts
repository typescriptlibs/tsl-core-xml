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
    const text = await FS.readFile( 'tst-data/nrkno.xml', { encoding: 'utf8' } );
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
        '<!TEST:TEST.TEST-TEST#ENTITY>',
        '<!---->',
        '<!--3-->',
        '<hr />',
        '<br/>'
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
        'XMLScanner should return an XML tag with empty flag and attributes.'
    );

    assert.deepStrictEqual(
        await xml.scan(),
        {
            tag: '!DOCTYPE',
            attributes: {
                html: ''
            }
        },
        'XMLScanner should return a DOCTYPE tag with an empty html attribute.'
    );

    assert.deepStrictEqual(
        await xml.scan(),
        {
            tag: '!TEST:TEST.TEST-TEST',
            attributes: {
                '#ENTITY': ''
            }
        },
        'XMLScanner should return a TEST tag with an empty #ENTITY attribute.'
    );

    assert.deepStrictEqual(
        await xml.scan(),
        {
            comment: ''
        },
        'XMLScanner should return an empty comment tag.'
    );

    assert.deepStrictEqual(
        await xml.scan(),
        {
            comment: '3'
        },
        'XMLScanner should return a comment tag with a value of 3.'
    );

    assert.deepStrictEqual(
        await xml.scan(),
        {
            tag: 'hr',
            empty: true
        },
        'XMLScanner should return a HR tag with empty flag.'
    );

    assert.deepStrictEqual(
        await xml.scan(),
        {
            tag: 'br',
            empty: true
        },
        'XMLScanner should return a BR tag with empty flag.'
    );

} );


test( 'Test XMLScanner on Incomplete Tag', async ( assert: test.Assert ) => {


    // Scan tag in middle of buffer edge

    let scanner = new XMLScanner( '<br/>'.padStart( 1000003, '<' ) );

    let result = await scanner.scan();
    assert.strictEqual(
        typeof result === 'string' && result.length,
        999998,
        'XMLScanner should return a text string with 999998 characters.'
    );

    result = await scanner.scan();
    assert.deepStrictEqual(
        typeof result === 'object' && result,
        {
            tag: 'br',
            empty: true
        },
        'XMLScanner should return a BR tag with empty flag.'
    );


    // Scan tag right before buffer edge

    scanner = new XMLScanner( '<br />'.padStart( 1000005, '>' ) );

    result = await scanner.scan();
    assert.strictEqual(
        typeof result === 'string' && result.length,
        999999,
        'XMLScanner should return a text string with 999999 characters.'
    );

    result = await scanner.scan();
    assert.deepStrictEqual(
        typeof result === 'object' && result,
        {
            tag: 'br',
            empty: true
        },
        'XMLScanner should return a BR tag with empty flag.'
    );


    // Scan buffer edge without tag

    scanner = new XMLScanner( ''.padEnd( 1000000, '<' ) + '<br/>' );

    result = await scanner.scan();
    assert.strictEqual(
        typeof result === 'string' && result.length,
        999999,
        'XMLScanner should return a text string with 999999 characters.'
    );

    result = await scanner.scan();
    assert.deepStrictEqual(
        typeof result === 'string' && result.length,
        1,
        'XMLScanner should return a text string with 1 character.'
    );

    result = await scanner.scan();
    assert.deepStrictEqual(
        typeof result === 'object' && result,
        {
            tag: 'br',
            empty: true
        },
        'XMLScanner should return a BR tag with empty flag.'
    );


    // Scan attribute right before buffer edge

    scanner = new XMLScanner( ''.padStart( 999990, '<a ' ) + '<a href="abc">' );

    result = await scanner.scan();
    assert.strictEqual(
        typeof result === 'string' && result.length,
        999990,
        'XMLScanner should return a text string with 999990 characters.'
    );

    result = await scanner.scan();
    assert.deepStrictEqual(
        typeof result === 'object' && result,
        {
            tag: 'a',
            attributes: {
                href: 'abc'
            }
        },
        'XMLScanner should return a A tag with href attribute.'
    );


    // Scan maximum size of a tag
    scanner = new XMLScanner( ' <b'.padEnd( 1000000, ' ' ) + '>' );

    result = await scanner.scan();
    assert.strictEqual(
        result,
        ' ',
        'XMLScanner should return a text string with 1 space character.'
    );

    result = await scanner.scan();
    assert.deepStrictEqual(
        typeof result === 'object' && result,
        {
            tag: 'b'
        },
        'XMLScanner should return a B tag.'
    );


    // Scan oversized tag

    scanner = new XMLScanner( ' <b'.padEnd( 1000001, ' ' ) + '>' );

    result = await scanner.scan();
    assert.strictEqual(
        result,
        ' ',
        'XMLScanner should return a text string with 1 space character.'
    );

    result = await scanner.scan();
    assert.strictEqual(
        typeof result === 'string' && result.length,
        1000000,
        'XMLScanner should return oversized tag in two text string. (1)'
    );

    result = await scanner.scan();
    assert.strictEqual(
        result,
        '>',
        'XMLScanner should return oversized tag in two text string. (2)'
    );

} );
