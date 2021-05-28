# Description
Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
```
Input: nums = [-4,-1,0,3,10] Output: [0,1,9,16,100] Explanation: After squaring, the array becomes [16,1,0,9,100]. After sorting, it becomes [0,1,9,16,100].
Input: nums = [-7,-3,2,3,11] Output: [4,9,9,49,121]
```
# Concept
Array, Two Pointers
# Solution
1. map the item in the original array and sort ascendingly 
```
/*
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    return nums.map(n => Math.pow(n, 2)).sort((a, b) => a-b)
};
```
2. because the source array is sorted, the largest numbers are at edges of the array, gradually decreasing towards the middle and two pointers for start/end could be used
```
var sortedSquares = function(nums) {
    let res = []
    let l = 0
    let r = nums.length - 1
    let p = r //insert from the tail position of the array
    while (l <= r){
        if(nums[l] ** 2 > nums[r] ** 2) res[p--] = nums[l++] ** 2
        else res[p--] = nums[r--] ** 2
    }
    return res
    /*
    const res = new Array(nums.length)
    let left = 0, right = nums.length - 1
    for (let i = nums.length - 1; i >= 0; i--){
        if (Math.abs(nums[left]) < Math.abs(nums[right])) res[i] = nums[right--] ** 2
        else res[i] = nums[left++] ** 2
    }
    return res
    */
};
```
