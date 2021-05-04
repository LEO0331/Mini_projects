# Description 
Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array. Follow up: Using only O(1) extra space complexity and O(n) runtime complexity

# Concept
array, basic area formula(triangular number)

# Solution 
Use 1+2+...+n minus all the elements in a given array to show the missing number without extra space needed
```
/*
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    return nums.reduce((accumulator, currentValue) => {
        return accumulator - currentValue
    }, (nums.length * (nums.length + 1)) / 2)
};
```
# Complement
```
var missingNumber = function(nums) { //construct array of size n+1, assign each value to -1 
    const res = new Array(nums.length+1).fill(-1)
    for(const num of nums) { //fill in the array
        res[num] = num
    }
    return res.indexOf(-1) //the remaining -1 index is the missing value
    /*
    let obj = {}
    for(let i = 0; i<=nums.length; i++){ //construct map for all elements with val = -1
        obj[i] = -1
    }
    for(let i = 0; i<nums.length; i++){ 
        obj[nums[i]] = nums[i]
    }
    //get a key in a JavaScript object by its value
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
    return Object.keys(obj).find(key => obj[key] === -1) //Object.keys(obj).filter(function(key) {return obj[key] === -1})[0]
    */
}
```
