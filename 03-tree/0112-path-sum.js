/*
* Video: https://www.youtube.com/watch?v=6nHnhd3QQsE&ab_channel=basketwangCoding
* */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
const hasPathSum = function(root, sum) {
  if (root === null) {
    return false
  }

  if (root.left === null && root.right === null) {
    return root.val === sum
  }

  const left = hasPathSum(root.left, sum - root.val)
  const right = hasPathSum(root.right, sum - root.val)
  return left || right
}
