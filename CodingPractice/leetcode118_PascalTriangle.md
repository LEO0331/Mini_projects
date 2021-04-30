# Description
Given an integer numRows, return the first numRows of Pascal's triangle(each number is the sum of the two numbers directly above it).

# Concept
DP, 2d-array

# Solution
Construct each row based on the previous row -> time complexity: O(numRows^2) -> Space complexity: O(numRows^2)

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
