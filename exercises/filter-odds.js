"use strict";
/*
Create a function `filterOdds` which filter value of a number array and only keep odds.

You can't use a loop!

Do not mutate the parameter.

*/

// TODO your code:

// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof filterOdds, "function");
assert.strictEqual(filterOdds.length, 1);
assert.strictEqual(
  filterOdds.toString().includes("for"),
  false,
  "Do not use a loop"
);
assert.strictEqual(
  filterOdds.toString().includes("while"),
  false,
  "Do not use a loop"
);
assert.deepStrictEqual(filterOdds([1, 2, 3, 4]), [1, 3]);
assert.deepStrictEqual(filterOdds([10, 20]), []);
assert.deepStrictEqual(filterOdds([]), []);
let nums = [6, 7];
filterOdds(nums);
assert.deepStrictEqual(nums, [6, 7], "Do not mutate the parameter");

// End of tests
