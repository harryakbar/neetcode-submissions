/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */ 
    reverseList(head) {
        let result = null
        let newHead = head
    
        while (newHead !== null) {
            const temp = newHead.next;
            newHead.next = result;
            result = newHead;

            console.log(temp)
            newHead = temp;
        }

        return result;
    }
}

// 0->1->2->3
// 1
// 
