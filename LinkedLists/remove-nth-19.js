/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

const findLength = (head) => {
    let count = 0;
    let currentHead = head;

    while (currentHead) {
        currentHead = currentHead.next;
        count++;
    }

    return count;
};
var removeNthFromEnd = function (head, n) {
    let length = findLength(head);

    let nodeBeforeRemoving = length - n - 1;

    let dummy = new ListNode(0);

    dummy.next = head;

    if (length == n) {
        return head.next;
    }

    for (let i = 0; i < nodeBeforeRemoving; i++) {
        head = head.next;
    }

    head.next = head.next.next;

    return dummy.next;
};


// ONE PASS two pointer faster
var removeNthFromEnd = function (head, n) {
    let first = head;
    for (let i = 0; i < n; i++) {
        first = first.next;
    }

    if (first == null) {
        return head.next;
    }

    let second = head;

    while (first.next != null) {
        first = first.next;
        second = second.next;
    }

    second.next = second.next.next;
    return head;
};
