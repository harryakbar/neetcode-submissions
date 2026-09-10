class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        let result = Array.from({ length: temperatures.length }, () => 0);
        let stack = [];
        for (let i = 0; i < temperatures.length; i += 1) {
            let t = temperatures[i];
            while (stack.length !== 0 && t > stack[stack.length-1][0]) {
                const [_, stackInd] = stack.pop();
                result[stackInd] = i - stackInd;
            }
            stack.push([t, i]);
        }

        return result;
    }
}
