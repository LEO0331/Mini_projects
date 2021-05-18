# Description
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements in-place without making a copy of the array.
# Concept
Array, Two Pointers
# Solution
Use slow and fast pointers to record the position of zero and swap
```
/*
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let pointer = 0
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== 0){
            let temp = nums[pointer]
            nums[pointer] = nums[i] //nums[pointer++] = nums[i]
            pointer++
            nums[i] = temp
        }
    }
};
```
