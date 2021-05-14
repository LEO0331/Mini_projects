# Description
Given the root of a binary tree, return its maximum depth. A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
# Concept
Tree, Recursion, BFS
# Solution
1. recursively add nodes from the deepest node
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
 * @return {number}
 */
var maxDepth = function(root) {
    if(!root) return 0
    if(!root.left && !root.right) return 1 //only root node
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
};
```
2. iteratively search each layer through BFS -> time/space: O(n)
```
var maxDepth = function(root) {
    if(!root) return 0
    if(!root.left && !root.right) return 1
    let cur = root
    const queue = [root, null]
    let depth = 1
    while ((cur = queue.shift()) !== undefined) {
      if (!cur) { //end of each layer
        if (queue.length === 0) return depth
        depth++
        queue.push(null) //use null to differentiate each level
        continue
      }
      const l = cur.left
      const r = cur.right
      if(l) queue.push(l)
      if(r) queue.push(r)
    }
    return depth
};
```
3. find the deeper mode between left and right nodes, returning its depth
```
var maxDepth = function(root){
    return findNode(root)
    function findNode(node){
        if(!node) return 0
        let l = 1
        let r = 1
        if(node.left) l += findNode(node.left)
        if(node.right) r += findNode(node.right)
        return l > r ? l : r //Math.max(l, r)
    }
}
```
