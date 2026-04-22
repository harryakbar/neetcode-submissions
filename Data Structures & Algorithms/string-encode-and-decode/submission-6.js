class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if (strs.length === 0) {
            return "~empty~"
        }
        return strs.join("||||")
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str === "~empty~") {
            return []
        }

        return str.split("||||")
    }
}
