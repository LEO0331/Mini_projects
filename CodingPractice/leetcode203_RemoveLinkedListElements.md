# Description
Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.
# Concept
Linked List
# Solution
Create a virtual node before head to handle cases that are invovled with the first node
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if(!head){
        return null
    }
    let node = new ListNode(0)
    let pre = node
    pre.next = head
    while(head){
        if(head.val !== val){
            pre = head
            head = head.next
        }else{
            pre.next = head.next //remove the node: Node.val == val
            head = head.next
        }
    }
    return node.next
};
```
```
var removeElements = function (head, val) {
  if(head === null){
    return null
  }
  const node = {
    next: head,
  }
  let prev = node
  while (prev && prev.next) {
    let curr = prev.next
    if (curr.val === val) {
      prev.next = curr.next
      curr = curr.next
    }
    if (!curr || curr.val !== val) {
      prev = curr
    }
  }
  return node.next
};
```
