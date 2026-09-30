class ListNode {
    val: string;
    next: ListNode;
    prev: ListNode;

    constructor(val, next = null, prev = null) {
        this.val = val;
        this.next = next;
        this.prev = prev;
    }
}

class BrowserHistory {
    history: ListNode;
    /**
     * @constructor
     * @param {string} homepage
     */
    constructor(homepage: string) {
        this.history = new ListNode(homepage);
    }

    /**
     * @param {string} url
     * @return {void}
     * history <- newNode
     * history -> newNode
     * 
     */
    visit(url) {
        const newNode = new ListNode(url);
        newNode.prev = this.history;

        this.history.next = newNode;
        this.history = this.history.next;
    }

    /**
     * @param {number} steps
     * @return {string}
     * neetcode -> google.com -> facebook.com -> linkedin.com
     */
    back(steps) {
        let count = steps;
        while (this.history.prev !== null && count > 0) {
            this.history = this.history.prev;

            count -= 1;
        }

        return this.history.val;
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    forward(steps) {
        let count = 0;
        while (this.history.next !== null && count < steps) {
            this.history = this.history.next;

            count += 1;
        }
        return this.history.val;
    }
}
