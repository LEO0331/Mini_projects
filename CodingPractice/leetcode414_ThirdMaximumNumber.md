# Description
Given integer array nums, return the third maximum number in this array. If the third maximum does not exist, return the maximum number.
```
Input: nums = [3,2,1] Output: 1
Input: nums = [1,2] Output: 2 Explanation: The third maximum does not exist, so the maximum (2) is returned instead.
Input: nums = [2,2,3,1] Output: 1 Explanation: Note that the third maximum here means the third maximum distinct number. Both numbers with value 2 are both considered as second maximum.
```
# Concept
Array, Set
# Solution  
1. construct a set from array and delete the first two max values
```
/*
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let max = 0
    let s = new Set(nums)
    if(s.size < 3) return Math.max(...s)
    for(let i = 0; i < 3; i++) {
        max = Math.max(...s)
        s.delete(max) //delete the current max
    }
    return max
};
```
2. remove duplicate items, sort the array in descending order and get the nums[2] or sort the array in ascending order and pop out the first two items
```
var thirdMax = function(nums) {
    nums = [...new Set(nums)].sort((a,b) => b-a) //sort from largest to smallest
    return nums.length <= 2 ? Math.max(...nums) : nums[2]
    /*
    nums = [...new Set(nums)].sort((a,b) => a-b) 
    return nums.length <= 2 ? Math.max(...nums) : nums[nums.length-3] //no negative index in js
    */
};
```
