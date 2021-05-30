# Description
Given an array of integers arr, return true if we can partition the array into three non-empty parts with equal sums. Formally, we can partition the array if we can find indexes i + 1 < j with (arr[0] + arr[1] + ... + arr[i] == arr[i + 1] + arr[i + 2] + ... + arr[j - 1] == arr[j] + arr[j + 1] + ... + arr[arr.length - 1])
```
Input: arr = [0,2,1,-6,6,-7,9,1,2,0,1] Output: true Explanation: 0 + 2 + 1 = -6 + 6 - 7 + 9 + 1 = 2 + 0 + 1
Input: arr = [0,2,1,-6,6,7,9,-1,2,0,1] Output: false Input: arr = [3,3,6,5,-2,2,5,1,-9,4]
Output: true Explanation: 3 + 3 = 6 = 5 - 2 + 2 + 5 + 1 - 9 + 4
```
# Concept
Array, Two Pointers, Sliding Window
# Solution
1. record each slicing point and compare with 3
```
/*
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function(arr) {
    let target = arr.reduce((a,b) => a+b)
    if(target%3) return false
    let s = target/3
    let counter = 0
    let a = 0
    for(let i=0; i<arr.length; i++){
        a += arr[i]
        if(a === s){
            counter++
            a = 0
        }
    }
    return counter >= 3
};
```
# Complement 
```
var canThreePartsEqualSum = function(arr) { //two start-end pointers and sliding window
    let target = arr.reduce((a,b) => a+b)
    if(target%3) return false
    let s = target/3
    let p1 = 1
    let p2 = arr.length - 2
    let sum1 = arr[0]
    let sum3 = arr[arr.length - 1]
    let sum2 = target - sum1 - sum3
    while (p1<p2 && (sum1 !== s || sum2 !== s)) { 
        if (sum1 !== s) { //sliding window
            sum1 += arr[p1]
            sum2 -= arr[p1] 
            p1++
        }
        if (sum3 !== s) {
            sum3 += arr[p2]
            sum2 -= arr[p2]
            p2--
        }       
    }
    return sum1 === sum2 && sum2 === sum3 //unable to handle cases [10,-10,10,-10,10,-10,10,-10] and [1,-1,1,-1]
};
```
