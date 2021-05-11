# Description
Write a function that reverses a string. The input string is given as an array of characters s. Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
# Concept
Two Pointers
# Solution
Loop half of the array to perform in-place swap
```
/*
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    for(let i=0; i<s.length/2; i++){
        let temp = s[i]
        s[i] = s[s.length-1-i]
        s[s.length-1-i] = temp
    }
    /* Iteration 
    for (let [a, b] = [0, s.length - 1]; a < b; a++, b--) {
        [s[a], s[b]] = [s[b], s[a]]
    }
    */
    /* Recursion 
    reverse(0, s.length - 1)
    function reverse(i, j) {
        if (i >= j) return
        [s[i], s[j]] = [s[j], s[i]]
        reverse(i + 1, j - 1)
    }
    */
};
```
