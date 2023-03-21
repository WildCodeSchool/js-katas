/*
Create a function `min` which returns the lowest-valued of the two numbers passed into it,
or NaN if any parameter isn't a number.

* min(0, 0) -> 0
* min(0, 1) -> 0
* min(-1, 0) -> -1
* min("tacos", 0) -> NaN
* min() -> NaN

You can't use Math.min(), the goal is to recreate this function!

*/

// TODO add your code here

// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof min, "function");
assert.strictEqual(min.length, 2);
assert.strictEqual(min(0, 0), 0);
assert.strictEqual(min(0, 1), 0);
assert.strictEqual(min(-1, 0), -1);
assert.strictEqual(min("tacos", 0), NaN);
assert.strictEqual(min(), NaN);
// End of tests

console.log("🎉");
