# Description
Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements. Find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.
```
Input: nums = [1,2,2,3,1] Output: 2 Explanation: The input array has a degree of 2 because both elements 1 and 2 appear twice. Of the subarrays that have the same degree:[1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2] The shortest length is 2. So return 2.
Input: nums = [1,2,2,3,1,4,2] Output: 6 Explanation: The degree is 3 because the element 2 is repeated 3 times. So [2,2,3,1,4,2] is the shortest subarray, therefore returning 6.
```
# Concept
Array, Hash
# Solution
1. use two hash maps to record the most appearance elements and their first appearance 
```
/*
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    let count = new Map()
    let first = new Map() //first occurance
    let max = 0
    let minLength = 0
    for(let i=0; i<nums.length; i++){
        if(!first.has(nums[i])) first.set(nums[i], i)
        count.set(nums[i], (count.has(nums[i]) ? count.get(nums[i]) : 0) + 1)
        if(count.get(nums[i]) > max){
            max = count.get(nums[i])
            minLength = i - first.get(nums[i]) + 1
        }else if(count.get(nums[i]) === max){
            minLength = Math.min(minLength, i - first.get(nums[i]) + 1)
        }
    }
    return minLength 
};
```
2. use object to record the most elements and their first and last indexes 
```
const findShortestSubArray = (nums) => {
    let count = {}
    let first = {}
    let last = {}
    let max = 0
    for (let i = 0; i < nums.length; i++) {
        const k = nums[i]
        count[k] = (count[k] || 0) + 1
        max = Math.max(max, count[k])
        if (first[k] === undefined) first[k] = i
        last[k] = i
    }
    let res = nums.length
    for (const k in count) { //find all elements with max appearance 
        if (count[k] === max) res = Math.min(res, last[k] - first[k] + 1)
    }
    return res
};
```
