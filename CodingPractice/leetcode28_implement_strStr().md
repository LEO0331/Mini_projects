# Description
Implement strStr(). Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
- What should we return when needle is an empty string? This is a great question to ask during an interview.
- For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().
# Concept
Two Pointers
# Solution
1. slow and fast pointers to record the current comparing number and return the position of the first matching chracters if it exists
```
/*
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    //return haystack.indexOf(needle)
    if(needle.length === 0) return 0
    let slow = 0
    for(let i=0; i<haystack.length; i++){
        if(haystack[i] === needle[slow]){
            if(slow === needle.length-1){
                return i-slow
            }
            slow++
        }else{//i will add 1 after this round
            i -= slow //previous starting point
            slow = 0
        }
    }
    return -1
};
```
2. use subString to compare
```
var strStr = function(haystack, needle) {
    if(needle.length === 0) return 0
    for(let i=0; i<haystack.length; i++){
        if(haystack.substr(i,needle.length) === needle){
            return i
        }
    }
    return -1
}
```
