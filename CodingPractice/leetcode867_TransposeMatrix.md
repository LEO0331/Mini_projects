# Description
Given a 2D integer array matrix, return the transpose of matrix. The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.
```
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]] Output: [[1,4,7],[2,5,8],[3,6,9]]
Input: matrix = [[1,2,3],[4,5,6]] Output: [[1,4],[2,5],[3,6]]
```
# Concept
2-d Array
# Solution
Built another 2-d array to record the transpose of current array/matrix
```
/*
 * @param {number[][]} matrix 
 * @return {number[][]}
 */
var transpose = function(matrix) {
    let res = [...Array(matrix[0].length)].map(() => Array(matrix.length).fill(0))
    for(let i=0; i<matrix.length; i++){
        for(let j=0; j<matrix[i].length; j++){
           res[j][i] = matrix[i][j]  
        }
    }
    return res
    /*
    let result = []
    for(let i= 0; i<matrix[0].length; i++){
        let cur = []
        for(let j=0; j<matrix.length; j++){
            cur.push(matrix[j][i])
        }
        result.push(cur)
    }
    return result
    */
    //return matrix[0].map((_,i) => matrix.map(b => b[i]))
};
```
