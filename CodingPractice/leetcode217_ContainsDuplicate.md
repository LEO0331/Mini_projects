# Description
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
# Concept
Array, Hash table
# Solution
Create a hash table/map to record elements
```
/*
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    //let obj = {}
    const map = new Map()
    for(let i = 0; i < nums.length; i++){
        /*
        if(!obj[nums[i]]){
            obj[nums[i]] = true 
        }else{
            return true
        }
        */
        if(map.has(nums[i])){
            return true
        }else{
            map.set(nums[i], true) //set to i: slower
        }
    }
    return false
};
```
