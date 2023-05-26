# Description
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i]. The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer. You must write an algorithm that runs in O(n) time and without using the division operation.
```
Input: nums = [1,2,3,4] Output: [24,12,8,6]
Input: nums = [-1,1,0,-3,3] Output: [0,0,9,0,0]
```
# Concept
Array
# Solution
Maintain two arrays, get the product of prefix and suffix of current num
```
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let res = []
    res[0] = 1
    //left to right
    for(let i=1; i<nums.length; i++){
        res[i] = res[i-1]*nums[i-1]
    }
    //right to left
    let r = 1
    for(let j=nums.length-1; j>=0;j--){
        res[j] *= r
        r *= nums[j] 
    }
    return res
};
```
```

```
