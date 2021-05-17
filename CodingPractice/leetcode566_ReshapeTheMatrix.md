# Description
In MATLAB, there is a handy function called reshape which can reshape an m x n matrix into a new one with a different size r x c keeping its original data. You are given an m x n matrix mat and two integers r and c representing the row number and column number of the wanted reshaped matrix. The reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order as they were. If the reshape operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.
```
Input: mat = [[1,2],[3,4]], r = 1, c = 4 Output: [[1,2,3,4]]
Input: mat = [[1,2],[3,4]], r = 2, c = 2 Output: [[1,2],[3,4]]
```
# Concept
Array, Flat
# Solution
Flat the 2-d array and reshape it by splicing elements based on the column number and loop till the row number
```
/*
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    if (mat[0].length * mat.length !== r * c) return mat
    let newArr = mat.flat(), arr = []
    for (let i = 0; i < r; i++) {
        arr.push(newArr.splice(0, c))
    }
    return arr
    /*
    let arr = nums.flat()
    if (r * c !== arr.length) return nums
    let res = []
    while (arr.length) res.push(arr.splice(0, c))
    return res
    */
};
```
# Complement 
```
const arr = [1, 2, [3, 4]]
arr.flat() //flat single level array
-----equivalent to-----
arr.reduce((acc, val) => acc.concat(val), []) //[1, 2, 3, 4]
-----decomposition syntax-----
const flattened = arr => [].concat(...arr)
```
