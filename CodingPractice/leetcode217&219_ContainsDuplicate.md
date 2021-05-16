# Description
1. Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
2. Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k
```
Input: nums = [1,2,3,1], k = 3 Output: true
Input: nums = [1,0,1,1], k = 1 Output: true
Input: nums = [1,2,3,1,2,3], k = 2 Output: false
```
# Concept
Array, Hash 
# Solution
1. create a hash table to record visited elements -> time/space: O(n)
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
2. create a hash map to record visited elements and compare its abs() with the target -> time/space: O(n)
```
/*
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const map = new Map()
    for(let i = 0; i < nums.length; i++){
        if(map.has(nums[i])){ //if(map.has(nums[i]) && i - map.get(nums[i]) <= k) return true
            if(Math.abs(map.get(nums[i]) - i) <= k) return true
        }
        map.set(nums[i], i) //reset the visited element
    }
    return false
    /*
    if(nums.length <= 1) return false
    const obj = {}
    for(let i = 0; i < nums.length; i++) {
        const num = nums[i]
        if (obj[num] !== undefined && i - obj[num] <= k) return true
        obj[num] = i
    }
    return false
    */
};
```
