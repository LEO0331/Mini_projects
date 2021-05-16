# Description
Given a binary array nums, return the maximum number of consecutive 1's in the array. Note that nums[i] is either 0 or 1.
```
Input: nums = [1,1,0,1,1,1] Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
Input: nums = [1,0,1,1,0,1] Output: 2
```
# Concept
Array, Two Pointers
# Solution
1. record every length of 1 and return the max
```
/*
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let count = 0
    let max = [0] //handle input [0]
    for(let i=0; i<nums.length; i++){
        if(nums[i] === 1){
            count++
            max.push(count)
        }else{
           count = 0
        }
    }
    return Math.max(...max)
};
```
2. use one pointer to record the
```

```
