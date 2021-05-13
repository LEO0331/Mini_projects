# Description
Reverse bits of a given 32 bits unsigned integer. The input must be a binary string of length 32.
- Note that in some languages such as Java, there is no unsigned integer type. In this case, both input and output will be given as a signed integer type. They should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
- In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 2 above, the input represents the signed integer -3 and the output represents the signed integer -1073741825.

Example 1:
```
Input: n = 00000010100101000001111010011100
Output: 964176192 (00111001011110000010100101000000)
Explanation: The input binary string 00000010100101000001111010011100 represents the unsigned integer 43261596, so return 964176192 which its binary representation is 00111001011110000010100101000000.
```
Example 2:
```
Input: n = 11111111111111111111111111111101
Output: 3221225471 (10111111111111111111111111111111)
Explanation: The input binary string 11111111111111111111111111111101 represents the unsigned integer 4294967293, so return 3221225471 which its binary representation is 10111111111111111111111111111111.
```
# Concept
Number, Bit operation, Two Pointers
# Solution
1. divide the number to its binary form and reverse it into an array 
```
var reverseBits = function(n) {
    if(n === 0) return 0
    let list = [] //store bits array
    for(let i = 0; i < 32; i++){
        if(n > 0){ // eg. 6 in binary:110 (6 => 6%2 = 0, 3%2 = 1, 1%2 =1) 
            list.push(parseInt(n%2)) //when put in list, already auto reverse
            n = parseInt(n/2)
        }else {
            list.push(0)
        }
    }
    return parseInt(list.join(""),2) //parseInt(string, radix)
};
```
2. concept of two pointer: left-shift answer & right-shift original number -> time: O(log(n)), space: O(1)
- n & 1 === 1: last digit of n is 1
- n & 1 === 0: last digit of n is 0
- >>>: Bitwise unsigned right shift operator -> convert any numeric expression to an "integer" or non-numeric expression to zero; shift the right-most bits of a number a specified number of times, and padding with zeroes to the left
```
var reverseBits = function(n) {
    let res = 0
    for (let i = 0; i < 32; i++) {
        res = (res << 1) + (n & 1) //shift the first operand the specified number of bits to the left
        n = n >>> 1 //return an unsigned 32-bit integer
    }
    return res >>> 0
};
```
