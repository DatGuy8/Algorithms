/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

// recursive // we find the node when the node value is less than one value and greater than the other val since its is a balanced tree.
var lowestCommonAncestor = function(root, p, q) {
    
    const parentValue = root.val;

    const pVal = p.val;

    const qVal = q.val;

    if(pVal > parentValue && qVal > parentValue){
        return lowestCommonAncestor(root.right,p,q);
    }
    else if(pVal < parentValue && qVal < parentValue) {
        return lowestCommonAncestor(root.left,p,q);
    } else{
        return root;
    }
};
// iterative   O(n)time    O(1)space
const lca = (root, p, q) =>{
    const pVal = p.val;
    const qVal = q.val;
    let node = root;

    while(node){
        const parentValue = node.val;

        if(pVal > parentValue && qVal > parentValue){
            node = node.right;
        }
        else if(pVal < parentValue && qVal < parentValue){
            node = node.left;
        }
        else {
            return node;
        }
    }
}