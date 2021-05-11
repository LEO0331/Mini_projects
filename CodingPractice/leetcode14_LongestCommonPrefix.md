# Description
Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string "".
# Concept
String
# Solution
1. record the first element and compare its characters with other strings to determine the current longest common prefix
```
/*
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(!strs || strs.length === 0) return ""
    let s = strs[0]
    for(let i = 1 ; i<strs.length ; i++){
        let c = strs[i]
        let j = 0
        for(; j<s.length; j++){
            if(s[j] !== c[j]){ //c.charAt(j)
                break
            } 
        }
        s = s.slice(0,j) //new same common characters
    }
    return s
};
```
2. implement a reduce function to check characters in each string
```
var longestCommonPrefix = function(strs) { //slower with more space needed
    if(!strs || strs.length === 0) return ""
    return strs.reduce((prev, next) => {
        let i = 0
        while (prev[i] && next[i] && prev[i] === next[i]) i++
        return prev.slice(0, i)
    })
}
```
