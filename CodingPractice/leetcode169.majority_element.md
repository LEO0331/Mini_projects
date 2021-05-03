# Description
Given an array nums of size n, return the majority element. The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

# Concept
Boyer–Moore majority vote algorithm

# Solution
Take two different numbers each time to counter against/delete, the remaining number(s) would be the answer -> time: O(n) space: O(1)
```
/*
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let majority = nums[0]
    let count = 1
    for(let i = 1; i < nums.length; i++){
        if(count === 0){
            majority = nums[i]
        }
        if(nums[i] === majority){
            count++
        }else{
            count--
        }
        /*
        if(nums[i] === majority){
            count++
        }else if(--count === 0){
            majority = nums[i]
            count = 1
        }
        */
    }
    return majority
};
```
