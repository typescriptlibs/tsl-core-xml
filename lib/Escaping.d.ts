/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  XML TypeScript Library

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
export declare function escapeXML(str: string): string;
export declare function sanitizeTag(str: string): string;
export declare function sanitizeXML(str: string): string;
export declare function unescapeXML(str: string): string;
declare const _default: {
    escapeXML: typeof escapeXML;
    sanitizeTag: typeof sanitizeTag;
    sanitizeXML: typeof sanitizeXML;
    unescapeXML: typeof unescapeXML;
};
export default _default;
