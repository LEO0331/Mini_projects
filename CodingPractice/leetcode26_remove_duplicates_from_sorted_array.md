# Description
Given a sorted array nums, remove the duplicates in-place so that each element appears only once and returns the new length. The input array is passed in by reference so that the returned integer would be iterated auto. No extra space is allowed for another array. Must modify the input array in-place with O(1) extra memory.

# Concept
Array, Two-pointer 

# Solution
Use/Draw fast and slow pointers to record. If they point to different value, both pointers move forward. If they point to same value, only fast pointer move forward(actually fast pointer keep moving). The final result will be slow pointer add 1 because it represents the array length.
```
/*
 * @param {number[]} nums
 * @return {number}
 */
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
# Complement 
3 kinds of pointers:
- Fast-slow pointers: often used in sliding window
```
l = r = 0
while(condition 1)
    if(condition 2)
        l++
    r++
return ans
```
- Left-right endpoints pointers: often used in dichotomy
```
l = 0
r = n-1
while l < r
    if (found)
        return ans
    if (condition 1)
        l++
    else if (condition 2)
        r--
return notFound
```
- Fixed-spacing pointers: often used in sliding window
```
l = 0
r = k
while (condition 1)
    self-define condition 2
    l += 1
    r += 1
return ans
```
