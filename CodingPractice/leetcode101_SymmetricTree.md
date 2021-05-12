# Description
Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
# Concept
Tree, Recursion
# Solution
1. recursively check the node to see whether two nodes are mirror in each layer -> time/space: O(n), n = numbers of nodes
```
/*
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/*
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(!root) return true
    else return recur(root.left, root.right)
    function recur(l, r){
        if(!l && !r) return true //both subtrees are empty
        if(!l || !r || l.val != r.val) return false
        return recur(l.left, r.right) && recur(l.right, r.left) //match left.left to right.right & left.right to right.left
    }
};
```
2. reverse the right tree to check whether it matches the left one
```
var isSymmetric = function(root) {
    if(!root || (!root.left && !root.right)) return true
    root.right = revertTree(root.right)
    return isSame(root.left, root.right)
    function revertTree(node){
        if(!node || !node.left && !node.right) return node
        let temp = revertTree(node.left)
        node.left = revertTree(node.right)
        node.right = temp
        return node
    }
    function isSame(left, right){
        if(!left && !right) return true
        if(!left && right || !right && left) return false
        if(left.val != right.val) return false
        return isSame(left.right, right.right) && isSame(left.left, right.left)
    }
}
```
