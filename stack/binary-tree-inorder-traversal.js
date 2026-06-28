/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    // let res = [];
    // let stack = [];
    // let cur = root;
    // while ( stack.length > 0){
    //     while (cur){
    //         stack.push(cur);
    //         cur = cur.left;
    //     }
    //     cur = stack.pop();
    //     res.push(cur.val);
    //     cur = cur.right;
    // }

    // return res;

    //recursive
    let res = [];

    function inorder(root){
        if (!root) return res;

        inorder(root.left);
        res.push(root.val);
        inorder(root.right);

    }
    inorder(root);
    return res;

};