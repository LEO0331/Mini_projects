# Description
Given a string s, return the first non-repeating character in it and return its index. If it does not exist, return -1.
# Concept
Hash Table
# Solution
1. build a hash table for all elements and count, returning the first element of count = 1 
```
/*
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let map = {}
    for(let i=0; i<s.length; i++){
        //map[s[i]] ? map[s[i]]++ : map[s[i]] = 1
        map[s[i]] = (map[s[i]] || 0) + 1
    }
    for(let i=0; i<s.length; i++){
        if(map[s[i]] === 1) {
            return i
        }
    }
    return -1
};
```
2. Iterate from the head and bottom of the string to check whether the element exists only once
```
var firstUniqChar = function(s){
     for(i=0; i<s.length; i++)
        if(s.indexOf(s[i]) === s.lastIndexOf(s[i])) return i
     return -1
}
```
