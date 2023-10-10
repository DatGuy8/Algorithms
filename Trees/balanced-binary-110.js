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

    const treeHeight = (root) =>{
        if (!root){
            return -1;
        }
        return Math.max(treeHeight(root.left), treeHeight(root.right)) + 1;
    }

    if(!root){
        return true;
    }
    return Math.abs(treeHeight(root.left) - treeHeight(root.right)) < 2 && isBalanced(root.left) && isBalanced(root.right);
};