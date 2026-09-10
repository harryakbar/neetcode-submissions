class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        let result = Array.from({ length: temperatures.length }, () => 0);
        let stack = [];
        /**
         * [30,38,30,36,35,40,28]
         * 38
         * stack = []
         * stack = [[38, 1]]
         * 
         * 30
         * stack = [[38, 1]]
         * stack = [[38, 1], [30, 2]]
         * 
         * 36
         * stack [[38, 1], [30, 2]]
         * 36 > 30
         * stack = [[38, 1]]
         * result[2] = 3-2 = 1
         * 
         
         */
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
