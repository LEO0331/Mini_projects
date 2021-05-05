# Description
Given two strings s and t, return true if t is an anagram of s, and false otherwise. Assume that the string contains only lowercase alphabets. Follow up: inputs contain Unicode characters.
# Concept
Hash Table
# Solution
Built a hash table recording and counting all appeared elements, compared two the second string by finding these elements are their numbers
```
/*
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false
    }
    //return s.split("").sort().join("") === t.split("").sort().join("")
    let map = {}
    for (let i=0; i<s.length; i++){
        map[s[i]] = (map[s[i]] || 0) + 1 //first map[s[i]]: undefined
    }
    for(let e of t){
        if (!map[e]) return false
        map[e]--
    }
    return true
};
```
