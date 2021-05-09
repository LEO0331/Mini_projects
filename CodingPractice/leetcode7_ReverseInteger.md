# Description
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0. Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
# Concept
Number
# Solution
Determine positive/negative value, add the reminder of the current number to the end of the answer, looping through all digits and return the value that is not larger/smaller than the given condition
```
//Number.MAX_VALUE -> js: 2^53 - 1
//Number.MIN_VALUE -> js: 1 - 2^53
/*
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const MAX = Math.pow(2, 31) - 1
    //const MIN = -1 * Math.pow(2, 31)
    const isNeg = x < 0
    let num = 0
    x = Math.abs(x) //absolute value
    while(x > 0){
        let r = x%10
        x = Math.floor(x/10)
        num = num*10
        num += r
    }
    if(num > MAX) return 0
    return isNeg ? num * -1 : num
};
```
