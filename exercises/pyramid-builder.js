"use strict";
/*
Create a function `build` which returns a pyramid of `n` floors, from top to bottom, stored in a string array.

E.g :

n = 5 :
[
    "    *    ",
    "   ***   ",
    "  *****  ",
    " ******* ",
    "*********"
]

If `n` is zero, negative, null or not a number, return an empty array.

*/

// TODO your code:

// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof build, "function");
assert.strictEqual(build.length, 1);
assert.deepStrictEqual(build(0), []);
assert.deepStrictEqual(build(-1), []);
assert.deepStrictEqual(build(null), []);
assert.deepStrictEqual(build("a"), []);
assert.deepStrictEqual(build(1), ["*"]);
assert.deepStrictEqual(build(2), [" * ", "***"]);
assert.deepStrictEqual(build(5), [
  "    *    ",
  "   ***   ",
  "  *****  ",
  " ******* ",
  "*********",
]);
// End of tests
