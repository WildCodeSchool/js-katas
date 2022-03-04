/*
A binary search tree is a specific binary tree which has the following properties:
* the left subtree of a node contains only nodes with keys lesser than the node’s key
* the right subtree of a node contains only nodes with keys greater than the node’s key
* the left and right subtree each must also be a binary search tree. There must be no duplicate nodes

Example:

        8
      /   \
     3     10
    / \      \
   1   6      14
      / \    /
     4   7  13

Implement the function `search` which, given a binary search tree and a value :
* return the node where the value is found
* return null if the value does not exists in the tree

This function must be recursive: you can't use a loop.

*/

class TreeNode {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

const search = (node, value) => {
  // TODO add your code here
};

// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof search, "function");
assert.strictEqual(search.length, 2);
assert.strictEqual(
  search.toString().includes("for "),
  false,
  "don't use a loop"
);
assert.strictEqual(
  search.toString().includes("while "),
  false,
  "don't use a loop"
);
assert.strictEqual(
  search.toString().includes("search("),
  true,
  "search must be recursive"
);
const tree = new TreeNode(
  8,
  new TreeNode(
    3,
    new TreeNode(1, null, null),
    new TreeNode(6, new TreeNode(4, null, null), new TreeNode(7, null, null))
  ),
  new TreeNode(10, null, new TreeNode(14, new TreeNode(13, null, null), null))
);
assert.strictEqual(search(null, 3), null);
assert.strictEqual(search(tree, 42), null);
assert.strictEqual(search(tree, 6).value, 6);
assert.strictEqual(search(tree, 13).value, 13);

// End of tests
