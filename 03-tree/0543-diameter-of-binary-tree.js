// Definition for a binary tree node.
function TreeNode(val) {
   this.val = val;
   this.left = this.right = null;
}

let max = 1

/**
 * @param {TreeNode} root
 * @return {number}
 */
const diameterOfBinaryTree = function (root) {
  if (root === null) {
    return 0
  }

  height(root)
  return max
}

/**
* @param {TreeNode} root
* @return {number}
* */
const height = function (root) {
  if (root === null) {
    return 0
  }

  const leftHeight = height(root.left)
  const rightHeight = height(root.right)

  max = Math.max(max, leftHeight + rightHeight)

  return 1 + Math.max(leftHeight, rightHeight)
}
