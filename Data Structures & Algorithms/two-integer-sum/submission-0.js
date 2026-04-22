class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const visited = new Map();

        for (let i = 0; i < nums.length; i += 1) {
            const currentNum = nums[i];
            if (visited.has(target - currentNum)) {
                return [visited.get(target - currentNum), i];
            } else {
                visited.set(currentNum, i);
            }
        }

        return []
    }
}
