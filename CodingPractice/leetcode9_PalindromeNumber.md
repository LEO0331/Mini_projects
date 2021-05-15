# Description
Given an integer x, return true if x is palindrome integer. An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.
```
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
```
# Concept
Number
# Solution
1. reverse a number by dividing 10 and put the reminder as the largest digit in another number 
```
/*
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) return false
    let n = 0
    let num = x //store original number for later comparison
    while(x > 0){ //x !== 0
        n *= 10
        n += x%10 //x /= 10 will remain float
        x = Math.floor(x/10) //parseInt(x/10)
    }
    return num == n
};
```
2. convert a number to string then array, apply shift() & pop() to compare the first/last element of this array
```
var isPalindrome = function(x) {
    const arr = String(x).split('')   
    while(arr.length > 1) {
        if(arr.shift() !== arr.pop()) return false
    }
    return true
};
```
