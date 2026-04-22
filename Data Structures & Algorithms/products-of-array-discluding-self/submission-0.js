class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        return nums.map((_, idx) => nums.reduce((prev, curr, idxx) => idx !== idxx ? prev * curr : prev, 1))
    }
}
