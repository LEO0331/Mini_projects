# Description
1. Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice.
2. Given an array of integers numbers that is already sorted in ascending order, find two numbers such that they add up to a specific target number. Return the indices of the two numbers (1-indexed) as an integer array answer of size 2, where 1 <= answer[0] < answer[1] <= numbers.length. Assume that each input would have exactly one solution and you may not use the same element twice.
```
Input: numbers = [2,7,11,15], target = 9 Output: [1,2] Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.
Input: numbers = [2,3,4], target = 6 Output: [1,3]
Input: numbers = [-1,0], target = -1 Output: [1,2]
```
# Concept
Array, Hash table, Two Pointers
# Solution
1. use Map to check whether the value of target minus current has shown 
```
/*
@param {number[]} nums
@param {number} target
@return {number[]}
*/
var twoSum = function (nums, target) {
    const map = new Map() //can store any data type as a key and maintain insertion order
    for (let i = 0; i < nums.length; i++) {
        const complementary = target - nums[i]
        if (map.has(complementary)) {
            return [map.get(complementary), i]
        }
        map.set(nums[i], i)
    }
};
```
1-1. use object to store the key-value pair
```
var twoSum = function(nums, target) {
    if(nums.length < 2) return false //limitation 
    let obj = {} //only store string as a key
    for(let i=0; i<nums.length; i++){
        if (obj[target - nums[i]] !== undefined) return [obj[target - nums[i]], i]
        obj[nums[i]] = i
    }
};
```
2. use hashmap to store existing value -> time/space: O(n)
```
/*
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let map = new Map()
    for(let i=0; i<numbers.length; i++){
        let complementary = target - numbers[i]
        if(map.has(complementary)) return [map.get(complementary), i+1]
        map.set(numbers[i], i+1)
    }
};
var twoSum = function (numbers, target) {
    const obj = {} //use object to store the key-value pair
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i]
        if (obj[target - element] !== void 0) return [obj[target - element], i + 1]
        obj[element] = i + 1
    }
    return []
};
```
2-2. left/right two start-end pointers are used when an array is sorted, if value of left + right is larger than target, right move one left, otherwise left move one right -> time: O(n), space: O(1)
```
var twoSum = function(numbers, target) {
    let i = 0
    let j = numbers.length - 1
    while(i < j) {
        if (numbers[i] + numbers[j] == target) return [i+1, j+1]
        else if (numbers[i] + numbers[j] > target) j--
        else i++
    }
};
```
