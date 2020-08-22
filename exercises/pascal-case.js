"use strict";
/*
Create a function `pascalCase` which convert a sentence into upper case Camel Case, also known as Pascal Case.

E.g:
* "this is sparta" > "ThisIsSparta"
* "sO rAdicAL DuDe" > "SoRadicalDude"

You can't use a loop!

Do not mutate the parameter.

*/

// TODO your code:

// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof pascalCase, "function");
assert.strictEqual(pascalCase.length, 1);
assert.strictEqual(
  pascalCase.toString().includes("for"),
  false,
  "Do not use a loop"
);
assert.strictEqual(
  pascalCase.toString().includes("while"),
  false,
  "Do not use a loop"
);
assert.strictEqual(pascalCase("this is sparta"), "ThisIsSparta");
assert.strictEqual(pascalCase("sO rAdicAL DuDe"), "SoRadicalDude");
let test = "no mutation";
pascalCase(test);
assert.strictEqual(test, "no mutation", "Do not mutate the parameter");

// End of tests
