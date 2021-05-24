# Description
An array is monotonic if it is either monotone increasing or monotone decreasing. An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j].  An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j]. Return true if and only if the given array nums is monotonic.
```
Input: nums = [1,2,2,3] Output: true
Input: nums = [6,5,4,4] Output: true
Input: nums = [1,3,2] Output: false
Input: nums = [1,2,4,5] Output: true
Input: nums = [1,1,1] Output: true
```
# Concept
Array
# Solution
Use two indicators to record the increase/decrease of the number
```
/*
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    let increase = true, decrease = true
    for(let i=0; i<nums.length; i++){
        if(nums[i] < nums[i+1]) decrease = false
        else if(nums[i] > nums[i+1]) increase = false
        else if(nums[i] === nums[i+1]) continue
        /*
        if(nums[i] < nums[i+1]) decrease = false
        if(nums[i] > nums[i+1]) increase = false
        */
    }
    return increase || decrease
};
```
