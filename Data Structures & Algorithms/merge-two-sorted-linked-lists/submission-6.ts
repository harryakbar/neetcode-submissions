/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 * 
 * 1 2 4
 * 1 3 5
 * 
 * merged = null
 * list1 = 1 2 4
 * list2 = 1 3 5
 * 
 * let temp = null
 * if (list1.val > list2.val) {
 *  temp = list2
 *  list2 = list2.next
 * } else if list1.val <= list2.val {
 *  temp = list1
 *  list1 = list1.next
 * }
 * temp.next = null
 * merged.next = temp
 * 
 * 
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode {
        let merged = null;

        while (list1 !== null || list2 !== null) {
            let temp = null

            if (list1 === null && list2 !== null) {
                temp = list2
                list2 = list2.next
            } else if (list1 !== null && list2 === null) {
                temp = list1
                list1 = list1.next
            } else if (list1.val > list2.val) {
                temp = list2
                list2 = list2.next
            } else if (list1.val <= list2.val) {
                temp = list1
                list1 = list1.next
            }

            temp.next = merged;
            merged = temp;
        }

        let prev = null
        while (merged !== null) {
            let temp = merged; 
            merged = merged.next;
            temp.next = prev;
            prev = temp;

        }

        return prev;
    }
}
