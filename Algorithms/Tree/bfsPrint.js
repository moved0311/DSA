const bfsPrint= (root) => {
  let queue = []
  queue.push(root)

  while(queue.length !== 0){
    let firstNode = queue.shift();

    process.stdout.write(firstNode.val+" "); 

    if(firstNode.left) {
      queue.push(firstNode.left);
    }
    if(firstNode.right) {
      queue.push(firstNode.right);
    }
  }
  process.stdout.write("\n")
}
module.exports = bfsPrint;
