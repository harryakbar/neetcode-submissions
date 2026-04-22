class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let counter = new Map()

        for (let num of nums) {
            if (counter.has(num)) {
                counter.set(num, counter.get(num) + 1)
            } else {
                counter.set(num, 1)
            }
        }

        let ranked = []
        for (let [key, values] of counter) {
            ranked.push([key, values]);
        }

        ranked = ranked.sort((a, b) => b[1] - a[1])

        let result = []
        for (let i = 0; i < k; i += 1) {
            result.push(ranked[i][0]);
        }

        return result;
    }
}
