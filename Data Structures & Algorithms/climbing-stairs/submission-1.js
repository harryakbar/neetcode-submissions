class Solution {
    memoized = {
        0: 0,
        1: 1,
        2: 2,
    };
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(steps) {
        if (steps === 0) {
            return this.memoized[0];
        } else if (steps === 1) {
            return this.memoized[1];
        } else if (steps === 2) {
            return this.memoized[2];
        } else if (this.memoized[steps]) {
            return this.memoized[steps];
        }

        let result = this.climbStairs(steps - 1) + this.climbStairs(steps - 2);
        this.memoized[steps] = result;

        return result;
    }
}
