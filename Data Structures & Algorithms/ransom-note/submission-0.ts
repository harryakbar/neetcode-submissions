class Solution {
    /**
     * @param {string} ransomNote
     * @param {string} magazine
     * @return {boolean}
     */
    canConstruct(ransomNote: string, magazine: string): boolean {
        if (ransomNote.length > magazine.length) {
        return false;
    }

    let ransomArr = ransomNote.split("").sort()
    let magazineArr = magazine.split("").sort()

    if (ransomArr.join("") === magazineArr.join("")) {
        return true;
    }

    let i = 0;
    for (const magazineChar of [...magazineArr, null]) {
        if (i > ransomArr.length - 1) {
            return true;
        }

        if (magazineChar !== ransomArr[i]) {
            continue
        } else {
            i += 1
        }
    }

    return false;
    }
}
