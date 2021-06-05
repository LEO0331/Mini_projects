# Description
We define a harmonious array as an array where the difference between its maximum value and its minimum value is exactly 1. Given an integer array nums, return the length of its longest harmonious subsequence among all its possible subsequences. A subsequence of array is a sequence that can be derived from the array by deleting some or no elements without changing the order of the remaining elements.
```
Input: nums = [1,3,2,2,5,2,3,7] Output: 5 Explanation: The longest harmonious subsequence is [3,2,2,2,3].
Input: nums = [1,2,3,4] Output: 2
Input: nums = [1,1,1,1] Output: 0
```
# Concept
Hash, Map
# Solution
Use map or object to record numbers of each element and compare the biggest value gaps between the current key and previous one
```
/*
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    let map = new Map()
    let ans = 0
    for(let i=0; i<nums.length; i++){
        if(map.has(nums[i])) map.set(nums[i], map.get(nums[i])+1)
        else map.set(nums[i], 1)
    }
    for(const [key, value] of map){
        if(map.get(key - 1)) ans = Math.max(ans, map.get(key - 1) + value) //map.get(key)
    }
    return ans
    /*
    let map = {}, ans = 0
    for (let n of nums) map[n] = ~~map[n] + 1
    for (let n in map) if (map[+n+1]) ans = Math.max(res, map[n] + map[+n+1])
    return ans  
    */
};
```
