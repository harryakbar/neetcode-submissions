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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let merged = { val: 0, next: null }
        let curr1 = list1
        let curr2 = list2

        if (!curr1) {
            return curr2
        } else if (!curr2) {
            return curr1
        } else if (!curr1 && !curr2) {
            return merged
        }

        let node = merged
        while(curr1 && curr2) {
            if (curr1.val <= curr2.val) {
                node.next = curr1
                curr1 = curr1.next
            } else if (curr1.val > curr2.val) {
                node.next = curr2
                curr2 = curr2.next
            }

            node = node.next
        }

        if (curr1) {
            node.next = curr1
        } else if (curr2) {
            node.next = curr2
        }
 
        return merged.next
    }
}
