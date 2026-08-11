class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const map = {}
        for (const str of strs) {
            const sortedStr = str.split("").sort().join("")
            if (!(sortedStr in map)) {
                map[sortedStr] = [str]
            } else if (sortedStr in map) {
                map[sortedStr] = [...map[sortedStr], str]
            }
        }

        return Object.values(map);
    }
}
