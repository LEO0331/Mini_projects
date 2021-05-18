# Description
You are given an integer array nums consisting of n elements, and an integer k. Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10^-5 will be accepted.
```
Constraints:
- n == nums.length
- 1 <= k <= n <= 105
- -10^4 <= nums[i] <= 10^4
Input: nums = [1,12,-5,-6,50,3], k = 4 Output: 12.75000 Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
Input: nums = [5], k = 1 Output: 5.00000
```
# Concept
Array
# Solution

```

```
# Complement
```
/*
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) { //Time Limit Exceeded, can not handle large inputs
    let max = -Infinity 
    if(k === 1) return Math.max(...(nums)) //maximum element in the arrray
    for(let i=0; i<nums.length; i++){
        if(nums[i+k-1]){ //restriction of tail
            let cur = nums.slice(i,i+k).reduce((a, b) => a + b, 0)/k //calculate each k number sum
            max = Math.max(max,cur) //compare with current max sum
        }
    }
    return max
};

```
