/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 * 
 * 0 -> 1 -> 2 -> 3
 * prev = null
 * head = 0 -> 1
 * 
 * temp = head (0 -> 1)
 * head = head.next (1 -> 2)
 * temp.next = prev (0 -> null)
 * prev = temp (0 -> null)
 * 
 * until head === null
 * 
 * 3 -> 2 -> 1 -> 0
 * 
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {
        let prev = null;

        while (head !== null) {
            let temp = head;
            head = head.next;
            temp.next = prev;
            prev = temp;
        }

        return prev
    }
}
