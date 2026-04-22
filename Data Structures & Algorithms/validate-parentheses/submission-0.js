class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(str) {
        let arr = str.split("");
        let stack = [];

        for (let i = 0; i < arr.length; i += 1) {
            let char = arr[i];
            if (char === "(" || char === "{" || char === "[") {
            stack.push(char);
            } else {
            const pop = stack.pop();
            if (!pop) {
                return false
            }
            if (pop === "(" && char !== ")") {
                return false;
            } else if (pop === "{" && char !== "}") {
                return false;
            } else if (pop === "[" && char !== "]") {
                return false;
            }
            }
        }

        if (stack.length === 0) {
            return true;
        }

        return false;
    }
}
