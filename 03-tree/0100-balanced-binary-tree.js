/*
* Explanation:
*  https://www.youtube.com/watch?v=Be5CUodZliM&ab_channel=basketwangCoding
* */

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

// solution-1
//  O(n ** 2)
{
  const isBalanced = function(root) {
    if (root === null) {
      return true
    } else {
      return Math.abs(height(root.left) - height(root.right)) <= 1 &&
        isBalanced(root.left) && isBalanced(root.right)
    }
  };

  const height = function (root) {
    return root === null ? 0 : 1 + Math.max(height(root.left), height(root.right))
  }
}


// solution-2
//  O(n)
{
  const isBalanced = function (root) {
    if (root === null) {
      return true
    }

    return height(root) !== -1
  }

  const height = function (root) {
    if (root === null) {
      return 0
    }

    const leftHeight = height(root.left)
    const rightHeight = height(root.right)

    if (leftHeight === -1 || rightHeight === -1) {
      return -1
    }

    if (Math.abs(leftHeight - rightHeight) > 1) {
      return -1
    }

    return 1 + Math.max(leftHeight, rightHeight)
  }
}
