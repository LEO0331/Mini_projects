# Description
Write a function that takes an unsigned integer and returns the number of '1' bits it has (Hamming weight). The input must be a binary string of length 32.
# Concept
Number, Bit Operation
# Solution
1. count the last digit one by one using n & 1 === 1 and n & 1 === 0 or count how many 1 are removed to result in all 0 -> time: O(log(n)), space: O(n)
```
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0
    while(n > 0){//n !== 0
        count += n & 1
        n = n >>> 1 //right shift
        /*
        n = n & (n - 1) //delete the last digit 1 of n
        count++
        */
    }
    return count
};
```
2. use while loop to count last digit by setting the length regulated from the constraint 
```
var hammingWeight = function (n) {
    let count = 0
    let length = 32
    while (length) {
        if ((n & 1) === 1) count ++
        n = n >> 1
        length--
    }
    return count
};
```
3. convert number to a binary string array and count the number of 1 in that array
```
var hammingWeight = function (n) {
    let count = 0
    let arr = n.toString(2).split("") //toString(radix) -> radix: 2-36
    for(let i in arr){
        if(arr[i] % 2 == 1){ //ary[i] === '1' or "1"(faster)
            count++
        }
    }
    return count
};
```
