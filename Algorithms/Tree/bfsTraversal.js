const bfsTraversal = (root) => {
  let queue = []
  queue.push(root)

  while(queue.length !== 0){
    let firstNode = queue.shift();

    if(firstNode.val === null){
       process.stdout.write("null ")
    }else{
        process.stdout.write(firstNode.val.toString()+" "); 
    }
    
    if(firstNode.left !== null){
      queue.push(firstNode.left);
    }
    if(firstNode.right!== null){
      queue.push(firstNode.right);
    }
  }
  process.stdout.write("\n")
}
module.exports = bfsTraversal;
