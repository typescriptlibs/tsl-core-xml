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

import { isXMLTag, XMLSelector, XMLNode, XMLTag, XMLTree } from 'tsl-core-xml';


/* *
 *
 *  Tests
 *
 * */


test( 'Test XMLSelector parse', async ( assert: test.Assert ) => {
    let selector = XMLSelector.parse( 'rss[xmlns|atom=http://www.w3.org/2005/Atom][version=2.0] channel#news item.a.b.c' );

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

    selector = XMLSelector.parse( 'template div.else-clazz[@click$=true]' );

    assert.ok( selector );

    assert.deepStrictEqual(
        selector.selectors,
        [{
            tag: 'template'
        },
        {
            attributes: [{
                attribute: '@click',
                logic: '$=',
                value: 'true'
            }],
            classes: [
                'else-clazz'
            ],
            tag: 'div'
        }]
    );

} );


test( 'Test XMLSelector find', async ( assert: test.Assert ) => {
    const text = await FS.readFile( 'tst-data/samoyee.html', { encoding: 'utf8' } );
    const tree = new XMLTree( text );

    tree.grow();

    let selector = XMLSelector.parse( 'div#idee.clazz[|class~=myClass][v-html=innerHtml]' );

    assert.ok( selector );

    let selectorTerm = selector.selectors[0];

    assert.deepStrictEqual(
        selectorTerm,
        {
            attributes: [{
                attribute: ':class',
                logic: '~=',
                value: 'myClass'
            }, {
                attribute: 'v-html',
                logic: '=',
                value: 'innerHtml'
            }],
            classes: [
                'clazz'
            ],
            id: 'idee',
            tag: 'div'
        }
    );

    assert.deepStrictEqual(
        selector.find( tree.roots, selectorTerm ),
        [{
            attributes: {
                ':class': 'myClass',
                ':visible': 'visible',
                '@click': "\n    show = false\n    name = 'xxx'\n    $refs.input.focus()\n    ",
                'v-html': 'innerHtml',
                'v-if': 'show',
                class: 'clazz',
                id: 'idee',
                style: 'display: block'
            },
            tag: 'div'
        }]
    );

    selector = XMLSelector.parse( 'div#idee.clazz[|class~=myClass][|visible=hidden]' );

    assert.ok( selector );

    selectorTerm = selector.selectors[0];

    assert.deepStrictEqual(
        selectorTerm,
        {
            attributes: [{
                attribute: ':class',
                logic: '~=',
                value: 'myClass'
            }, {
                attribute: ':visible',
                logic: '=',
                value: 'hidden'
            }],
            classes: [
                'clazz'
            ],
            id: 'idee',
            tag: 'div'
        }
    );

    assert.deepStrictEqual(
        selector.find( tree.roots, selectorTerm ),
        undefined
    );

} );


test( 'Test XMLSelector query', async ( assert: test.Assert ) => {
    const text = await FS.readFile( 'tst-data/nrkno.xml', { encoding: 'utf8' } );
    const tree = new XMLTree( text );

    tree.grow();

    const expected: Array<XMLNode> = [];
    const selector = XMLSelector.parse( 'channel item title' );

    for ( const item of ( tree.roots[1] as any ).innerXML[0].innerXML ) {
        if ( isXMLTag( item ) && item.tag === 'item' && item.innerXML ) {
            expected.push( item.innerXML[0] );
        }
    }

    assert.ok( selector );

    assert.deepStrictEqual(
        selector.query( tree.roots ),
        expected
    );

} );
