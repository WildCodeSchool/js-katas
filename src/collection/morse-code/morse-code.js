/*
Create a function `decode` which translates morse code into latin alphabet.

Morse code is consisting of dots and dashes:
* each word being separated by three spaces
* each letter being separated by one space

*/

const morseMap = new Map();
morseMap.set(".-", "A");
morseMap.set("-...", "B");
morseMap.set("-.-.", "C");
morseMap.set("-..", "D");
morseMap.set(".", "E");
morseMap.set("..-.", "F");
morseMap.set("--.", "G");
morseMap.set("....", "H");
morseMap.set("..", "I");
morseMap.set(".---", "J");
morseMap.set("-.-", "K");
morseMap.set(".-..", "L");
morseMap.set("--", "M");
morseMap.set("-.", "N");
morseMap.set("---", "O");
morseMap.set(".--.", "P");
morseMap.set("--.-", "Q");
morseMap.set(".-.", "R");
morseMap.set("...", "S");
morseMap.set("-", "T");
morseMap.set("..-", "U");
morseMap.set("...-", "V");
morseMap.set(".--", "W");
morseMap.set("-..-", "X");
morseMap.set("-.--", "Y");
morseMap.set("--..", "Z");
morseMap.set(".-.-.-", ".");
morseMap.set("..--..", "?");
morseMap.set("-.-.--", "!");

// TODO add your code here

// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof decode, "function");
assert.strictEqual(decode.length, 1);
assert.strictEqual(decode(".-- .. .-.. -.."), "WILD");
assert.strictEqual(decode("- .- -.-. --- ..."), "TACOS");
assert.strictEqual(decode(".-- .. .-.. -..   -.-. --- -.. ."), "WILD CODE");

// End of tests
