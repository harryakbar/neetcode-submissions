class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let max = 0;
        let sorted = nums.sort((a, b) => a - b);

        let last = null;
        let longest = 1;
        for (let i = 0; i < sorted.length; i += 1) {
            const current = sorted[i];
            if (last !== null && last + 1 === current) {
                longest += 1
            } else if (last !== null && current - last > 1) {
                longest = 1;
            }

            max = Math.max(max, longest);
            last = current
        }

        return max;
    }
}
