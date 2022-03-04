/*
Create the function pow, where you need to call pow(n, e) recursively.

2⁰ = 1
2¹ = 2 = 2 * 2⁰
2² = 2 * 2 = 2¹ * 2
2³ = 2 * 2 * 2 = 2² * 2
2⁴ ...

This function must be recursive: you can't use a loop.

You can't use Math.pow().

Add you own tests.

*/

// TODO add your code here

// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof pow, "function");
assert.strictEqual(pow.length, 2);
assert.strictEqual(
  pow.toString().includes("Math.pow"),
  false,
  "don't use Math.pow()"
);
assert.strictEqual(pow.toString().includes("for "), false, "don't use a loop");
assert.strictEqual(
  pow.toString().includes("while "),
  false,
  "don't use a loop"
);
assert.strictEqual(
  pow.toString().includes("pow("),
  true,
  "pow must be recursive"
);
// TODO add your tests:

// End of tests
