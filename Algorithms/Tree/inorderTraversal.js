const inorderTraversal = (root, arr = []) => {
  if (root === null) return;

  inorderTraversal(root.left, arr);
  if (root.val) arr.push(root.val);
  inorderTraversal(root.right, arr);
  return arr;
};
export default inorderTraversal;
