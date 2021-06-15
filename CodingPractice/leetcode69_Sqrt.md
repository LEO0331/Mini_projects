# Description
Given a non-negative integer x, compute and return the square root of x. The decimal digits are truncated, and only the integer part of the result is returned.
# Concept
Number, Binary Search
# Solution
1. find max element^2 <= number
```
/*
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    /*
    let arr = []
    for(let i=0; i*i<=x; i++){
        arr.push(i)
    }
    return arr[arr.length-1]
    */
    let i = 0
    while(i*i<=x){
        i++
    }
    return i-1
};
```
2. binary search to find the nearest element^2 to the number 
```
var mySqrt = function(x) {
    let l = 0
    let r = Math.ceil(x/2)
    let mid = 0
    while(l <= r){
        mid = Math.floor((l + r) / 2)
        if(mid*mid === x) return mid //mid*mid <= x && (mid+1)*(mid+1) > x
        else if(mid*mid < x) l = mid+1
        else r = mid-1
    }
    return r
    /*
    let l = 0
    let r = 94906265; // Math.floor(Math.sqrt(Number.MAX_SAFE_INTEGER))
    while (l <= r) {
        const m = Math.floor(l + (r - l) / 2)
        const mid = m * m
        if (mid === x) {
            return m
        } else if (x > mid) {
            l = m + 1
        } else {
            r = m - 1
        }
    }
    return r
    */
}
```
