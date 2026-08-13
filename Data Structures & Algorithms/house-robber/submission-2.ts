class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number {
        const dp = Array.from({length: nums.length}, () => [-1, -1])
        const best = (i, canRob) => {
            const state = canRob ? 1 : 0;

            if (i === nums.length - 1) {
                return canRob ? nums[i] : 0;
            }

            if (dp[i][state] !== -1) {
                return dp[i][state]
            }

            let res;
            if (canRob) {
                const take = nums[i] + best(i + 1, false);
                const skip = best(i + 1, true);
                res = Math.max(take, skip);
            } else {
                res = best(i + 1, true);
            }

            dp[i][state] = res;
            return res;
        }
        const result = best(0, true);
        return result;
    }
}