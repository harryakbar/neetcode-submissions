class Solution {
    /**
     * @param {string} ransomNote
     * @param {string} magazine
     * @return {boolean}
     */
    canConstruct(ransomNote: string, magazine: string): boolean {
        const magazineMap = new Map();
        
        for (const char of magazine.split("")) {
            if (magazineMap.get(char)) {
                magazineMap.set(char, magazineMap.get(char) + 1)
            } else {
                magazineMap.set(char, 1)
            }
        }

        for (const char of ransomNote.split("")) {
            if (magazineMap.get(char)) {
                magazineMap.set(char, magazineMap.get(char) - 1)
            } else {
                return false;
            }
        }

        return true
    }
}
