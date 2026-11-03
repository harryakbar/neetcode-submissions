class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} threshold
     * @return {number}
     */
    numOfSubarrays(arr: number[], k: number, threshold: number): number {
        let count = 0;
        let L = 0;
        let R = k;

        while (R <= arr.length) {
            const AVR = arr.slice(L, R).reduce((acc, curr) => acc + curr, 0) / k;
            if (AVR >= threshold) {
                count += 1
            }

            L += 1;
            R += 1;
        }

        return count;
    }
}
