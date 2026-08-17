class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number {
        let rob1 = 0;
        let rob2 = 0;

        // rob1, rob2, n, n+1
        for (const num of nums) {
            let temp = Math.max(rob1 + num, rob2); // 0 + 1 vs 0 -> 1; 1 + 3,
            rob1 = rob2; // -> 0
            rob2 = temp; // -> 1
        }

        return rob2;
    }
}
