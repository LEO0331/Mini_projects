# Description
Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree. A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.
# Concept
Tree, Recursion
# Solution
1. find the mid point as the tree root and recursively add remaining numbers to the left/right of the tree from two separate arrays -> time: O(n), space: O(n^2)
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if(nums.length === 0) return null
    const mid = nums.length >> 1 //shifts the first operand the specified number of bits to the right
    const root = new TreeNode(nums[mid])
    root.left = sortedArrayToBST(nums.slice(0, mid))
    root.right = sortedArrayToBST(nums.slice(mid+1))
    return root
};
```
2. set the mid point as tree root and build the tree by recursively adding nodes from the left/right of the mid point -> time: O(n), space: O(log(n))
```
var sortedArrayToBST = function(nums) {
    if(!nums) return null
    return BST(nums, 0, nums.length - 1)
    function BST(nums, l, r){
        if(l > r) return null
        let mid = (l + (r - l) / 2)>>0 //Math.floor((r + l) / 2) OR Math.ceil((r + l) / 2)
        let root = new TreeNode(nums[mid])
        root.left = BST(nums, l, mid - 1)
        root.right = BST(nums, mid + 1, r)
        return root
    }
}
```
