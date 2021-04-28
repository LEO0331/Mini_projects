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
        max = Math.max(max, sum)
        //if(sum > max) max = sum
      }
    }
    return max
};
```
Optimize sum of the prefix -> O(n)
```
var maxSubArray = function(nums) {
    let max = nums[0]
    let min = 0
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        max = Math.max(max, sum - min)
        min = Math.min(min, sum)
        //if (sum - min > max) max = sum - min
        //if (sum < min) min = sum
    }
    return max;
};
```
Divide and conquer approach: devide the array at the mid point, calculate the right prefix and left suffix max value -> O(nlogn)
```
function helper(nums, m, n) {
  if (m === n) return nums[n]
  let sum = 0
  let left_max = -Number.MAX_VALUE
  let right_max = -Number.MAX_VALUE
  let mid = (m+n)/2
  let left = helper(nums, m, mid)
  let right = helper(nums, mid + 1, n)
  for (let i = mid; i >= m; i--) {
    sum += list[i]
    left_max = Math.max(sum, left_max)
    //if (sum > left_max) left_max = sum
  }
  sum = 0 //clear
  for (let j = mid + 1; j <= n; j++) {
    sum += list[j]
    right_max = Math.max(sum, right_max)
    //if (sum > right_max) right_max = sum
  }
  return Math.max(l, r, left_max + right_max)
}

var maxSubArray = function(nums) {
  return helper(nums, 0, nums.length - 1)
}
```
Dynamic programming -> O(n)
```
var maxSubArray = function(nums) {
  let max = nums[0] //global maximum sum
  let currentMax = nums[0] //cumulative maximum sum to current position
  for (let i = 1; i < nums.length; i++) {
    currentMax = Math.max(currentMax+nums[i], nums[i])
    max = Math.max(max, currentMax)
    //if (nums[i] > max) max = nums[i]
  }
  return max
}
```
