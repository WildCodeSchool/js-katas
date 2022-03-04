/*
You are given a binary tree. Implement the method `sum` which returns the sumimal sum of a route from root to leaf.

Example:

     17
    /  \
   3   -10
  /    /  \
  2   16   1
          /
          13

result: 23, since [17,-10,16] is the route from root to leaf with the sumimal sum.

If the root node is null, return zero.

This function must be recursive: you can't use a loop.

*/

class TreeNode {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

const sum = (node) => {
  // TODO add your code here
};

// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof sum, "function");
assert.strictEqual(sum.length, 1);
assert.strictEqual(sum.toString().includes("for "), false, "don't use a loop");
assert.strictEqual(
  sum.toString().includes("while "),
  false,
  "don't use a loop"
);
assert.strictEqual(
  sum.toString().includes("sum("),
  true,
  "sum must be recursive"
);
assert.strictEqual(sum(null), 0);
assert.strictEqual(sum(new TreeNode(42, null, null)), 42);
assert.strictEqual(
  sum(
    new TreeNode(
      17,
      new TreeNode(3, new TreeNode(2, null, null), null),
      new TreeNode(
        -10,
        new TreeNode(16, null, null),
        new TreeNode(1, new TreeNode(13, null, null), null)
      )
    )
  ),
  23
);
assert.strictEqual(
  sum(
    new TreeNode(
      7,
      new TreeNode(
        5,
        null,
        new TreeNode(
          6,
          new TreeNode(1, null, null),
          new TreeNode(9, null, null)
        )
      ),
      new TreeNode(2, null, new TreeNode(11, new TreeNode(4, null, null), null))
    )
  ),
  27
);

// End of tests
