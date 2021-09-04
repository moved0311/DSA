/*
run code :  node insertIntoBST.js < input/insertIntoBST
*/
const fs = require("fs")
const split = require("split")
const through = require("through")
const buildBinaryTree = require("../../DataStructure/Tree/buildBinaryTree")
const bfsPrint= require("../../Algorithms/Tree/bfsPrint")
const TreeNode = require("../../DataStructure/Tree/Tree")

let input = []
const stdInput = process.stdin.pipe(split())

// stdin save to input array.
stdInput.on('data',(line) =>{
  if(!line) return ;
  input.push(JSON.parse(line))
})


const binarySearch = (root, val) => {
  if(root===null){
    /* find null place to insert val */
    return new TreeNode(val);
  }

  if(val > root.val){ 
    root.right = binarySearch(root.right, val);
  }else{
    root.left = binarySearch(root.left, val)
  }  

  return root;
}
const insertIntoBST = (root, val) => {
  binarySearch(root, val);
  bfsPrint(root) 
}

const main = () => {
  let readlines = 2;
  while(input.length > 0){
    let [data, val] = input.splice(0, readlines);
    let root = buildBinaryTree(data);
    insertIntoBST(root, val)
  }
}

stdInput.on('end', ()=>{
  main();
})

/*=======================*/
