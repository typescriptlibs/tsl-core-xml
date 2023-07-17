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
    const tree = new XMLTree( text.match( /<item>.*?<\/item>/su )![0] );

    assert.deepStrictEqual(
        tree.grow(),
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


test( 'Test XMLTree on CDATA', async ( assert: test.Assert ) => {
    const tree = new XMLTree( [
        '<script>',
        '<![CDATA[',
        '20<[4]',
        '//]]>',
        '</script>',
    ].join( '' ) );

    assert.deepStrictEqual(
        tree.grow(),
        [{
            "tag": "script",
            "innerXML": [
                "20<[4]//"
            ]
        }],
        'XMLTree should convert CDATA to unescaped string.'
    );

} );


test( 'Test XMLTree on HTML', async ( assert: test.Assert ) => {
    const text = await FS.readFile( 'tst-data/samoyee.html', { encoding: 'utf8' } );
    const tree = new XMLTree( text );

    assert.deepStrictEqual(
        tree.grow(),
        [{
            "tag": "div",
            "innerXML": [{
                "tag": "el-dialog",
                "empty": true,
                "attributes": {
                    ":visible": "visible"
                }
            }, {
                "comment": " test "
            }, {
                "tag": "div",
                "attributes": {
                    "v-if": "show",
                    "class": "clazz",
                    ":class": "myClass",
                    ":visible": "visible",
                    "v-html": "innerHtml",
                    "@click": "\n    show = false\n    name = 'xxx'\n    $refs.input.focus()\n    ",
                    "style": "display: block"
                }
            }, {
                "tag": "div",
                "attributes": {
                    "v-else-if": "show2",
                    ":style": "{ display: 'block', textAlign: show ? 'center' : 'left' }"
                },
                "innerXML": [{
                    "tag": "div",
                    "attributes": {
                        "v-for": "item in list",
                        ":key": "item.id"
                    },
                    "innerXML": [
                        "{{ item.title }}"
                    ]
                }]
            }, {
                "tag": "template",
                "attributes": {
                    "v-else": ""
                },
                "innerXML": [{
                    "tag": "div",
                    "attributes": {
                        "class": "else-clazz",
                        ":class": "{ show }",
                        "@click": "show = false"
                    },
                    "innerXML": [
                        "{{ name }}"
                    ]
                }]
            }, {
                "tag": "input",
                "empty": true,
                "attributes": {
                    "ref": "input",
                    ":value": "name",
                    "class": "input",
                    ":style": "'display:' + (show ? 'block' : 'none')"
                }
            }, {
                "tag": "div",
                "attributes": {
                    "id": "name",
                    "@touch.stop": "",
                    "@click": "\n    () => {\n        show = false\n        $refs.input.focus()\n    }\n    "
                }
            }]
        }]
    );

} );
