# Description
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order. Write an algorithm with O(log n) runtime complexity.
```
Nums contains distinct values sorted in ascending order
Input: nums = [1,3,5,6], target = 5 -> Output: 2
Input: nums = [1,3,5,6], target = 2 -> Output: 1
Input: nums = [1,3,5,6], target = 7 -> Output: 4
Input: nums = [1,3,5,6], target = 0 -> Output: 0
Input: nums = [1], target = 0 -> Output: 0
```
# Concept
Array, Binary Search
# Solution
1. recursively look for the target and if not found, return its corresponding position as the current starting point
```
/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    return BinarySearch(nums, target, 0, nums.length-1)
    function BinarySearch(arr, m, left, right){
        if(left > right) return left
        let mid = Math.floor((left+right)/2)
        if (nums[mid] === target) return mid
        if (nums[mid] > target) return BinarySearch(nums, target, left, mid-1)
        if (nums[mid] < target) return BinarySearch(nums, target, mid+1, right)
    }
};
```
2. linear search for the target and consider the case of largest target
```
var searchInsert = function(nums, target) {
    for(let i=0; i<nums.length; i++) {
        if(target === nums[i] || target < nums[i]) return i
    }
    return nums.length //if the target is biggest and need to insert it at the last of the array
};
```
