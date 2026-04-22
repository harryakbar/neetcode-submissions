class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length
        const prefix = new Array(n).fill(0)
        const suffix = new Array(n).fill(0)
        const result = new Array(n).fill(0)

        for (let i = 0; i < n; i += 1) {
            if (i === 0) {
                prefix[i] = 1;
            } else {
                prefix[i] = nums[i - 1] * prefix[i - 1];
            }
        }

        for (let i = n-1; i >= 0; i -= 1) {
            if (i === n-1) {
                suffix[i] = 1;
            } else {
                suffix[i] = nums[i + 1] * suffix[i + 1];
            }
        }

        for (let i = 0; i < n; i += 1) {
            result[i] = prefix[i] * suffix[i];
        }

        return result;
    }
}
