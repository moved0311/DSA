/*
   given an array like [4,2,7,1,3] and return tree structure.
   input: 
     data: array (tree node data).
     i   : index of tree. 
   output: 
          4
        /    \
       2      7 
     /   \   /  \
    1    3  n    n
*/
const TreeNode = require("./Tree")

const buildBinaryTree = (data, root=null, i=0) => {
  if(i < data.length){
    root  = new TreeNode(data[i]);
    root.left = buildBinaryTree(data, root.left, 2*i+1)
    root.right= buildBinaryTree(data, root.right, 2*i+2)
  }  
  return root
}

module.exports = buildBinaryTree
