# Description
You are given an integer array nums consisting of n elements, and an integer k. Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10^-5 will be accepted.
```
Constraints:
- n == nums.length
- 1 <= k <= n <= 105
- -10^4 <= nums[i] <= 10^4
Input: nums = [1,12,-5,-6,50,3], k = 4 Output: 12.75000 Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
Input: nums = [5], k = 1 Output: 5.00000
```
# Concept
Array, Sliding Window(array/string), Two Pointers
# Solution
Use two pointers to record the left/right threshold of the array the find the max sum in that specific area
```
var findMaxAverage = function(nums, k) {
    let cur = nums.slice(0,k).reduce((a,b) => a+b, 0)
    let sum = cur
    for (let i=1; i<nums.length-k+1; i++){ //left point
        cur = cur - nums[i - 1] + nums[i + k - 1]
        sum = Math.max(sum, cur)
    }
    return sum/k
};
```
# Complement
1. initial thought
```
/*
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) { //Time Limit Exceeded, can not handle large inputs
    let max = -Infinity 
    if(k === 1) return Math.max(...(nums)) //maximum element in the arrray
    for(let i=0; i<nums.length; i++){
        if(nums[i+k-1]){ //restriction of tail
            let cur = nums.slice(i,i+k).reduce((a, b) => a + b, 0)/k //calculate each k number sum
            max = Math.max(max,cur) //compare with current max sum
        }
    }
    return max
};

```
2. Dynamic Sliding Window Pseudo Code
```
string s, t
int left = 0, right = 0 //find the mim duplicate string of t in s
string res = s
while(right < s.size()){
    window.add(s[right])
    right++
    while (when window meets conditions) { //move left to reduce window
        res = minLen(res, window) //update res if shorten
        window.remove(s[left])
        left++
}
return res
```
3. Fixed Sliding Window Pseudo Code
```
string s //fixed window size
int right = 0 //find the max covered string in s when fixed k window size
while(right < s.size()) {
    window.add(s[right])
    right++
    if (right>=k){ //complete building the window
        conditions inclduing calculate the max sum in the window
        remove elements at position right-k
    }
}
return res   
```
