function Node(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.right = right === undefined ? null : right;
  this.left = left === undefined ? null : left;
}

let root = new Node(1);
/*
                1
            /     \
        null   null
*/
root.left = new Node(2);
root.right = new Node(3);

/*
                      1
               /           \ 
            2              3
        /       \        /      \
    null  null  null  null
*/
root.left.left = new Node(4);

/*
                          1
                   /            \ 
                2                 3
            /        \         /      \
        4      null  null   null
     /     \
 null  null
*/

console.log(root);

module.exports = Node;
