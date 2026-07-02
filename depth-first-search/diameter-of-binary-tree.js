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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let depth = 0;

    function dfs(node){
        if (!node) return 0;
        let left = dfs(node.left);
        let right = dfs(node.right);
        let currDepth = left + right;
        depth = Math.max(depth, currDepth);
        return Math.max(left+1, right+1);
    }
    dfs(root);
    return depth;
};