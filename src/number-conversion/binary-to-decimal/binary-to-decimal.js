/*
Create a function `convert` which, given a binary string representation of a number, returns its decimal value.

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

Bonus:
* if the argument isn't a string, throw a TypeError with the message "Illegal argument"
* if the argument is an empty string, or if a digit isn't 1 or 0, throw an Error with the message "Illegal binary string"

*/

// TODO add your code here

// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof convert, "function");
assert.strictEqual(convert.length, 1);
assert.strictEqual(
  convert.toString().includes("parseInt"),
  false,
  "don't use parseInt()"
);
// TODO add your tests:

// Bonus: exceptions
/*
assert.throws(() => {
  convert(1);
}, /^TypeError: Illegal argument$/);
assert.throws(() => {
  convert("");
}, /^Error: Illegal binary string$/);
assert.throws(() => {
  convert("01A1");
}, /^Error: Illegal binary string$/);
*/
// End of tests
