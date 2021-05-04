# Description
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice.

# Concept
Array, Hash table

# Solution
Use Map to check whether the value of target minus current has shown 

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
Use object to store the key-value pair
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
