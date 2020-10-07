function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.right = right === undefined ? null : right;
  this.left = left === undefined ? null : left;
}

/*
let root = new TreeNode(1);
                1
             /     \
          null   null

root.left = new TreeNode(2);
root.right = new TreeNode(3);

                      1
               /           \ 
             2              3
        /       \        /      \
    null  null  null  null

root.left.left = new TreeNode(4);

                          1
                   /            \ 
                2                 3
            /        \         /      \
        4      null  null   null
     /     \
 null  null

console.log(root);
*/

module.exports = TreeNode;
