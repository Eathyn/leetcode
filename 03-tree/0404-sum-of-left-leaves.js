/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const sumOfLeftLeaves = function(root) {
  if (root === null) {
    return 0
  }

  if (isLeaf(root.left)) {
    return root.left.val + sumOfLeftLeaves(root.right)
  }

  return sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right)
}

const isLeaf = function(root) {
  if (root === null) {
    return false
  }

  if (root.left === null && root.right === null) {
    return true
  }
}
