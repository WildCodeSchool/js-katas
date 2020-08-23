"use strict";
/*
Create a function `compare` which returns the number of identical characters at same position, from two String of same length.

If the two arguments doesn't have the same length or at least one is null, return -1 instead.

Example:
  string1  string2     result
* "a"      "a"         1
* "a"      "b"         0
* "aa"     "ba"        1
* "cassis" "castor"    3
* "tacos"  "poulpe"   -1
* null     "a"        -1

Add you own tests.

*/

// TODO your code:

// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof compare, "function");
assert.strictEqual(compare.length, 2);
// TODO add your tests:

// End of tests
