import Stack from "../../DataStructure/Stack/stack";

const dfs = (root) => {
  let stack = new Stack();
  stack.push(root);

  while (!stack.isEmpty()) {
    let node = stack.pop();
    if (node.val) console.log(node.val);

    if (node.right) {
      stack.push(node.right);
    }
    if (node.left) {
      stack.push(node.left);
    }
  }
};
export default dfs;
