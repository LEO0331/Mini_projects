# Description
Given an integer n, return true if it is a power of three. Otherwise, return false. An integer n is a power of three, if there exists an integer x such that n == 3^x.
# Concept
Number
# Solution
Number divides 3 to check whether the remainder = 0
```
/*
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    /*
    if (n <= 0) return false //consider negative and 0
    while(n > 1){
        if(n%3 !== 0) return false
        n = n/3
    }
    return true
    */
    /* less memory
    while (n > 1) {
        if (n % 3 === 0) n /= 3
        else break //return false
    }
    return n === 1
    */
    for (let i = 1; i <= n; i *= 3) { //fastest
        if (i === n) {
            return true
        }
    }
    return false
};
```
