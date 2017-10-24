"use strict";
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
Object.defineProperty(exports, "__esModule", { value: true });
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/set';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following to support `@angular/animation`. */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/** Evergreen browsers require these. **/
require("core-js/es6/reflect");
require("core-js/es7/reflect");
/** ALL Firefox browsers require the following to support `@angular/animation`. **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
require("zone.js/dist/zone"); // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */
/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
 */
// import 'intl';  // Run `npm install --save intl`.

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvbHlmaWxscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7O0dBY0c7O0FBRUg7O0dBRUc7QUFFSCxtRUFBbUU7QUFDbkUsK0JBQStCO0FBQy9CLCtCQUErQjtBQUMvQixpQ0FBaUM7QUFDakMsa0NBQWtDO0FBQ2xDLG9DQUFvQztBQUNwQywrQkFBK0I7QUFDL0IsNkJBQTZCO0FBQzdCLCtCQUErQjtBQUMvQiw2QkFBNkI7QUFDN0IsOEJBQThCO0FBQzlCLCtCQUErQjtBQUMvQiw0QkFBNEI7QUFDNUIsNEJBQTRCO0FBRTVCLCtFQUErRTtBQUMvRSxvRUFBb0U7QUFFcEUsNEVBQTRFO0FBQzVFLDhFQUE4RTtBQUc5RSx5Q0FBeUM7QUFDekMsK0JBQTZCO0FBQzdCLCtCQUE2QjtBQUc3QixtRkFBbUY7QUFDbkYsOEVBQThFO0FBSTlFOztHQUVHO0FBQ0gsNkJBQTJCLENBQUUsNkJBQTZCO0FBSTFEOztHQUVHO0FBRUg7OztHQUdHO0FBQ0gsb0RBQW9EIiwiZmlsZSI6InBvbHlmaWxscy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBmaWxlIGluY2x1ZGVzIHBvbHlmaWxscyBuZWVkZWQgYnkgQW5ndWxhciBhbmQgaXMgbG9hZGVkIGJlZm9yZSB0aGUgYXBwLlxuICogWW91IGNhbiBhZGQgeW91ciBvd24gZXh0cmEgcG9seWZpbGxzIHRvIHRoaXMgZmlsZS5cbiAqXG4gKiBUaGlzIGZpbGUgaXMgZGl2aWRlZCBpbnRvIDIgc2VjdGlvbnM6XG4gKiAgIDEuIEJyb3dzZXIgcG9seWZpbGxzLiBUaGVzZSBhcmUgYXBwbGllZCBiZWZvcmUgbG9hZGluZyBab25lSlMgYW5kIGFyZSBzb3J0ZWQgYnkgYnJvd3NlcnMuXG4gKiAgIDIuIEFwcGxpY2F0aW9uIGltcG9ydHMuIEZpbGVzIGltcG9ydGVkIGFmdGVyIFpvbmVKUyB0aGF0IHNob3VsZCBiZSBsb2FkZWQgYmVmb3JlIHlvdXIgbWFpblxuICogICAgICBmaWxlLlxuICpcbiAqIFRoZSBjdXJyZW50IHNldHVwIGlzIGZvciBzby1jYWxsZWQgXCJldmVyZ3JlZW5cIiBicm93c2VyczsgdGhlIGxhc3QgdmVyc2lvbnMgb2YgYnJvd3NlcnMgdGhhdFxuICogYXV0b21hdGljYWxseSB1cGRhdGUgdGhlbXNlbHZlcy4gVGhpcyBpbmNsdWRlcyBTYWZhcmkgPj0gMTAsIENocm9tZSA+PSA1NSAoaW5jbHVkaW5nIE9wZXJhKSxcbiAqIEVkZ2UgPj0gMTMgb24gdGhlIGRlc2t0b3AsIGFuZCBpT1MgMTAgYW5kIENocm9tZSBvbiBtb2JpbGUuXG4gKlxuICogTGVhcm4gbW9yZSBpbiBodHRwczovL2FuZ3VsYXIuaW8vZG9jcy90cy9sYXRlc3QvZ3VpZGUvYnJvd3Nlci1zdXBwb3J0Lmh0bWxcbiAqL1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBCUk9XU0VSIFBPTFlGSUxMU1xuICovXG5cbi8qKiBJRTksIElFMTAgYW5kIElFMTEgcmVxdWlyZXMgYWxsIG9mIHRoZSBmb2xsb3dpbmcgcG9seWZpbGxzLiAqKi9cbi8vIGltcG9ydCAnY29yZS1qcy9lczYvc3ltYm9sJztcbi8vIGltcG9ydCAnY29yZS1qcy9lczYvb2JqZWN0Jztcbi8vIGltcG9ydCAnY29yZS1qcy9lczYvZnVuY3Rpb24nO1xuLy8gaW1wb3J0ICdjb3JlLWpzL2VzNi9wYXJzZS1pbnQnO1xuLy8gaW1wb3J0ICdjb3JlLWpzL2VzNi9wYXJzZS1mbG9hdCc7XG4vLyBpbXBvcnQgJ2NvcmUtanMvZXM2L251bWJlcic7XG4vLyBpbXBvcnQgJ2NvcmUtanMvZXM2L21hdGgnO1xuLy8gaW1wb3J0ICdjb3JlLWpzL2VzNi9zdHJpbmcnO1xuLy8gaW1wb3J0ICdjb3JlLWpzL2VzNi9kYXRlJztcbi8vIGltcG9ydCAnY29yZS1qcy9lczYvYXJyYXknO1xuLy8gaW1wb3J0ICdjb3JlLWpzL2VzNi9yZWdleHAnO1xuLy8gaW1wb3J0ICdjb3JlLWpzL2VzNi9tYXAnO1xuLy8gaW1wb3J0ICdjb3JlLWpzL2VzNi9zZXQnO1xuXG4vKiogSUUxMCBhbmQgSUUxMSByZXF1aXJlcyB0aGUgZm9sbG93aW5nIGZvciBOZ0NsYXNzIHN1cHBvcnQgb24gU1ZHIGVsZW1lbnRzICovXG4vLyBpbXBvcnQgJ2NsYXNzbGlzdC5qcyc7ICAvLyBSdW4gYG5wbSBpbnN0YWxsIC0tc2F2ZSBjbGFzc2xpc3QuanNgLlxuXG4vKiogSUUxMCBhbmQgSUUxMSByZXF1aXJlcyB0aGUgZm9sbG93aW5nIHRvIHN1cHBvcnQgYEBhbmd1bGFyL2FuaW1hdGlvbmAuICovXG4vLyBpbXBvcnQgJ3dlYi1hbmltYXRpb25zLWpzJzsgIC8vIFJ1biBgbnBtIGluc3RhbGwgLS1zYXZlIHdlYi1hbmltYXRpb25zLWpzYC5cblxuXG4vKiogRXZlcmdyZWVuIGJyb3dzZXJzIHJlcXVpcmUgdGhlc2UuICoqL1xuaW1wb3J0ICdjb3JlLWpzL2VzNi9yZWZsZWN0JztcbmltcG9ydCAnY29yZS1qcy9lczcvcmVmbGVjdCc7XG5cblxuLyoqIEFMTCBGaXJlZm94IGJyb3dzZXJzIHJlcXVpcmUgdGhlIGZvbGxvd2luZyB0byBzdXBwb3J0IGBAYW5ndWxhci9hbmltYXRpb25gLiAqKi9cbi8vIGltcG9ydCAnd2ViLWFuaW1hdGlvbnMtanMnOyAgLy8gUnVuIGBucG0gaW5zdGFsbCAtLXNhdmUgd2ViLWFuaW1hdGlvbnMtanNgLlxuXG5cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogWm9uZSBKUyBpcyByZXF1aXJlZCBieSBBbmd1bGFyIGl0c2VsZi5cbiAqL1xuaW1wb3J0ICd6b25lLmpzL2Rpc3Qvem9uZSc7ICAvLyBJbmNsdWRlZCB3aXRoIEFuZ3VsYXIgQ0xJLlxuXG5cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogQVBQTElDQVRJT04gSU1QT1JUU1xuICovXG5cbi8qKlxuICogRGF0ZSwgY3VycmVuY3ksIGRlY2ltYWwgYW5kIHBlcmNlbnQgcGlwZXMuXG4gKiBOZWVkZWQgZm9yOiBBbGwgYnV0IENocm9tZSwgRmlyZWZveCwgRWRnZSwgSUUxMSBhbmQgU2FmYXJpIDEwXG4gKi9cbi8vIGltcG9ydCAnaW50bCc7ICAvLyBSdW4gYG5wbSBpbnN0YWxsIC0tc2F2ZSBpbnRsYC5cbiJdfQ==
