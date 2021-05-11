# Description
Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
# Concept
Two Pointers
# Solution
1. formatting the string and compare it with its reversed format
```
/*
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    //https://www.w3schools.com/jsref/jsref_obj_regexp.asp
    s = s.toLowerCase() //ignore cases
    s = s.replace(/[^a-z0-9]/gi,"") //global, case-insensitive
    return s === s.split("").reverse().join("")
```
2. head and tail pointers to check whether the chracter is the same -> time: O(n), space: O(1)
```
var isPalindrome = function(s) {
    //https://www.w3schools.com/jsref/jsref_obj_regexp.asp
    s = s.toLowerCase() //ignore cases
    s = s.replace(/[^a-z0-9]/gi,"") //global, case-insensitive
    let l = 0
    let r = s.length-1
    while(l < r){
        if(s[l] === s[r]){
            l++
            r--
        }else{
            return false //break
        }
    }
    return true //l >= r
};
```
