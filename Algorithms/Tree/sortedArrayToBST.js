/*
 * give an sorted array and  return height balanced BST.
 * run code : node sortedArrayToBST.js < input/sortedArrayToBST
 */
const fs = require("fs")
const split = require("split")
const through = require("through")
const TreeNode = require("../../DataStructure/Tree/Tree") 

let input = []
const stdInput = process.stdin.pipe(split())

// stdin save to input array.
stdInput.on('data',(line) =>{
  if(!line) return ;
  input.push(JSON.parse(line))
})
const binarySearchBuildTree = (arr, root) => {
    let len = arr.length;
    if(len === 0 || root === null) return null;
    let mid = len % 2 === 0 ? len/2 -1: Math.floor(len/2) ;  
    root = new TreeNode(arr[mid]);
    root.left = binarySearchBuildTree(arr.slice(0, mid), root) ;
    root.right = binarySearchBuildTree(arr.slice(mid+1), root);
    return root;
}
const sortedArrayToBST = (arr) => {
    let root = new TreeNode()
    return binarySearchBuildTree(arr, root)
}

const main = () => {
  let readlines = 1;
  while(input.length > 0){
    let [arr] = input.splice(0, readlines);
    console.log("input : ", arr)
    const tree = sortedArrayToBST(arr)
    console.log("output: ", tree)
    console.log("============================")
  }
}

stdInput.on('end', ()=>{
  main();
})

/*=======================*/
