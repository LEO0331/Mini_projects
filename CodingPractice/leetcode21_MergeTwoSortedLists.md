# Description
Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists. Both l1 and l2 are sorted in non-decreasing order.
# Concept
Linked List, Recursion 
# Solution
1. Iteration: add node to new nodeList based on values of l1 and l2, if nodes in l1 or l2 are all inserted, remaining nodes are inserted from the non-null node
```
/*
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let result = new ListNode(0) //stored result
    //let result = new ListNode(-1) -> result as one node before the head
    let r = result //current node position
    while(l1 !== null && l2 !==null){//both listNode exist
        if(l1.val > l2.val){
            r.next = l2
            l2 = l2.next
        } else {
            r.next = l1
            l1 = l1.next
        }
        r = r.next
    }
    //r.next = l1 === null ? l2 : l1
    //return result
    if(l1 !== null){ //if(l1 === null) r.next = l2
        r.next = l1
    }
    if(l2 !== null){ //if(l2 === null) r.next = l1
        r.next = l2
    }
    return result.next //result: [0, results]
};
```
2. Recursively merge nodes -> time/space: O(sum of the length of l1 and l2)
```
var mergeTwoLists = function(l1, l2){
    if(l1 === null){
        return l2
    }
    if(l2 === null){
        return l1
    }
    if(l1.val > l2.val){ //find the node with smallest value as head
        l2.next = mergeTwoLists(l1, l2.next)
        return l2
    }else{
        l1.next = mergeTwoLists(l1.next, l2)
        return l1
    }
}
```
