/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
const isSubtree = function(s, t) {
  if (s === null) {
    return false
  }
  if (sameTree(s, t)) {
    return true
  }

  return isSubtree(s.left, t) || isSubtree(s.right, t)
};

const sameTree = function(s, t) {
  if (s === null && t === null) {
    return true
  }
  if (s === null || t === null) {
    return false
  }

  return s.val === t.val && sameTree(s.left, t.left) && sameTree(s.right, t.right)
}
