class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let result = 0;

        const DFS = (i, j) => {
            if (i > 0 && grid[i - 1][j] === "1") {
                grid[i - 1][j] = "0"
                DFS(i - 1, j)
            }
            if (j < grid[i].length - 1 && grid[i][j + 1] === "1") {
                grid[i][j + 1] = "0"
                DFS(i, j + 1)
            }
            if (i < grid.length - 1 && grid[i + 1][j] === "1") {
                grid[i + 1][j] = "0"
                DFS(i + 1, j)
            }
            if (j > 0 && grid[i][j - 1] === "1") {
                grid[i][j - 1] = "0"
                DFS(i, j - 1)
            }
        }
    
        for (let i = 0; i < grid.length; i += 1) {
            for (let j = 0; j < grid[i].length; j += 1) {
                const cell = grid[i][j]
        
                if (cell === "1") {
                    grid[i][j] = "0";
                    DFS(i, j)
                    result += 1;
                }
            }
        }
    
        return result;
    }
}
