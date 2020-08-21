"use strict";
/*
Create a function `min` which founds the minimum value of a number array.

If the array is empty or null, return null.

*/

// Your code:

// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof min, "function");
assert.strictEqual(min.length, 1);
assert.strictEqual(min.toString().includes("Math.min"), false);
assert.deepStrictEqual(min([]), []);
assert.deepStrictEqual(min(null), []);
assert.deepStrictEqual(min([0]), 0);
assert.deepStrictEqual(min([1]), 1);
assert.deepStrictEqual(min([-1]), -1);
assert.deepStrictEqual(min([0, -1, 1]), -1);
assert.deepStrictEqual(min([-2, -1, -3]), -3);
assert.deepStrictEqual(min([2, 1, 3]), 1);
// End of tests
