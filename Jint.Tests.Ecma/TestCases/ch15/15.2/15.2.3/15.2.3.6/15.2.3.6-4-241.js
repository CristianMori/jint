/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-241.js
 * @description Object.defineProperty - 'O' is an Array, 'name' is an array index named property, TypeError is thrown if  'name' is data property, and'desc' is accessor descriptor, and the [[Configurable]] attribute value of 'name' is false (15.4.5.1 step 4.c)
 */


function testcase() {

        var arrObj = [];

        Object.defineProperty(arrObj, "1", {
            value: 3,
            configurable: false
        });

        try {
            Object.defineProperty(arrObj, "1", {
                set: function () { }
            });
            return false;

        } catch (e) {
            return e instanceof TypeError && dataPropertyAttributesAreCorrect(arrObj, "1", 3, false, false, false);
        }
    }
runTestCase(testcase);
