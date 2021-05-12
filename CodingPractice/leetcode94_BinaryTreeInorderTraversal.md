# Description
Given the root of a binary tree, return the inorder traversal of its nodes' values.
# Concept
Tree, Recursion
# Solution
1. recursively add elements by the order of left->mid->right  
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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    if (!root) return []
    let left = root.left ? inorderTraversal(root.left) : []
    let right = root.right ? inorderTraversal(root.right) : []
    //+ operator turns arrays into strings
    return left.concat([root.val]).concat(right)
};
```
2. use stack to store the order of nodes to implement iteration 
```
var inorderTraversal = function(root) {
    if (!root) return []
    const stack = [root] //push nodes
    const ans = [] 
    let left = root.left
    let item = null // stack.pop()
    while (left) {
        stack.push(left)
        left = left.left
    }
    while ((item = stack.pop())) {
        ans.push(item.val)
        let t = item.right
        while (t) {
            stack.push(t)
            t = t.left
        }
    }
    return ans
};
```
