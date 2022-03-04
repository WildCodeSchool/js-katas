/*
Create a method `convert` which converts roman numeral to arabic.

If the argument is null, empty or contains an illegal numeral, throw an Error with the text "Illegal argument".

Example :
* I       -> 1
* III     -> 3
* IV      -> 4
* V       -> 5
* VIII    -> 8
* IX      -> 9
* X       -> 10
* XLIII   -> 43
* CXI     -> 111
* MDCLXVI -> 1666

*/

const romanNumerals = new Map();
romanNumerals.set("I", 1);
romanNumerals.set("V", 5);
romanNumerals.set("X", 10);
romanNumerals.set("L", 50);
romanNumerals.set("C", 100);
romanNumerals.set("D", 500);
romanNumerals.set("M", 1000);

// TODO add your code here

// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof convert, "function");
assert.strictEqual(convert.length, 1);
assert.strictEqual(convert("I"), 1);
assert.strictEqual(convert("III"), 3);
assert.strictEqual(convert("IV"), 4);
assert.strictEqual(convert("XIV"), 14);
assert.strictEqual(convert("XIX"), 19);
assert.strictEqual(convert("XXXVII"), 37);
assert.strictEqual(convert("XLIII"), 43);
assert.strictEqual(convert("CLIX"), 159);
assert.strictEqual(convert("MCCXXXVIII"), 1238);
assert.throws(() => {
  convert("");
}, /^Error: Illegal argument$/);
assert.throws(() => {
  convert(null);
}, /^Error: Illegal argument$/);
assert.throws(() => {
  convert("tacos");
}, /^Error: Illegal argument$/);

// End of tests
