import TreeNode from "./Tree";

const insertNode = (root, num) => {
  if (root === null) {
    return new TreeNode(num);
  }
  if (num < root.val) {
    if (root.left === null) {
      root.left = new TreeNode(num);
    } else {
      root.left = insertNode(root.left, num);
    }
  } else {
    if (root.right === null) {
      root.right = new TreeNode(num);
    } else {
      root.right = insertNode(root.right, num);
    }
  }
  return root;
};

const buildBinarySearchTree = (arr) => {
  let root = null;
  arr.map((val) => {
    root = insertNode(root, val);
  });
  return root;
};
export default buildBinarySearchTree;
