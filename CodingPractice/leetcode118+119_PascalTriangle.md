# Description
1. Given an integer numRows, return the first numRows of Pascal's triangle(each number is the sum of the two numbers directly above it).
2. Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle. In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
```
Input: rowIndex = 3 Output: [1,3,3,1]
Input: rowIndex = 1 Output: [1,1]
Input: rowIndex = 0 Output: [1]
```
# Concept
2d-array, DP
# Solution
1. construct each row based on the previous row -> time complexity: O(numRows^2) -> Space complexity: O(numRows^2)

```
/*
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if (numRows === 0) return []
    if (numRows === 1) return [[1]]
    let ans = []
    for(let i = 0; i< numRows; i++) {
        ans[i] = [] //2d array
        for(let j = 0; j < i+1; j++) {
          if(j === 0 || j === i) { //left and right ends are 1
            ans[i][j] = 1
          } else {
            ans[i][j] = ans[i-1][j-1] + ans[i-1][j]
          }
        } 
    }
    return ans
}; 
```

```
/*
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if (rowIndex === 0) return [1]
    if (rowIndex === 1) return [1,1]
    let arr = [1]
    for(let i = 1; i <= rowIndex; i++) {
        let pre = arr[i-1] //2d array
        for(let j = 1; j < i; j++) {
            let cur = arr[j] ? arr[j] : 0 //prev row
            arr[j] = pre + cur //current row = prevRow[n-1] + prevRow[n]
            pre = cur
        } 
        arr.push(1) //rightest one
    }
    return arr
};
```
