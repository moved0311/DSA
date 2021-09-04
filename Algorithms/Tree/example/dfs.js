// run : babel-node dfs.js

import buildBinaryTree from "../../../DataStructure/Tree/buildBinaryTree";
import dfs from "../dfs";

let tree = buildBinaryTree([1, 2, 3, 4, 5, 6, 7]);
/*
 *         1
 *      /     \
 *     2        3
 *   /   \    /   \
 *  4     5  6     7
 *
 */
dfs(tree);

console.log("==========================");

let tree2 = buildBinaryTree([1, 2, 3, 4, 5, null, null, 6, 7]);
/*
 *             1
 *          /     \
 *         2       3
 *       /   \
 *      4     5
 *    /   \
 *   6     7
 */
dfs(tree2);
