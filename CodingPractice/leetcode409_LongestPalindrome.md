# Description
Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters. Letters are case sensitive, for example, "Aa" is not considered a palindrome here. s consists of lowercase and/or uppercase English letters only.
```
Input: s = "abccccdd" Output: 7 Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
Input: s = "a" Output: 1
Input: s = "bb" Output: 2
```
# Concept
Hash, Map
# Solution
1. create a map to record the appearance of chars and count based on even/odd
```
/*
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const map = new Map()
    let ans = 0
    for(let i=0; i<s.length; i++){
        if(map.has(s[i])) map.set(s[i], map.get(s[i])+1)
        else map.set(s[i], 1)
    }
    let flag = 0
    //for (const [key, value] of map)
    for(i of map.values()){ //return a new Iterator object
	    if(i%2 === 0) ans += i
        else{
            ans += i-1
            flag = 1
        }
    }
    return ans+flag
};
```
2. use an object to count even/odd of values from keys
```
var longestPalindrome = function(s) {
    let ans = 0
    let obj = {}
    for(let char of s){
        obj[char] = (obj[char] || 0) + 1
        if(obj[char] % 2 === 0) ans += 2
    }
    return s.length > ans ? ans + 1 : ans
    /*
    let obj = {}
    for(let i of s){ //string
        obj[i] = obj[i]? obj[i]+1: 1
    }
    let count = 0
    let flag = 0
    for(let i in obj){ //object
        if(obj[i]%2 == 0) count += obj[i]
        else {
            count += obj[i] -1
            flag = 1
        }
    }
    return count+flag
    */
};
```
# Complement 
- for...of statement: create a loop iterating over iterable objects, including: built-in String, Array, array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined iterables
- for...in statement: iterate over all enumerable properties of an object that are keyed by strings (ignoring ones keyed by Symbols), including inherited enumerable properties
