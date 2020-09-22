/*
Create a function `convert` which, given a binary string representation of a number, returns its decimal value.

If the argument is null or empty, not a string or if a digit isn't 1 or 0, throw an Error with the message "Illegal binary string".

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

Hint (only if you're stuck) : https://gist.github.com/bastienwcs/bebab3c43e7390b29159aaa936c35883

Add you own tests.

*/

// TODO your code:

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

// End of tests
