/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  XML TypeScript Library

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/


/* *
 *
 *  Imports
 *
 * */


import { promises as FS } from 'node:fs';

import test from '@typescriptlibs/tst';

import { XMLPrinter, XMLTree } from 'tsl-core-xml';


/* *
 *
 *  Tests
 *
 * */


test( 'Test XMLPrinter with XMLTree', async ( assert: test.Assert ) => {
    const text = await FS.readFile( 'tst-data/nrkno.xml', { encoding: 'utf8' } );
    const textLine = text.split( /\r?\n/g );
    const xml = new XMLTree( text );

    xml.grow( undefined, true );

    const print = ( new XMLPrinter( xml.roots ) ).toString( undefined, true );
    const printLine = print.split( /\r?\n/g );
    const printXML = new XMLTree( print );

    printXML.grow();

    assert.strictEqual(
        printLine.length,
        textLine.length,
        'Printed XML linebreaks should be equal to original XML linebreaks.'
    );

    let noErrors = true;

    for ( let i = 0, iEnd = printLine.length; i < iEnd; ++i ) {
        if ( printLine[i] !== textLine[i] ) {
            console.error( 'actual', printLine[i] );
            console.error( 'expected', textLine[i] );
            noErrors = false;
        }
    }

    assert.ok(
        noErrors,
        'Printed XML should be equal to original XML.'
    );

} );
