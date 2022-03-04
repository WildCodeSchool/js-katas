/*
Run-length encoding (RLE) is a very simple form of lossless data compression, in which same consecutive elements are stored as a single data value and count.

Create a function `encode` that implements a RLE of a string. If a character is present only once or twice consecutively, you must not compress it.

Example:
* "a" -> "a"
* "aa" -> "aa"
* "aaa" -> "a3"
* "aaaabbccca" -> "a4bbc3a"

If the argument is null, return an empty string.
If the argument is not a string, throw a TypeError.

Add you own tests.

*/

// TODO add your code here

// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof encode, "function");
assert.strictEqual(encode.length, 1);
// TODO add your tests:

// End of tests
