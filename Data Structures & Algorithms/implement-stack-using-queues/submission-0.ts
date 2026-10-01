/**
 * [1]
 * []
 * [2,1]
 * []
 * 
 * 
 */


class MyStack {
    queue1;
    queue2;

    constructor() {
        this.queue1 = new Queue();
        this.queue2 = new Queue();
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x: number): void {
        this.queue2.push(x);

        while (!this.empty()) {
            this.queue2.push(this.queue1.pop())
        }

        const temp = this.queue1;
        this.queue1 = this.queue2;
        this.queue2 = temp;
    }

    /**
     * @return {number}
     */
    pop(): number {
        return this.queue1.pop()
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.queue1.front()
    }

    /**
     * @return {boolean}
     */
    empty(): boolean {
        return !this.queue1.front()
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
