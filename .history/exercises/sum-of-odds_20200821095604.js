"use strict";
/*
Create a function `sum` which returns the sum of all odd values contained in a number array.

If the array is empty or null, return zero.

*/

// Your code:

// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof sum, "function");
assert.strictEqual(sum.length, 1);
assert.strictEqual(sum([]), 0);
assert.strictEqual(sum(null), 0);
assert.strictEqual(sum([1]), 1);
assert.strictEqual(sum([2]), 0);
assert.strictEqual(sum([1, 2, 3]), 4);
assert.strictEqual(sum([-3, 3]), 0);
// End of tests
