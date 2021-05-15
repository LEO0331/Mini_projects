# Description
Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.
```
Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]
Input: nums = [1,1]
Output: [2]
```
# Concept
Array, Hash
# Solution
1. use hash map to record all elements and loop again the array to find missing numbers 
```
/*
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let map = new Map()
    let arr = []
    for(let i = 0; i < nums.length; i++){
        if(!map.has(nums[i])) map.set(nums[i], i)
    }
    for(let i = 1; i <= nums.length; i++){
        if(!map.has(i)) arr.push(i)
    }
    return arr
};
```
2. mark existing positions as negative values by its+1 number
```
var findDisappearedNumbers = function(nums) {
    let arr=[]
    for(let i=0; i<nums.length; i++)
    {
	      let currentNumber=Math.abs(nums[i]) //go to currentNumber - 1 index and mark it negative 
        if(nums[currentNumber-1] > 0) nums[currentNumber-1] = -nums[currentNumber-1]
    }
    for(let i=0; i<nums.length; i++)
    {
        if(nums[i] > 0) arr.push(i+1) //push positive number's index+1 because it determines whether the i is positive/negative
    }
    return arr
};
```
