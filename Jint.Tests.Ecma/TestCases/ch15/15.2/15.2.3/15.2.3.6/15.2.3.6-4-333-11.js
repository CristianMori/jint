/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-333-11.js
 * @description ES5 Attributes - indexed property 'P' with attributes [[Writable]]: true, [[Enumerable]]: true, [[Configurable]]: false is writable using simple assignment, 'O' is an Arguments object
 */


function testcase() {
        var obj = (function (x) {
            return arguments;
        }(1001));

        Object.defineProperty(obj, "0", {
            value: 2010,
            writable: true,
            enumerable: true,
            configurable: false
        });
        var verifyValue = (obj[0] === 2010);

        return verifyValue;
    }
runTestCase(testcase);
