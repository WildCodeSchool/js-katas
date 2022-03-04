/*
Create a function `facto` which calculate the factorial n! of a number n.

0! = 1
1! = 1 = 1 * 0!
2! = 2 * 1 = 2 * 1!
3! = 3 * 2 * 1 = 3 * 2!
4! ...

This function must be recursive: you can't use a loop.

Add you own tests.

*/

// TODO add your code here

// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof facto, "function");
assert.strictEqual(facto.length, 1);
assert.strictEqual(
  facto.toString().includes("for "),
  false,
  "don't use a loop"
);
assert.strictEqual(
  facto.toString().includes("while "),
  false,
  "don't use a loop"
);
assert.strictEqual(
  facto.toString().includes("facto("),
  true,
  "facto must be recursive"
);
// TODO add your tests:

// End of tests
