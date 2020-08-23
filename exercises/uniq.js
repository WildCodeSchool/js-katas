"use strict";
/*
Implement a function `uniq` which takes as input a sequence and returns a sequence in which all duplicate elements following each other have been reduced to one instance.

Example:
* ['a','a','b','b','c','a','b','c'] --> ['a','b','c','a','b','c']

You can't use a loop!

Do not mutate the parameter.

*/

// TODO your code:

// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof uniq, "function");
assert.strictEqual(uniq.length, 1);
assert.strictEqual(uniq.toString().includes("for "), false, "Do not use a loop");
assert.strictEqual(
  uniq.toString().includes("while "),
  false,
  "Do not use a loop"
);
assert.deepStrictEqual(uniq(["a", "a", "b", "b", "c", "a", "b", "c", "c"]), [
  "a",
  "b",
  "c",
  "a",
  "b",
  "c",
]);
assert.deepStrictEqual(uniq(["a", "a", "a", "b", "b", "b", "c", "c", "c"]), [
  "a",
  "b",
  "c",
]);
assert.deepStrictEqual(uniq([]), []);
assert.deepStrictEqual(uniq(["foo"]), ["foo"]);
assert.deepStrictEqual(uniq(["bar", "bar", "bar", "bar", "bar"]), ["bar"]);
assert.deepStrictEqual(uniq([undefined]), [undefined]);
assert.deepStrictEqual(uniq([undefined, "a", "a"]), [undefined, "a"]);
assert.deepStrictEqual(uniq([""]), [""]);
let test = ["a", "a", "b"];
uniq(test);
assert.deepStrictEqual(test, ["a", "a", "b"], "Do not mutate the parameter");

// End of tests
