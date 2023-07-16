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

import { escapeXML, unescapeXML } from 'tsl-core-xml';


/* *
 *
 *  Tests
 *
 * */


test( 'Test Escaping escapeXML', async ( assert: test.Assert ) => {

    assert.strictEqual(
        escapeXML( `<?xml version="1.0" encoding='UTF-&' ?>` ),
        '&lt;?xml version=&quot;1.0&quot; encoding=&apos;UTF-&amp;&apos; ?&gt;',
        'Result of escapeXML should escape all 7 XML characters.'
    );

} );


test( 'Test Escaping unescapeXML', async ( assert: test.Assert ) => {

    assert.strictEqual(
        unescapeXML( '&lt;?xml version=&quot;1.0&quot; encoding=&apos;UTF-&amp;&apos; ?&gt;' ),
        `<?xml version="1.0" encoding='UTF-&' ?>`,
        'Result of unescapeXML should unescape all 7 XML entities.'
    );

} );
