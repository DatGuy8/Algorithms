var maxDepth = function(root) {
    if(!root){
        return null;
    }

    return Math.max(maxDepth(root.right), maxDepth(root.left)) +1;
};