# Description
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time. Implement the MinStack class:
- MinStack() initializes the stack object
- void push(val) pushes the element val onto the stack
- void pop() removes the element on the top of the stack
- int top() gets the top element of the stack
- int getMin() retrieves the minimum element in the stack
# Concept
Stack
# Solution
One stack stores all elements and another stack stores the mim value on the top of it
```
/*
 * initialize data structure.
 */
var MinStack = function() {
    this.MinStack = []
    this.stack = []
};
/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val)
    if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
        this.minStack.push(val)
    }
};
/*
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const val = this.stack.pop()
    if (val !== void 0 && val === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop()
    }
};
/*
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1]
};
/*
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1]
    //return Math.min(...this.stack) --> no need extra space to record min values
};
/**
 * MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
```
