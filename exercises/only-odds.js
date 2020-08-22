"use strict";
/*
Create a function `onlyOdds` which only keep odd values from an array passed as an argument.

You can't use a loop!

Do not mutate the parameter.

*/

// TODO your code:

// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof onlyOdds, "function");
assert.strictEqual(onlyOdds.length, 1);
assert.strictEqual(
  onlyOdds.toString().includes("for"),
  false,
  "Do not use a loop"
);
assert.strictEqual(
  onlyOdds.toString().includes("while"),
  false,
  "Do not use a loop"
);
assert.deepStrictEqual(onlyOdds([1, 2, 3, 4]), [1, 3]);
assert.deepStrictEqual(onlyOdds([10, 20]), []);
assert.deepStrictEqual(onlyOdds([]), []);
let nums = [6, 7];
onlyOdds(nums);
assert.deepStrictEqual(nums, [6, 7], "Do not mutate the parameter");

// End of tests
