const bfs = (root) => {
  let queue = [];
  queue.push(root);

  while (queue.length !== 0) {
    let node = queue.shift();

    if (node.val) console.log(node.val);

    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
};
export default bfs;
