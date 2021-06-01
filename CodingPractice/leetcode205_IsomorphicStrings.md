# Description
Given two strings s and t, determine if they are isomorphic. Two strings s and t are isomorphic if the characters in s can be replaced to get t. All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.
```
Input: s = "egg", t = "add" Output: true
Input: s = "foo", t = "bar" Output: false
Input: s = "paper", t = "title" Output: true
```
# Concept
Hash
# Solution
1. map two arrays based on their value and use set() to calculate how many values and compare
```
/*
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    //string toCharArray() to use forEach
    const m = new Map()
    for(let i=0; i<s.length; i++){
        if(!m.has(s[i])) m.set(s[i], t[i])
        else {
            if(m.get(s[i]) !== t[i]) return false
        }
    }
    return new Set([...m.values()]).size === m.size //"badc""baba"
}
```
2. find the index of the next matching character, If they do not match, characters can not be replaced/not isomorphic
```
var isIsomorphic = function(s, t) { //https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
    for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i],i+1) !== t.indexOf(t[i],i+1)) return false
    }
    return true
}
```
3. use two maps and compare with each other
```
var isIsomorphic = function(s, t) { 
    const m = new Map()
    const n = new Map()
    for(let i=0; i<s.length; i++){  
        if(!m.has(s[i])) m.set(s[i], t[i])
        else if(m.get(s[i]) !== t[i]) return false
        if(!n.has(t[i])) n.set(t[i], s[i])
        else if(n.get(t[i]) !== s[i]) return false
    }
    return true
    /*
    let S = {}
    let T = {}
    for(let i in s){
        let valueS = s[i]
        let valueT = t[i]
        if(!S[s[i]]) S[s[i]] = t[i]
        else if(S[s[i]] != t[i]) return false
        if(!T[t[i]]) T[t[i]] = s[i]
        else if(T[t[i]] != s[i]) return false
    }
    return true
    */
}
```
