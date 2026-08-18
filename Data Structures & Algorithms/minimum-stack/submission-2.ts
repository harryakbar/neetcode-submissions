class MinStack {
    private stack: number[];

    constructor() {
        this.stack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.stack.push(val);
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.stack.pop();
    }

    /**
     * @return {number}
     */
    top(): number {
        const top = this.stack.pop()
        this.push(top);
        return top;
    }

    /**
     * @return {number}
     */
    getMin(): number {
        let min = Infinity;
        for (let num of this.stack) {
            min = Math.min(min, num)
        }
        return min;
    }
}
