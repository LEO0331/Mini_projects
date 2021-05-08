# Description
Delete a node in a singly-linked list. Access to the head of the list is not given, instead access to the node to be deleted directly will be given. It is guaranteed that the node to be deleted is not a tail node in the list. The value of each node in the list is unique.
The node to be deleted is in the list and is not a tail node.
# Concept
Linked List
# Solution
Alter node value and next to the next node
```
/*
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/*
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    node.val = node.next.val
    node.next = node.next.next
};
```
