/*
Create a function `winner` which analyses a 3x3 tic-tac-toe grid.
* "X" represents player X
* "0" represents player 0
* " " (space) is an empty cell

grid :
[
  ["X", "O", "O"],
  ["X", "O", "O"],
  ["X", " ", " "],
]

The function should returns the winner :
* "X wins" when X wins
* "O wins" when O wins
* "Cat's game" if it's a draw or if nobody wins
* "{player} is a cheater" where {player} is replaced by the player who cheated.

The function should throw :
* TypeError if the grid is null or not an array.
* RangeError if the grid has not the size expected
* Error with the text "Illegal character" if the grid contains at least one illegal character.

*/

// TODO add your code here

// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof winner, "function");
assert.strictEqual(winner.length, 1);
assert.strictEqual(
  winner([
    ["X", "O", "O"],
    ["X", "O", "O"],
    ["X", " ", " "],
  ]),
  "X wins"
);
assert.strictEqual(
  winner([
    ["X", "O", "X"],
    ["O", "O", "O"],
    [" ", " ", "X"],
  ]),
  "O wins"
);
assert.strictEqual(
  winner([
    ["X", "X", "O"],
    ["O", "X", "O"],
    ["X", "O", "X"],
  ]),
  "X wins"
);
assert.strictEqual(
  winner([
    ["O", "X", "X"],
    ["O", "X", "O"],
    ["X", "O", "X"],
  ]),
  "X wins"
);
assert.strictEqual(
  winner([
    ["O", "X", "O"],
    ["X", "X", "O"],
    ["O", "O", "X"],
  ]),
  "Cat's game"
);
assert.strictEqual(
  winner([
    ["O", "X", " "],
    [" ", " ", " "],
    [" ", "O", " "],
  ]),
  "Cat's game"
);
assert.strictEqual(
  winner([
    ["O", "X", "X"],
    ["X", "X", "O"],
    ["X", "O", "X"],
  ]),
  "X is a cheater"
);
assert.throws(() => [winner(null)], TypeError);
assert.throws(() => [winner("OXXOXOXXOX")], TypeError);
assert.throws(() => {
  winner([
    ["O", "X", "X"],
    ["X", "X", "O"],
  ]);
}, RangeError);
assert.throws(() => {
  winner([
    ["O", "X", "X"],
    ["X", "X"],
    ["X", "O", "X"],
  ]);
}, RangeError);
assert.throws(() => {
  winner([
    ["O", "X", "X"],
    ["O", "X", "0"],
    ["X", "O", "X"],
  ]);
}, /^Error: Illegal character$/);

// End of tests
