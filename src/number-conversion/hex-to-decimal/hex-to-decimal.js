/*
Create a function `convert` which, given a string representation of an hexadecimal value, returns its decimal value.

If the argument is null, empty, not a string or contains an illegal character, throw an Error with the message "Illegal hexadecimal string".

Hexadecimal is a numeral system with a base of 16. It uses sixteen distinct symbols : 0 to 9 to represent values zero to nine, and A to F represent values ten to fifteen.

E.g:

   0 : 0
   1 : 1
   9 : 9
   A : 10
   B : 11
   F : 15
  10 : 16
  11 : 17
  FF : 255
4F2C : 20268

You can't use the function parseInt.

Hint (only if you're stuck) : https://gist.github.com/bastienwcs/0cb437bff3e991d139770c4af6414e8f

Add you own tests.

*/

// TODO add your code here

// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof convert, "function");
assert.strictEqual(convert.length, 1);
assert.strictEqual(
  convert.toString().includes("parseInt"),
  false,
  "don't use parseInt()"
);
// TODO add your tests:

// End of tests
