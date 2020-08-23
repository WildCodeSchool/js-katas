"use strict";
/*
Create a function `convert` which converts a positive integer to a binary string.

Example:
* integer: 164, binary: "10100100"

You can't use the Number class nor the toString method.

Hint (only if you're stuck) : https://gist.github.com/bastienwcs/bebab3c43e7390b29159aaa936c35883

Add you own tests.

*/

// TODO your code:

// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof convert, "function");
assert.strictEqual(convert.length, 1);
assert.strictEqual(convert.toString().includes("Number("), false);
assert.strictEqual(convert.toString().includes("toString("), false);
// TODO add your tests:

// End of tests
