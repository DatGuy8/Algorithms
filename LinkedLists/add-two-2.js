

const addTwoNumbers= (list1, list2) =>{

    let dummy = new ListNode(0);
    let curr = dummy;

    let carry = 0;

    while(list1 || list2 || carry != 0){

        let x = list1 ? list1.val : 0;
        let y = list2 ? list2.val : 0;

        let sum = x + y + carry;

        carry = Math.floor(sum / 10);

        curr.next = new ListNode(sum%10);
        curr = curr.next;

        if(list1){
            list1 = list1.next;
        }

        if(list2){
            list2 = list2.next;
        }
    }

    return dummy.next;

}

