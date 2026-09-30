class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        let max: number = 0;

        let count = 0;
        for (let num of nums) {
            if (num === 0) {
                count = 0;
            } else {
                count += 1;
            }

            max = Math.max(max, count);
        }

        return max;
    }
}
