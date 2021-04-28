# Description
Given an integer array, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

# Concept
Sliding Window, Sum of the Prefix, DP

# Solution
Brute Force with sum of the prefix -> O(n^2)
```
/*
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = -Number.MAX_VALUE //store the current max value
    let sum = 0
    for(let i=0; i<nums.length; i++){ //start point for the calculation
      sum = 0 //clear the value after each iteration
      for(let j=i; j<nums.length; j++){
        sum += nums[j]
        if(sum > max){
          max = sum
        }
      }
    }
    return max
};
```
