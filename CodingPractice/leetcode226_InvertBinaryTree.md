# Description
Given the root of a binary tree, invert the tree, and return its root.
# Concept
Tree, Recursion
# Solution
1. recursively revert the left and right part of the tree by assigning original left to right & right to left -> time: O(n), space: O(n)
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(!root) return root 
    //if(!root || (!root.right && !root.left)) return root
    const left = root.left
    const right = root.right
    root.left = invertTree(right)
    root.right = invertTree(left)
    /*
    let temp = root.left
    root.left = invertTree(root.right)
    root.right = invertTree(temp)
    */
    return root
};
```
2. use stack to iterate the left and right tree
```
if(!root) return root 
    const stack = [root]
    let current = null
    while((current = stack.shift())) {
        const left = current.left
        const right = current.right
        current.left = right
        current.right = left
        if(left) stack.push(left)
        if(right) stack.push(right)
    }
    return root
```
