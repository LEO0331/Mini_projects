# Description
You are given two binary trees root1 and root2. Imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not. You need to merge the two trees into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of the new tree. Return the merged tree. Note: The merging process must start from the root nodes of both trees.
```
Input: root1 = [1,3,2,5], root2 = [2,1,3,null,4,null,7]
Output: [3,4,5,5,4,null,7]
Input: root1 = [1], root2 = [1,2]
Output: [2,2]
```
# Concept
Tree, Recursion
# Solution
Construct new TreeNodes as merged nodes and put them into corresponding root/right/left of a new tree
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
    if(root1 && root2){
        const node = new TreeNode(root1.val+root2.val)
        node.left = mergeTrees(root1.left, root2.left)
        node.right = mergeTrees(root1.right, root2.right)
        return node
    }
    return root1 || root2 //in case one of the tree is null
};
var mergeTrees = function(root1, root2) {
    if (!root1 && !root2) return null
    const root = new TreeNode((root1?.val || 0) + (root2?.val || 0))
    root.left = mergeTrees(root1?.left, root2?.left)
    root.right = mergeTrees(root1?.right, root2?.right)
    return root
};
var mergeTrees = function(root1, root2) {
    if (root1 === null) return root2 //if one of the node is missing, return the other
    if (root2 === null) return root1
    root1.val += root2.val //if both nodes exist, sum the values
    root1.left = mergeTrees(root1.left, root2.left)
    root1.right = mergeTrees(root1.right, root2.right)
    return root1 //return the merged root1
};
var mergeTrees = function(root1, root2) {
    if (!root1 || !root2) return root1 || root2
    const root = new TreeNode(root1.val + root2.val)
    const left = mergeTrees(root1.left, root2.left)
    const right = mergeTrees(root1.right, root2.right)
    root.left = left
    root.right = right
    return root
}
```
