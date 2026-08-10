class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let minBuy = Infinity;
        let maxProf = 0;

        for (const price of prices) {
            minBuy = Math.min(minBuy, price);
            maxProf = Math.max(maxProf, price - minBuy);
        }

        return maxProf;
    }
}