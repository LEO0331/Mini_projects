# Description
Given the head of a singly linked list, return true if it is a palindrome.
```
Input: head = [1,2,2,1]
Output: true
```
# Concept
Linked List
# Solution
1. loop the list from head and tail to compare their values -> time/space: O(n)
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
 * @return {boolean}
 */
 var isPalindrome = function(head){
    let front = ""
    let back = ""
    while(head){
        front += head.val
        back = head.val + back 
        head = head.next
    }
    return front == back
}
```
2. Two pointers to record the last/half node that is used to reverse and determine palindrome -> time: O(n), space: O(1)
```
var isPalindrome = function(head){
    if(head === null || head.next === null) return true
    var slow = head //record the end of first half node
    var fast = head
    while(fast.next != null && fast.next.next != null) {
        slow = slow.next
        fast = fast.next.next
    }
    slow.next = reverseList(slow.next) //slow.next as the head for reversion
    slow = slow.next
    while(slow != null) { //compare two lists from the head and midpoint
        if(head.val != slow.val) return false
        head = head.next
        slow = slow.next
    }
    return true
    
    function reverseList(curr) { //let curr = head
        let prev = null
        while (curr != null) {
            const temp = curr.next
            curr.next = prev
            prev = curr
            curr = temp
        }
        return prev
    }
}
```
