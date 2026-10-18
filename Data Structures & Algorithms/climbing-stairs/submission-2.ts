class Solution {
    /**
     * @param {number} n
     * @return {number}
     * 
     * 1 : 1
     * 2 : 1 + 1; 2 | f(1) + 1
     * 3 : 2 + 1; 1 + 2; 1+1+1 | f(2) + 
     * 4 : 2+2; 1+1+1+1; 2+1+1; 1+1+2; 1+2+1
     */
    climbStairs(n: number, cache = {}): number {
        if (n <= 2) {
            return n;
        } else if (cache[n]) {
            return cache[n];
        }

        cache[n] = this.climbStairs(n-1, cache) + this.climbStairs(n-2, cache);

        return cache[n];
    }
}
