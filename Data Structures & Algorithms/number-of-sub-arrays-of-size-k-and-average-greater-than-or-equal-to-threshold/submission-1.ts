class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} threshold
     * @return {number}
     * 11, 13, 17, 23
     */
    numOfSubarrays(arr: number[], k: number, threshold: number): number {
        let count = 0;
        let L = 0;
        let R = k-1;

        let sum = arr.slice(L, R+1).reduce((acc, curr) => acc + curr, 0);
        if (sum / k >= threshold) {
            count += 1
        }
        L += 1;
        R += 1;
        while (R < arr.length) {
            sum = sum - arr[L-1] + arr[R]
            const AVR = sum / k;
            if (AVR >= threshold) {
                count += 1
            }

            L += 1;
            R += 1;
        }

        return count;
    }
}
