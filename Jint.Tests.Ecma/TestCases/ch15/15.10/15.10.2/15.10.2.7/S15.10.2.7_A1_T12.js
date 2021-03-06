// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * The production QuantifierPrefix :: { DecimalDigits , DecimalDigits } evaluates as ...
 *
 * @path ch15/15.10/15.10.2/15.10.2.7/S15.10.2.7_A1_T12.js
 * @description Execute /.{0,93}/.exec("weirwerdf") and check results
 */

__executed = /.{0,93}/.exec("weirwerdf");

__expected = ["weirwerdf"];
__expected.index = 0;
__expected.input = "weirwerdf";

//CHECK#1
if (__executed.length !== __expected.length) {
	$ERROR('#1: __executed = /.{0,93}/.exec("weirwerdf"); __executed.length === ' + __expected.length + '. Actual: ' + __executed.length);
}

//CHECK#2
if (__executed.index !== __expected.index) {
	$ERROR('#2: __executed = /.{0,93}/.exec("weirwerdf"); __executed.index === ' + __expected.index + '. Actual: ' + __executed.index);
}

//CHECK#3
if (__executed.input !== __expected.input) {
	$ERROR('#3: __executed = /.{0,93}/.exec("weirwerdf"); __executed.input === ' + __expected.input + '. Actual: ' + __executed.input);
}

//CHECK#4
for(var index=0; index<__expected.length; index++) {
	if (__executed[index] !== __expected[index]) {
		$ERROR('#4: __executed = /.{0,93}/.exec("weirwerdf"); __executed[' + index + '] === ' + __expected[index] + '. Actual: ' + __executed[index]);
	}
}


