/*
Create a function `multiply`, which multiply two numbers (positive or negative), using recursion.

You can't use the * operator.

This function must be recursive: you can't use a loop.

*/

// TODO add your code here

// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof multiply, "function");
assert.strictEqual(multiply.length, 2);
assert.strictEqual(
  multiply.toString().includes("*"),
  false,
  "don't use the * operator"
);
assert.strictEqual(
  multiply.toString().includes("for "),
  false,
  "don't use a loop"
);
assert.strictEqual(
  multiply.toString().includes("while "),
  false,
  "don't use a loop"
);
assert.strictEqual(
  multiply.toString().includes("multiply("),
  true,
  "multiply must be recursive"
);
assert.strictEqual(multiply(0, 0), 0);
assert.strictEqual(multiply(0, 1), 0);
assert.strictEqual(multiply(1, 0), 0);
assert.strictEqual(multiply(1, 1), 1);
assert.strictEqual(multiply(1, -1), -1);
assert.strictEqual(multiply(-1, 1), -1);
assert.strictEqual(multiply(-1, -1), 1);
assert.strictEqual(multiply(2, 3), 6);
assert.strictEqual(multiply(4, 2), 8);

// End of tests
