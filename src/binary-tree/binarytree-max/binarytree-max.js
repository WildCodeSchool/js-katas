/*
In computer science, a binary tree is a tree data structure in which each node has at most two children, which are referred to as the left child and the right child.

You are given a binary tree. Implement the function `max` which returns the maximal node value in the tree.

Example:

    7
  /   \
  5     2
  \      \
   6      11
  / \    /
  1   9  4

result: 11

If the root node is null, return null.

This function must be recursive: you can't use a loop.

*/

class TreeNode {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

const max = (node) => {
  // TODO add your code here
};

// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof max, "function");
assert.strictEqual(max.length, 1);
assert.strictEqual(max.toString().includes("for "), false, "don't use a loop");
assert.strictEqual(
  max.toString().includes("while "),
  false,
  "don't use a loop"
);
assert.strictEqual(
  max.toString().includes("max("),
  true,
  "max must be recursive"
);
assert.strictEqual(max(null), null);
assert.strictEqual(max(new TreeNode(42, null, null)), 42);
const tree = new TreeNode(
  7,
  new TreeNode(
    5,
    null,
    new TreeNode(6, new TreeNode(1, null, null), new TreeNode(9, null, null))
  ),
  new TreeNode(2, null, new TreeNode(11, new TreeNode(4, null, null), null))
);
assert.strictEqual(max(tree), 11);

// End of tests
