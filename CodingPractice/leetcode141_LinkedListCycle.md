# Description
Given head, the head of a linked list, determine if the linked list has a cycle in it. There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter. Return true if there is a cycle in the linked list. Otherwise, return false. Follow up: solve it using O(1), constant memory.
# Concept
Linked List, Two-pointer
# Solution
1. Flag nodes that have been traversed, if go through the flagged node, a cycle occurs: lesser space
```
/*
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/*
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(head === null || head.next === null){
        return false
    }
    let node = head
    while(node !== null){
        if(node.flag){
            return true
        }    
        node.flag = true
        node = node.next
    }
    return false
};
```
2. Fast pointer(two steps at a time) will meet slow pointer(one step at a time) if a cycle occurs: faster time
```
var hasCycle = function(head) {
    function twoPointer(fast, slow){
        if(!fast || !fast.next){
            return false
        }
        if(fast.next === slow){
            return true
        }
        return twoPointer(fast.next.next, slow.next)
    }
    return twoPointer(head, head)
}
```
