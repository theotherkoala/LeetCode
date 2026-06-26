/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 * this.val = (val===undefined ? 0 : val)
 * this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    let dummy = new ListNode(0, head);

    let leftPrev = dummy;
    let cur = head; 
    for (let i = 0; i < left - 1; i++){
        leftPrev = cur;
        cur = cur.next;
    }

    let prev = null;
    for (let i = 0; i < (right - left) + 1; i++){
        let tmpNext = cur.next;
        cur.next = prev;
        prev = cur;
        cur = tmpNext;
    }

    // Reconnect the reversed sub-list back into the main list
    leftPrev.next.next = cur;
    leftPrev.next = prev;
    
    return dummy.next;
};