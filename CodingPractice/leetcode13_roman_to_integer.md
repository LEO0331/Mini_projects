# Description
Roman numerals are represented by seven different symbols:
```
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
```
2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:
- I can be placed before V (5) and X (10) to make 4 and 9. 
- X can be placed before L (50) and C (100) to make 40 and 90. 
- C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.
# Concept
Number, Hash
# Solution
Build hash to convert roman symbols and compare the current number with the next one to determine whether they fit into special cases(minus)
```
/*
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var map = {
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000
    }
    let sum = 0
    for(let i = 0 ; i < s.length ; i++){
        let n1 = map[s[i]]
        let n2 = map[s[i+1]]
        if(n2 > n1){
            sum = sum + n2 - n1
            i++
        }else{
            sum += n1
        }
    }
    return sum
};
```
