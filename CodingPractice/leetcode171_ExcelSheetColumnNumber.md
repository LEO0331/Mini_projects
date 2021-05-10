# Description
Given a string columnTitle that represents the column title as appear in an Excel sheet, return its corresponding column number.
# Concept
Number, ANSI CODE
# Solution
Different characters represent different number, and times 26 based on the digit
```
/*
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let ans = 0
    let exp = 0
    for(let i = columnTitle.length-1; i >= 0; i--){
        let v = columnTitle.charCodeAt(i) - 64 //map to record corresponding character-number(key-value) pair
        ans += v*Math.pow(26,exp++)
    }
    return ans
    /*
    let ans = 0
    let exp = columnTitle.length-1
    for(let i = 0; i < columnTitle.length; i++){
        let v = columnTitle.charCodeAt(i) - 64
        ans += v*Math.pow(26,exp--)
    }
    return ans
    */
};
```
