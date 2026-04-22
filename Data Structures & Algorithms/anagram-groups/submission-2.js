class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let group = new Map()

        for (let str of strs) {
            const key = str.split("").sort().join("")

            if (group.has(key)) {
                console.log([...group.get(key), str])
                group.set(key, [...group.get(key), str])
            } else {
                group.set(key, [str])
            }
        }

        return [...group.values()]
    }
}
