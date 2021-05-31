# Description
Given a fixed length array arr of integers, duplicate each occurrence of zero, shifting the remaining elements to the right. Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place, do not return anything from your function.
```
Input: [1,0,2,3,0,4,5,0] Output: null Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]
Input: [1,2,3] Output: null Explanation: After calling your function, the input array is modified to: [1,2,3]
```
# Concept
Array, Splice
# Solution
Add a zero by splice() in current 0 position and remove the last element of the array 
```
/*
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    for(let i=0; i<arr.length; i++){
        if(arr[i] === 0){
            arr.splice(i, 0, 0) //arr.splice(arr.indexOf(0, i), 0, 0)
            arr.pop() //remove the last element
            i++
        }
    }
};
```
