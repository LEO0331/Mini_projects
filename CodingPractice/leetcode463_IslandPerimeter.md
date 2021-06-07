# Description
You are given row x col grid representing a map where grid[i][j] = 1 represents land and grid[i][j] = 0 represents water. Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells). The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island. One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.
```
Input: grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]] Output: 16 Explanation: The perimeter is the 16 yellow stripes in the image above.
Input: grid = [[1]] Output: 4
Input: grid = [[1,0]] Output: 4
```
# Concept
2-d Array
# Solution
check the current land if it connects to other top/bot/right/left lands and minus 1 for the perimeter of each connection -> Time Complexity: O(row*col), Space Complexity: O(1)
```
/*
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let h = grid.length, w = grid[0].length
    let count = 0
    for (let row = 0; row<h; row++) {
        for (let col = 0; col<w; col++) {
            if (grid[row][col] === 1) {
                count += 4
                if (row > 0 && grid[row-1][col] === 1) count-- //top
                if (row < h-1 && grid[row+1][col] === 1) count-- //bot
                if (grid[row][col-1] === 1) count-- //left
                if (grid[row][col+1] === 1) count-- //right
            }
            /*
            if (!grid[row][col]) continue
            count += 4
            if (row > 0 && grid[row - 1][col]) count-- //top
            if (col > 0 && grid[row][col - 1]) count-- //left
            if (row < h-1 && grid[row + 1][col]) count-- //bot
            if (col < w-1 && grid[row][col + 1]) count-- //right
            */
        }
    }
    return count
};
```
