// run : babel-node bfs.js

import buildBinaryTree from "../../../DataStructure/Tree/buildBinaryTree";
import binarySearchTree from "../binarySearchTree";

let tree = buildBinaryTree([10, 2, 13, -4, 3, 12, 17]);
/*
 *         10
 *      /     \
 *     2       13
 *   /   \    /   \
 * -4     3  12    17
 *
 */
console.log(binarySearchTree(tree, 17));

console.log("==========================");
