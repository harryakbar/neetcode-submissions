class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums: number[], val: number): number {
        let k = 0;

        let temp: number[] = [];

        for (let i = 0; i < nums.length; i += 1) {
            if (val !== nums[i]) {
                temp.push(nums[i]);
            }
        }

        for (let i = 0; i < temp.length; i += 1) {
            nums[i] = temp[i]
        }

        return temp.length
    }
}
