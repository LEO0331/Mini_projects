# Description
You are given a sorted unique integer array nums. Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums. Each range [a,b] in the list should be output as:
- "a->b" if a != b
- "a" if a == b
```
Input: nums = [0,1,2,4,5,7] Output: ["0->2","4->5","7"]
Explanation: The ranges are:
[0,2] --> "0->2"
[4,5] --> "4->5"
[7,7] --> "7"
Input: nums = [0,2,3,4,6,8,9] Output: ["0","2->4","6","8->9"]
Explanation: The ranges are:
[0,0] --> "0"
[2,4] --> "2->4"
[6,6] --> "6"
[8,9] --> "8->9"
Input: nums = [-1] Output: ["-1"]
Input: nums = [] Output: []
Input: nums = [0] Output: ["0"]
```
# Concept
Array, Two Pointers
# Solution
Two pointers to record each start position and skip missing ones -> time: O(n), space: O(1)
```
/*
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    /*
    let ans = []
    for(let i=0, l=nums[0]; i<nums.length; i++){
        if(nums[i+1] !== nums[i]+1){
            ans.push(l === nums[i] ? '' + nums[i] : l + '->' + nums[i])
            l = nums[i+1]
        }
    }
    return ans
    */
    let i = 0, ans = []
    for (let j = 0; j < nums.length; j++) {
        if (nums[j+1] !== nums[j] + 1) {
            if (i === j) ans.push(nums[i] + "") //only one element
            else ans.push(nums[i] + "->" + nums[j]) //ans.push(i == j ? nums[i] + "" : nums[i] + "->" + nums[j])
            i = j + 1
        }
    }
    return ans
};
```
