const ALPHANUMERIC = "abcdefghijklmnopqrstuvwxyz0123456789"
const ARRAY_ALPHANUMERIC = ALPHANUMERIC.split("")

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlphanumeric(char) {
        return ARRAY_ALPHANUMERIC.includes(char);
    }

    isPalindrome(s) {
        let newString = ""
        for (let char of s) {
            if (this.isAlphanumeric(char.toLowerCase())) {
                newString += char.toLowerCase();
            }
        }

        let left = 0;
        let right = newString.split("").length - 1;

        while (left <= right) {
            console.log(left, right)
            if (newString[left] === newString[right]) {
                left += 1;
                right -= 1;
            } else {
                return false;
            }
        }

        return true;
    }
}