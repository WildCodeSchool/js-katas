"use strict";
/*
Create a function `min` which founds the minimum value of a number array.

If the array is empty or null, return null.

E.g:
* [1, 2, 3] -> 1
* [3, -2, 1] -> -2
* [] -> null

*/

// TODO your code:

// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof min, "function");
assert.strictEqual(min.length, 1);
assert.strictEqual(min.toString().includes("Math.min"), false);
assert.strictEqual(min([]), null);
assert.strictEqual(min(null), null);
assert.strictEqual(min([0]), 0);
assert.strictEqual(min([1]), 1);
assert.strictEqual(min([-1]), -1);
assert.strictEqual(min([0, -1, 1]), -1);
assert.strictEqual(min([-2, -1, -3]), -3);
assert.strictEqual(min([2, 1, 3]), 1);
// End of tests
