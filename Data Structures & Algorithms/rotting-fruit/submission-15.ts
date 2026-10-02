class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     * [1,1,0]
     * [0,1,1]
     * [0,1,2]
     */
    orangesRotting(grid: number[][]): number {
        const queue = [];
        let fresh = 0;
        const ROWS = grid.length;
        const COLS = grid[0].length;

        const [freshTotal] = this.getFirstRottenFruit(grid, queue);

        fresh = freshTotal;

        let mins = 0;
        const directions = [
                [0, 1],
                [1, 0],
                [0, -1],
                [-1, 0],
            ];
        while (fresh > 0 && queue.length > 0) {
            const len = queue.length;
            for (let i = 0; i < len; i++) {
                const [row, col] = queue.shift();

                for (const [dr, dc] of directions) {
                    const [newRow, newCol] = [row + dr, col + dc];
                    if (
                        newRow < 0 || 
                        newCol < 0 ||
                        newRow > ROWS - 1 ||
                        newCol > COLS - 1 ||
                        grid[newRow][newCol] === 0 ||
                        grid[newRow][newCol] === 2
                    ) {
                        continue
                    }

                    queue.push([newRow, newCol])
                    grid[newRow][newCol] = 2
                    fresh -= 1;
                }
            }
            mins += 1
        }

        return fresh === 0 ? mins : -1;
    }

    getFirstRottenFruit(grid: number[][], queue: number[][]) {
        let fresh = 0;

        for (let row = 0; row < grid.length; row++) {
            for (let col = 0; col < grid[0].length; col++) {
                if (grid[row][col] === 2) {
                    queue.push([row, col]);
                }
                if (grid[row][col] === 1) {
                    fresh += 1;
                }
            }
        }
        return [fresh];
    }
}
