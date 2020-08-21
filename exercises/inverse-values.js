"use strict";
/*
Given an array of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
You can assume that all values are numbers.

If the argument is an empty array or null, return an empty array.

E.g:
* [1, 2, 3, 4, 5] -> [-1, -2, -3, -4, -5]
* [1, -2, 3, -4, 5] -> [-1, 2, -3, 4, -5]
* [] -> []

Do not mutate the parameter.

*/

// TODO your code:

// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof inverse, "function");
assert.strictEqual(inverse.length, 1);
assert.deepStrictEqual(inverse([]), []);
assert.deepStrictEqual(inverse(null), []);
assert.deepStrictEqual(inverse([0]), [-0]);
assert.deepStrictEqual(inverse([1]), [-1]);
assert.deepStrictEqual(inverse([-1]), [1]);
assert.deepStrictEqual(inverse([1, 2, 3, 4, 5]), [-1, -2, -3, -4, -5]);
assert.deepStrictEqual(inverse([1, -2, 3, -4, 5]), [-1, 2, -3, 4, -5]);
// check parameter mutating
let arg = [1];
let result = inverse(arg);
assert.deepStrictEqual(arg, [1]);
// End of tests
