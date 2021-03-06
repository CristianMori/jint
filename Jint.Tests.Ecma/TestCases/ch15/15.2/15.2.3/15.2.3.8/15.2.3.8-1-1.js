/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.8/15.2.3.8-1-1.js
 * @description Object.seal throws TypeError if type of first param is undefined
 */


function testcase() {
        try {
            Object.seal(undefined);
            return false;
        } catch (e) {
            return e instanceof TypeError;
        }
    }
runTestCase(testcase);
