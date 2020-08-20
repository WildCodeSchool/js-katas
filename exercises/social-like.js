"use strict";
/*
Create a function `getLikes` which receives an array of names, and returns:

* [] => "Be the first to like this"
* ["Cartman"] => "Cartman likes this"
* ["Kenny", "Cartman"] => "Kenny and Cartman like this"
* ["Stan", "Kyle", "Kenny", "Cartman"] => "Stan and 3 other people like this"

*/

// Your code:
function getLikes(names) {
  if (names.length > 2) {
    return `${names[0]} and ${names.length - 1} other people like this`;
  }
  if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  }
  if (names.length === 1) {
    return `${names[0]} likes this`;
  }
  return "Be the first to like this";
}

// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof getLikes, "function");
assert.strictEqual(getLikes([]), "Be the first to like this");
assert.strictEqual(getLikes(["Cartman"]), "Cartman likes this");
assert.strictEqual(getLikes(["Bart"]), "Bart likes this");
assert.strictEqual(
  getLikes(["Kenny", "Cartman"]),
  "Kenny and Cartman like this"
);
assert.strictEqual(getLikes(["Bart", "Lisa"]), "Bart and Lisa like this");
assert.strictEqual(
  getLikes(["Stan", "Kyle", "Kenny", "Cartman"]),
  "Stan and 3 other people like this"
);
assert.strictEqual(
  getLikes(["Homer", "Marge", "Bart", "Lisa", "Maggie"]),
  "Homer and 4 other people like this"
);
// End of tests
