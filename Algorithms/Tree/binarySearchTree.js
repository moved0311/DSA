/**
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
const binarySearchTree = (root, val) => {
  if (root === null || root.val === val) {
    return root;
  } else {
    return val > root.val
      ? binarySearchTree(root.right, val)
      : binarySearchTree(root.left, val);
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
export default binarySearchTree;
