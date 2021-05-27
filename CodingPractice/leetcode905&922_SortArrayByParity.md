# Description
1. Given an array nums of non-negative integers, return an array consisting of all the even elements of nums, followed by all the odd elements of nums. You may return any answer array that satisfies this condition.
```
Input: nums = [3,1,2,4] Output: [2,4,3,1] The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
```
2. Given an array of integers nums, half of the integers in nums are odd, and the other half are even. Sort the array so that whenever nums[i] is odd, i is odd, and whenever nums[i] is even, i is even. Return any answer array that satisfies this condition.
```
Input: nums = [4,2,5,7] Output: [4,5,2,7] Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.
Input: nums = [2,3] Output: [2,3]
```
# Concept
Array, Two Pointers
# Solution
1-1. push elements based on the condition to new array
```
**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let arr = []
    for(let i=0; i<nums.length; i++){ //nums.forEach(n => n % 2 === 0 ? arr.unshift(n) : arr.push(n))
        if(nums[i]%2 !== 0) arr.push(nums[i])
        else arr.unshift(nums[i])
    }
    return arr //return [...nums.filter(n => n % 2 === 0), ...nums.filter(n => n % 2 !== 0)]
};
```
1-2. in-place swap the current array
```
**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let pointer = 0
    for(let i=0; i<nums.length; i++){
        if(nums[i]%2 === 0){ //swap
            let temp = nums[pointer] 
            nums[pointer] = nums[i]
            nums[i] = temp
            pointer++
        }
    }
    return nums
};
```
2-1. two pointers record odd/even position and push to another array -> time/space: O(n)
```
/*
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    let odd = 1
    let even = 0
    let arr = []
    for(let i=0; i<nums.length; i++){
        if(nums[i]%2 === 0){
            arr[even] = nums[i]
            even += 2
        }else{
            arr[odd] = nums[i]
            odd += 2
        }
    }
    return arr
    /*
    let res = new Array(A.length)
    for(let i = 0, even = 0, odd = 1; i < nums.length; i++) {
        if(nums[i]%2 === 0){
            res[even] = nums[i]
            even += 2
        }else{
            res[odd] = nums[i]
            odd += 2
        }
    }
    return res
    */
};
```
2-2 filter all odd/even elements and push them into an array -> time/space: O(n)
```
var sortArrayByParityII = function(nums) {
    let odd = nums.filter(i => i % 2 === 0)
    let even = numsfilter(i => i % 2 !== 0)
    let arr = []
    for(let i=0; i<nums.length/2; i++){
        arr.push(odd[i], even[i])
    }
    return arr
};
```
2-3 two pointers with in-place swap -> time: O(n), space: O(1)
```
var sortArrayByParityII = function(nums) {
    let oddpointer = 1
    const swap = (i, j) => {
        let temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp
    }
    for(let i=0; i<nums.length; i+=2){
        if(nums[i] & 1) {
            while(nums[oddpointer] & 1){
                oddpointer += 2
            }
            swap(i, oddpointer)
        }
    }
    return nums
};
```
