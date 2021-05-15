# Description
1. Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice.
2. Given an array of integers numbers that is already sorted in ascending order, find two numbers such that they add up to a specific target number. Return the indices of the two numbers (1-indexed) as an integer array answer of size 2, where 1 <= answer[0] < answer[1] <= numbers.length. Assume that each input would have exactly one solution and you may not use the same element twice.
```
Input: numbers = [2,7,11,15], target = 9 Output: [1,2] Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.
Input: numbers = [2,3,4], target = 6 Output: [1,3]
Input: numbers = [-1,0], target = -1 Output: [1,2]
```
# Concept
Array, Hash table
# Solution
1. use Map to check whether the value of target minus current has shown 
```
/*
@param {number[]} nums
@param {number} target
@return {number[]}
*/
var twoSum = function (nums, target) {
  const map = new Map(); //can store any data type as a key and maintain insertion order
  for (let i = 0; i < nums.length; i++) {
    const complementary = target - nums[i];
    if (map.has(complementary)) {
      return [map.get(complementary), i];
    }
    map.set(nums[i], i);
  }
};
```
1-1. use object to store the key-value pair
```
var twoSum = function(nums, target) {
    if(nums.length < 2){ //limitation
		    return false
	  }
    let obj = {} //only store string as a key
    for(let i=0; i<nums.length; i++){
        if (obj[target - nums[i]] !== undefined) {
            return [obj[target - nums[i]], i];
        }
        obj[nums[i]] = i;
    }
};
```
2.
```

```
