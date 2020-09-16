/**
 * leetcode 700. Search in a Binary Search Tree
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  if (root === null || root.val === val) {
    return root;
  } else {
    return val > root.val
      ? searchBST(root.right, val)
      : searchBST(root.left, val);
  }
};

/*
    time complexity:  
        BST time complexity is proportional to tree height.
        average case:  O(logn)
        worse case    : O(n)           ---> skewed tree
        
    space: 
        tree node  ---> O(n)
*/
module.exports = searchBST;
