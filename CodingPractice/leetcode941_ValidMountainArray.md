# Description
Given an array of integers arr, return true if and only if it is a valid mountain array. Recall that arr is a mountain array if and only if:
- arr.length >= 3
- There exists some i with 0 < i < arr.length - 1 such that: arr[0] < arr[1] < ... < arr[i - 1] < arr[i] AND arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
```
Input: arr = [0,3,2,1] Output: true
Input: arr = [3,5,5] Output: false -> left !== right
Input: arr = [2,1] Output: false
```
# Concept
Array, Two Pointers
# Solution
1. use two booleans to record the increase/decrease trend
```
/*
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr){
    let increase = false
    let decrease = false
    if(arr.length <= 2) return false
    for(let i=0; i<arr.length-1; i++){
        if(arr[i] < arr[i+1] && !decrease){
            increase = true
            continue
        }
        decrease = true
        if(arr[i] <= arr[i+1]) return false
    }
    /*
    for(let i=1, j=0; i<arr.length; i++, j++){
        if(arr[j] < arr[i] && !decrease){
            increase = true
            continue
        }
        decrease = true
        if(arr[j] <= arr[i]) return false
    }
    */
    return increase && decrease
};
```
2. use two pointers left-end and right-end, performing their movements to the peak
```
var validMountainArray = function(arr){
    let left = 0, right = arr.length - 1
    while(arr[left] < arr[left + 1] || arr[right] < arr[right - 1]) {
        if(arr[left] < arr[left + 1]) left++ //++left
        if(arr[right] < arr[right - 1]) right-- //--right
    }
    if(left !== right || left === arr.length - 1 || right === 0) return false //no intersection or reach the end
    return true
}
```
