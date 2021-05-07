# Description
Given the head of a singly linked list, reverse the list, and return the reversed list.
```
input: 1->2->3->4->5->NULL --> head = [1,2,3,4,5]
output: 5->4->3->2->1->NULL --> [5,4,3,2,1]
```
# Concept
Linked List
# Solution
1. Iteration: swap two nodes by recording current node and the following node(s) -> time: O(n), space: O(1)
```
/*
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(!head || head.next === null){ //if(!head) return null
        return head
    }
    let cur = head
    let pre = null
    while(cur){ //cur != null
        let temp = cur.next
        cur.next = pre
        pre = cur
        cur = temp
    }
    return pre
};
```
2. Recursive: add first node to the tail of the recursively reversed nodes(other nodes without head) -> time: O(n), space: O(n)
```
var reverseList = function(head) {
    if (head === null || head.next === null) { //condition
        return head
    }
    let newList = reverseList(head.next)
    let second = head.next
    second.next = head
    head.next = null
    return newList
};
```
# Complement
- linked list = [1,2,3,4,5], prev = head = [1,2,3,4,5]; cur = head.next = [2,3,4,5]
- prev.next = null -> prev = [1], then go in while loop
- temp = [2,3,4,5]; cur = cur.next -> cur = [3,4,5]
- temp.next = null -> temp = [2]; temp.next = prev -> temp = [2,1]; prev = temp -> prev = [2,1]
```
var reverseList = function(head) { //faster iteration method
    if(!head || head.next === null){ //if(!head) return null
        return head
    }
    let prev = head
    let cur  = head.next
    prev.next = null
    while(cur){
        let temp = cur //temp as current node
        cur = cur.next
        //temp.next = null
        temp.next = prev
        prev = temp
    }
    return prev
};
```
