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
Hash
# Solution

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
