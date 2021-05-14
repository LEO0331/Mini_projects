# Description
Given the root of a binary tree, return the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root. The length of a path between two nodes is represented by the number of edges between them.
```
Input: root = [1,2,3,4,5]
Output: 3
Explanation: 3is the length of the path [4,2,1,3] or [5,2,1,3].
```
# Concept
Tree, Recursion
# Solution
Recursively look for deepest node and check whether the path crosses the root  
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
var diameterOfBinaryTree = function(root) {
    let diameter = 0
    DFS(root)
    return diameter
    function DFS(root){
        if(!root) return 0
        let left = DFS(root.left)
        let right = DFS(root.right)
        //if the path doesn't go through the root, get the max of them
        diameter = Math.max(diameter, left + right) //update diameter each level
        //the path goes through the root so add 1 for the root 
        return 1 + Math.max(left, right) //update the largest number of edge so far
    }
};
```
