import buildBinarySearchTree from "../buildBinarySearchTree";
import bfs from "../../../Algorithms/Tree/bfs";

let tree = buildBinarySearchTree([100, 20, 500, 10, 30]);
bfs(tree);
console.log("==========================");

let tree1 = buildBinarySearchTree([8, 3, 10, 12, 1, 6, 14, 4, 7, 13]);
bfs(tree1);
console.log("==========================");

let tree2 = buildBinarySearchTree([1, 2, 3, 4, 5]);
bfs(tree2);
console.log("==========================");
