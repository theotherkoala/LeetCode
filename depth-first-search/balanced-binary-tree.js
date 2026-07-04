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
 * @return {boolean}
 */
var isBalanced = function(root) {
    if (!root) return true;
    let left = Height(root.left);
    let right = Height(root.right);
    return (Math.abs(left - right) <= 1 && isBalanced(root.left) &&
        isBalanced(root.right));


};

function Height(root){
    if (!root) return 0;
    return Math.max(Height(root.left),Height(root.right))+1;
}