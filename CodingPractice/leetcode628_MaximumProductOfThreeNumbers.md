# Description
Given an integer array nums with -1000 <= nums[i] <= 1000, find three numbers whose product is maximum and return the maximum product.
# Concept
Array
# Solution
1. sort the array in ascending order and consider two cases
```
/*
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    let arr = nums.sort((a,b) => a-b)
    let p = arr[arr.length-1]*arr[arr.length-2]*arr[arr.length-3]
    let n = arr[arr.length-1]*arr[0]*arr[1]
    return Math.max(p,n)
};
```
2. determine smallest two negative numbers and largest three positive numbers
```
var maximumProduct = function(nums) {
    let max1, max2, max3, min1, min2
    max1 = max2 = max3 = -Infinity
    min1 = min2 = Infinity
    for(let n of nums) { //swap elements 
        if (n <= min1) { //less than min1 & min2
            min2 = min1
            min1 = n
        } else if (n <= min2) { //between min1 and min2
            min2 = n
        }
        if (n >= max1) { //greater than max1, max2 & max3
            max3 = max2
            max2 = max1
            max1 = n
        } else if (n >= max2) { //between max1 & max2
            max3 = max2
            max2 = n
        } else if (n >= max3) { //between max2 & max3
            max3 = n
        }
    }
    return Math.max(min1*min2*max1, max1*max2*max3)    
};
```
