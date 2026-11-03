class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     * Brute force:
     * 2 
     * 2 1
     * 2 1 5
     * 
     * Sliding Window
     * 2 
     */
    minSubArrayLen(target: number, nums: number[]): number {
        let L = 0, R = 0;
        let min = Infinity;

        let sum = nums[R];
        while (R <= nums.length-1) {
            if (sum < target) {
                R += 1;
                sum = sum + nums[R]
                continue;
            }

            min = Math.min(min, R-L+1);
            L += 1;
            sum = sum - nums[L-1];
        }

        return min === Infinity ? 0 : min;
    }
}
