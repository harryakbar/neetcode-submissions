class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums: number[], k: number): boolean {
        let L = 0;
        let R = 0;
        let set = new Set();

        while (R <= nums.length - 1) {
            if (Math.abs(R - L) > k) {
                set.delete(nums[L]);
                L += 1;
            }

            if (!set.has(nums[R])) {
                set.add(nums[R]);
            } else {
                return true;
            }

            R += 1;
        }

        return false
    }
}
