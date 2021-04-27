# Description
Given a sorted array nums, remove the duplicates in-place so that each element appears only once and returns the new length. The input array is passed in by reference so that the returned integer would be iterated auto. No extra space is allowed for another array. Must modify the input array in-place with O(1) extra memory.

# Concept
Array, Two-pointer 

# Solution
Use/Draw fast and slow pointers to record. If they point to different value, both pointers move forward. If they point to same value, only fast pointer move forward(actually fast pointer keep moving). The final result will be slow pointer add 1 because it represents the array length.
```
var removeDuplicates = function(nums) {
    const len = nums.length  
    if(len === 0){
        return 0
    }
    let slowPointer = 0
    for(let fastPointer = 0; fastPointer < len; fastPointer++){
        if(nums[slowPointer] !== nums[fastPointer]){
            slowPointer++
            nums[slowPointer] = nums[fastPointer]
        }
    }
    return slowPointer+1
};
```
