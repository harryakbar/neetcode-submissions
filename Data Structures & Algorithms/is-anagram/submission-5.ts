class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const a = s.split("").sort((a, b) => a.localeCompare(b)).join("")
        const b = t.split("").sort((a, b) => a.localeCompare(b)).join("")
        console.log(a, b)
        return a === b
    }
}
