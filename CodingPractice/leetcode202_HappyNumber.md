# Description
Determine if a number n is happy; return true if n is a happy number, and false if not. A happy number is a number defined by the following process:
- Starting with any positive integer, replace the number by the sum of the squares of its digits.
- Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
- Those numbers for which this process ends in 1 are happy.
# Concept
Hash Table
# Solution
use map to store calculated number, if the number appears again, an infinite loop occurs and return false
```
/*
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let map = {}
    while(!map[n] && n!=1){
        map[n] = n
        n.toString().split("").map((r,i) => { //forEach
            if(i === 0){ //clear n at each round
                n = 0
            }
            n += r*r
        })
        n = parseInt(n)
    }
    return n === 1
};
```
# Complement
- if n >= 10, the final calculation will between 1~9
- only 1 & 7 is happy number
- determine whether the final result is 1 or not
```
var isHappy = function(n) {
    while(n>6){
        n.toString().split("").forEach(function(r,i){ //map
            if(i === 0) r = 0
            n += r*r
        })
    }
    return n === 1
};
```
