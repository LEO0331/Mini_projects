# Description
Given a pattern and a string s, find if s follows the same pattern. Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.
- pattern contains only lower-case English letters.
- s contains only lower-case English letters and spaces ' '.
- s does not contain any leading or trailing spaces.
- All the words in s are separated by a single space.
```
Input: pattern = "abba", s = "dog cat cat dog" Output: true
Input: pattern = "abba", s = "dog cat cat fish" Output: false
Input: pattern = "aaaa", s = "dog cat cat dog" Output: false
Input: pattern = "abba", s = "dog dog dog dog" Output: false
```
# Concept
Hash, Map
# Solution
1. use a map to record the pattern check the size of key-value pair
```
/*
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) { //similar to leetcode205
    const map = new Map()
    s = s.split(' ')
    //pattern = pattern.split('')
    if (pattern.length !== s.length) return false
    for(let i=0; i<pattern.length; i++){
        if(!map.has(pattern[i])) map.set(pattern[i], s[i])
        else{
            if(map.get(pattern[i]) !== s[i]) return false
        }
    }
    return new Set([...map.values()]).size === map.size
    /*
    s = s.split(' ')
    const map = {}
    pattern = pattern.split('')
    if (s.length !== pattern.length) return false
    for (let i = 0; i < pattern.length; i++) {
        if (!map[pattern[i]]) {
            map[pattern[i]] = s[i]
        } else {
            if (map[pattern[i]] !== s[i]) return false
        }
    }
    return new Set(Object.keys(map)).size === new Set(Object.values(map)).size
    */
};
```
2. use two maps to record the matching relationship
```
var wordPattern = function(pattern, s) {
    s = s.split(' ')
    if (pattern.length !== s.length) return false
    const m = new Map()
    const n = new Map()
    for(let i=0; i<pattern.length; i++){  
        if(!m.has(pattern[i])) m.set(pattern[i], s[i])
        else if(m.get(pattern[i]) !== s[i]) return false
        if(!n.has(s[i])) n.set(s[i], pattern[i])
        else if(n.get(s[i]) !== pattern[i]) return false
    }
    return true
    /*
    let m = {}
    let n = {}
    s = s.split(/\s/)
    if(pattern.length != s.split(/\s/).length) return false
    for(let i in pattern){
        if(!patternMap[pattern[i]]) patternMap[pattern[i]] = s[i]
        else if(patternMap[pattern[i]] != s[i]) return false
        if(!strMap[s[i]]) strMap[s[i]] = pattern[i]
        else if(strMap[s[i]] != pattern[i]) return false
    }
    return true
    */
}
```
