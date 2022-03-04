/*
Create a method `convert` that converts a hexadecimal color string into a RGB array.

A hexadecimal color string is a triplet of hexadecimal values (red, blue, green) that begins with a '#'. E.g: #FFD700 will be the gold color : FF for red, D7 for blue, 00 for green.

A hexadecimal digit (base 16) goes from 0 to 9 and then from A to F (10 to 15). Each color group contains two digits, and goes from 00 to FF (255).

A RBG array contains the value of each color group in decimal.

If you convert "#FFD700" into a RGB array, you'll obtain [255, 215, 0].

If the argument is null, empty, not a string, doesn't begins with a '#' or contains an illegal character, throw an Error with the message "Illegal argument".

You MUST use parseInt this time!

*/

// TODO add your code here

// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof convert, "function");
assert.strictEqual(convert.length, 1);
assert.strictEqual(
  convert.toString().includes("parseInt"),
  true,
  "You must use parseInt()"
);
assert.deepStrictEqual(convert("#000000"), [0, 0, 0]);
assert.deepStrictEqual(convert("#FFD700"), [255, 215, 0]);
assert.deepStrictEqual(convert("#9ACD32"), [154, 205, 50]);
assert.throws(() => {
  convert("000000");
}, /^Error: Illegal argument$/);
assert.throws(() => {
  convert("#00000G");
}, /^Error: Illegal argument$/);
assert.throws(() => {
  convert(null);
}, /^Error: Illegal argument$/);
assert.throws(() => {
  convert("");
}, /^Error: Illegal argument$/);
assert.throws(() => {
  convert(121045);
}, /^Error: Illegal argument$/);

// End of tests
