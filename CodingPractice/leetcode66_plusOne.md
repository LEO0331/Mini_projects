# Description
Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer. The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit. The integer does not contain any leading zero, except the number 0 itself.

# Concept
Array, iteration, math addition concept

# Solution
Assign a carry to calculate
```
/*
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let carry = 1
    for(let i=digits.length-1; i > -1; i--){
        if(carry){
            let sum = carry + digits[i]
            digits[i] = sum % 10 //update the current digit to the right number
            if(digits[i] === 0){ //check the addition of the digit to determine whether a carry is required
                carry = 1
            }else{
                carry = 0
            }
        }
    }
    if(carry === 1){
        digits.unshift(1)
    }
    return digits
};
```
