# Description
Given an integer n, return the number of trailing zeroes in n!. Follow up: solution that works in logarithmic time complexity.
# Concept
Number
# Solution
Tailing 0 is from 2 times 5 and we know that 2 is much more than 5, so the question is converted to count how many 5 in this number -> time: O(log(n)), space: O(1)
```
/*
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    //if(n < 5) return 0
    let ans = 0
    while(n >= 5){
        ans += parseInt(n/5) //ans += Math.floor(n/5)
        n = parseInt(n/5) //n /= 5; n = Math.floor(n/5)
    }
    return ans
    /* Recursion
    if (n === 0) return n
    return Math.floor(n/5) + trailingZeroes(Math.floor(n / 5))
    */
};
```
