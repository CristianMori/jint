// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * String.prototype.concat([,[...]])
 *
 * @path ch15/15.5/15.5.4/15.5.4.6/S15.5.4.6_A1_T7.js
 * @description Call concat([,[...]]) function with undefined argument of string object
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
//since ToString(undefined) evaluates to "undefined" concat(undefined) evaluates to concat("undefined")
if (String("lego").concat(undefined) !== "legoundefined") {
  $ERROR('#1: String("lego").concat(undefined) === "legoundefined". Actual: '+String("lego").concat(undefined) ); 
}
//
//////////////////////////////////////////////////////////////////////////////

