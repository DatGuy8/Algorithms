/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * 
 *  SO WHAT WE ARE TRYING TO DO IS MAKE ALL THE .next to become 
 *  the previous one and the head will be the last one now
 */

class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }


}


// ITERATIVE
var reverseList = function (head) {
    let prev = null;
    let curr = head;

    while (curr != null) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;

    }
    return prev;
};

// RECUSIVE 

const reverseListRec = (head)=>{

    if(head == null || head.next == null){
        return head;
    }

    let returnHead = reverseListRec(head.next);
    head.next.next = head;
    head.next = null;
    return returnHead;
}