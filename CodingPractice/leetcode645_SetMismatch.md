# Description
You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number. You are given an integer array nums representing the data status of this set after the error. Find the number that occurs twice and the number that is missing and return them in the form of an array.
```
Input: nums = [1,2,2,4] Output: [2,3]
Input: nums = [1,1] Output: [1,2]
```
# Concept
Hash, Object
# Solution
1. use hash table to record existing number and find the missing one
```
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let map = new Map()
    let len = nums.length
    let sum = (len*(len+1))/2
    let s = 0, a = 0 //Supplement calculation
    for(let i=0; i<len; i++){
        if(map.has(nums[i])) a = nums[i]
        else{
            map.set(nums[i], true) //nums[i]
            s+=nums[i]
        }
    }
    return [a, sum - s]
};
```
2. use Object to record existing number and find the missing one
```
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let obj = {}
    let len = nums.length
    let sum = (len*(len+1))/2
    let s = 0, a = 0 
    for(let i of nums){
        if(obj[i]) a = i
        else{
            obj[i] = true //i
            s+=i
        }
    }
    return [a, sum - s]
};
```
