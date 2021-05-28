# Description
We have an array nums of integers, and an array queries of queries. For the i-th query val = queries[i][0], index = queries[i][1], we add val to nums[index].  Then, the answer to the i-th query is the sum of the even values of A. Here, the given index = queries[i][1] is a 0-based index, and each query permanently modifies the array nums. Return the answer to all queries.  Your answer array should have answer[i] as the answer to the i-th query.
```
Input: nums = [1,2,3,4], queries = [[1,0],[-3,1],[-4,0],[2,3]] Output: [8,6,2,4] 
At the beginning, the array is [1,2,3,4].
After adding 1 to nums[0], the array is [2,2,3,4], and the sum of even values is 2 + 2 + 4 = 8.
After adding -3 to nums[1], the array is [2,-1,3,4], and the sum of even values is 2 + 4 = 6.
After adding -4 to nums[0], the array is [-2,-1,3,4], and the sum of even values is -2 + 4 = 2.
After adding 2 to nums[3], the array is [-2,-1,3,6], and the sum of even values is -2 + 6 = 4.
```
# Concept
Array
# Solution
Add values to corresponding positions, filter the even number and push them in new array or in-place swap
```
/*
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(nums, queries) {
    let res = []
    for(let i=0; i<queries.length; i++){
        let a = queries[i][0]
        let b = queries[i][1]
        nums[b] += a
        let arr = nums.filter(num => num%2 === 0)
        let r = arr.reduce((a, b) => a + b, 0)
        res.push(r)
    }
    return res
    /* in-place replaces the query function
    return queries.map(query => {
        nums[query[1]] += query[0]
        return nums.reduce((acc, cur) => cur % 2 ? acc : acc+cur, 0)
    })
    */
};
```
