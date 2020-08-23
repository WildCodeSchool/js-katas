"use strict";
/*
Create a function `convert` which, given a binary string representation of a number, returns its decimal value.

If the argument is null or empty, or if a digit isn't 1 or 0, throw an Error with the message "Illegal binary string".

Here's the numbers 0 to 9 represented as base 2 (binary):

   "0"	0
   "1"	1
  "10"	2
  "11"	3
 "100"	4
 "101"	5
 "110"	6
 "111"	7
"1000"	8
"1001"	9

You can't use the function parseInt.

Add you own tests.

*/

// TODO your code:

// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof convert, "function");
assert.strictEqual(convert.length, 1);
assert.strictEqual(convert.toString().includes("parseInt"), false);
// TODO add your tests:

// End of tests
