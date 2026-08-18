class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     * 0 board[0][0] Math.floor(square / 3) + i, * i + j
     * 1 board[0][3] Math.floor(square / 3) + i, * i + j
     * 2 board[0][6] Math.floor(square / 3) + i, * i
     * 3 board[3][0]
     * 4 board[3][3]
     * 5 board[3][6]
     * 6 board[6][0]
     * 7 board[6][3]
     * 8 board[6][6]
     */
    isValidSudoku(board: string[][]): boolean {
        const transpose = m => m[0].map((_, i) => m.map(row => row[i]));
        
        const isValidGroup = (group) => {
            const set = new Set();
            for (const item of group) {
                if (item !== ".") {
                    if (!set.has(item)) {
                        set.add(item)
                    } else {
                        return false
                    }
                }
            }
            return true;
        }


        const horizontal = board.every(isValidGroup)
        const vertical = transpose(board).every(isValidGroup);

        const newArray = Array.from({length: board.length}, () => Array(board.length*board.length).fill("."));
    
        for (let square = 0; square < board.length; square += 1) {
            for (let i = 0; i < 3; i += 1) {
                for (let j = 0; j < 3; j += 1) {
                    let row = Math.floor(square / 3) * 3 + i;
                    let col = (square % 3) * 3 + j;
                    newArray[square][(3*i)+j] = board[row][col]
                }
            }
        }
        const box = newArray.every(isValidGroup);

        return horizontal && vertical && box;
    }
}
