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
    let diameter = 0;
    const longestPath = (root)=>{
        if(!root){
            return null;
        }
        const left = longestPath(root.left);
        const right = longestPath(root.right);
        diameter = Math.max(diameter, left + right);
        return Math.max(left, right) + 1;
    }
    longestPath(root);

    return diameter;
};