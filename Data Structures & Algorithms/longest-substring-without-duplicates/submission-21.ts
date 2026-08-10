class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let left = 0;
        let right = 0;

        let max = 0;
        let substring = new Set();
        while (right < s.length) {

            while (substring.has(s[right])) {
                substring.delete(s[left])
                left += 1;
            }

            substring.add(s[right])
            max = Math.max(max, right-left +1)

            right += 1
        }

        return max
    }
}
