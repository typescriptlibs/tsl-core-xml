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

import { XMLTree } from 'tsl-core-xml';


/* *
 *
 *  Tests
 *
 * */


test( 'Test XMLTree on Atom RSS', async ( assert: test.Assert ) => {
    const text = await FS.readFile( 'tst-data/nrkno.xml', { encoding: 'utf8' } );
    const xml = new XMLTree( text.match( /<item>.*?<\/item>/su )![0] );

    assert.deepStrictEqual(
        xml.grow(),
        [{
            "tag": "item",
            "innerXML": [{
                "tag": "title",
                "innerXML": [
                    "2022 fra A til Å"
                ]
            }, {
                "tag": "link",
                "innerXML": [
                    "https://www.nrk.no/direkte/xl/2022-fra-a-til-a---vi-oppsummerer-aret-som-har-gatt-1.16218358"
                ]
            }, {
                "tag": "description",
                "innerXML": [
                    "Du vet det har vært et år spekket med snakkiser og øyeblikk når verken Putin eller rekordhøye strømpriser får plass på listen."
                ]
            }, {
                "tag": "pubDate",
                "innerXML": [
                    "Sat, 31 Dec 2022 19:10:52 GMT"
                ]
            }, {
                "tag": "guid",
                "attributes": {
                    "isPermaLink": "false"
                },
                "innerXML": [
                    "1.16218358"
                ]
            }, {
                "tag": "dc:creator",
                "innerXML": [
                    "David Skovly"
                ]
            }, {
                "tag": "dc:date",
                "innerXML": [
                    "2022-12-31T19:10:52Z"
                ]
            }, {
                "tag": "media:content",
                "attributes": {
                    "medium": "image",
                    "type": "image/jpeg",
                    "url": "https://gfx.nrk.no/066T4UeBrmKU_Wio5Vp8wAWDWKACisrYfjEURhs7W4Dg.jpg"
                },
                "innerXML": [{
                    "tag": "media:title",
                    "innerXML": [
                        "Året 2022, fra A til Å"
                    ]
                }]
            }]
        }]
    );

} );
