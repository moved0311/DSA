// run : babel-node inorderTraversal.js

import buildBinaryTree from "../../../DataStructure/Tree/buildBinaryTree";
import inorderTraversal from "../inorderTraversal";

let tree = buildBinaryTree([1, 2, 3, 4, 5, 6, 7]);
/*
 *         1
 *      /     \
 *     2        3
 *   /   \    /   \
 *  4     5  6     7
 *
 */
let res = inorderTraversal(tree);
console.log(res);

console.log("==========================");
let tree2 = buildBinaryTree([1, 2, null, 4, null, null, null, 5, 6]);
/*
 *             1
 *          /     \
 *         2       n
 *       /   \
 *      4     n
 *    /   \
 *   5     6
 */
let res2 = inorderTraversal(tree2);
console.log(res2);

console.log("==========================");
let tree3 = buildBinaryTree([1, null, 2, null, null, 3]);
/*
 *     1
 *       \
 *        2
 *       /
 *     3
 */
let res3 = inorderTraversal(tree3);
console.log(res3);
