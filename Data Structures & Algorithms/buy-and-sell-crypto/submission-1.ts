class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let maxProfit = 0;

        for (let i = 0; i < prices.length; i += 1) {
            for (let j = i; j < prices.length; j += 1) {
                maxProfit = Math.max(maxProfit, prices[j] - prices[i])
            }
        }

        return maxProfit;
    }
}