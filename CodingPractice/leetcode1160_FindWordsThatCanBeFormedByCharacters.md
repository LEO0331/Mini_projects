# Description
You are given an array of strings words and a string chars. A string is good if it can be formed by characters from chars (each character can only be used once). Return the sum of lengths of all good strings in words
```
Input: words = ["cat","bt","hat","tree"], chars = "atach" Output: 6 Explanation: The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.
Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr" Output: 10 Explanation: The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10.```
```
# Concept
Array, Map, Reduce
# Solution
1. use reduce to replace all elemnts in words from chars and count how many totally replaced empty string remains
```
/*
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    return words.reduce((count, word, idx) => {
        for (const c of [...chars]) word = word.replace(c, '')
        return count + (word.length === 0 ? words[idx].length : 0)
    }, 0)
};
```
2. use map to record all elements with count and compare with the words string array 
```
var countCharacters = function(words, chars) {
    const map = new Map()
    for(let i=0; i<chars.length; i++){
        if(map.has(chars[i])) map.set(chars[i], map.get(chars[i]) + 1)
        else map.set(chars[i], 1)
    }
    const reducer = (acc, cur) => {
        const ref = new Map(map)
        for(let i = 0; i< cur.length; i++){
            if(ref.has(cur[i]) && ref.get(cur[i]) > 0){
                if(i === cur.length - 1) acc += cur.length //last element, add all that string
                ref.set(cur[i], ref.get(cur[i]) - 1) //check whether word contain all element of chars
            }else{
                break
            }
        }
        return acc  
    }
    return words.reduce(reducer, 0)
}
```
