/*
Create a function `pascalCase` which convert a sentence into upper case Camel Case, also known as Pascal Case.

Example:
* "this is sparta" > "ThisIsSparta"
* "sO rAdicAL DuDe" > "SoRadicalDude"

You can't use a loop!

Don't mutate the parameter.

*/

// TODO add your code here

// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof pascalCase, "function");
assert.strictEqual(pascalCase.length, 1);
assert.strictEqual(
  pascalCase.toString().includes("for "),
  false,
  "don't use a loop"
);
assert.strictEqual(
  pascalCase.toString().includes("while "),
  false,
  "don't use a loop"
);
assert.strictEqual(pascalCase("this is sparta"), "ThisIsSparta");
assert.strictEqual(pascalCase("sO rAdicAL DuDe"), "SoRadicalDude");
let test = "no mutation";
pascalCase(test);
assert.strictEqual(test, "no mutation", "don't mutate the parameter");

// End of tests
