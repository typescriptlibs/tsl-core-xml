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

import { XMLRegExp } from 'tsl-core-xml';


/* *
 *
 *  Tests
 *
 * */


test( 'Test XMLRegExp.Comment ReDOS limitations', async ( assert: test.Assert ) => {

    const text = '<!--'.padEnd( 1000004, '<!--a' ) + '-->';

    // Positive: Excessive repitition of `<!--a` after `<!--`.

    let timestamp = Date.now();

    assert.ok(
        text.match( XMLRegExp.Comment )![0].length < 10,
        'Regular expression for comment should not match whole text, because of quantify limitations. (#2)'
    );

    assert.ok(
        ( Date.now() - timestamp ) < 10,
        'Comment processing should not take much time. (#2)'
    );

} );
