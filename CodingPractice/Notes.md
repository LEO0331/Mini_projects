# Data Structure Notes
Good Code? https://www.bigocheatsheet.com/
1. Readable
2. Scalable(Big 0) -> time/space complexity
- O(1) Constant - no loops e.g. in JS, .length is a built-in function so that no looping from the first string: O(1)
- O(log n) Logarithmic - usually searching algorithms have log n if they are sorted (Binary Search)
- O(n) Linear - for loops, while loops through n items
- O(n log(n)) Log Liniear - usually sorting operations
- O(n^2) Quadratic - every element in a collection needs to be compared to ever other element. Two nested loops
- O(2^n) Exponential - recursive algorithms that solves a problem of size N
- O(n!) Factorial - you are adding a loop for every element

Iterating through half a collection is still O(n); Two separate collections: O(a * b)

-What can cause time in a function?-
Operations (+, -, *, /)
Comparisons (<, >, ==)
Looping (for, while)
Outside Function call (function())

-Rule Book-
- Always worst Case
- Remove Constants
- Different inputs should have different variables. O(a+b). A and B arrays nested would be O(a*b), + for steps in order, * for nested steps
- Drop Non-dominant terms

-What causes Space complexity?-
- Variables
- Data Structures
- Function Call
- Allocations

Step By Step through a problem:
1. When the interviewer says the question, write down the key points at the top (i.e. sorted array). Make sure you have all the details. Show how organized you are.
2. Make sure you double check: What are the inputs? What are the outputs?
3. What is the most important value of the problem? Do you have time, and space and memory, etc.. What is the main goal?
4. Don't be annoying and ask too many questions.
5. Start with the naive/brute force approach. First thing that comes into mind. It shows that you’re able to think well and critically (you don't need to write this code, just speak about it).
6. Tell them why this approach is not the best (i.e. O(n^2) or higher, not readable, etc...)
7. Walk through your approach, comment things and see where you may be able to break things. Any repetition, bottlenecks like O(N^2), or unnecessary work? Did you use all the information the interviewer gave you? Bottleneck is the part of the code with the biggest Big O. Focus on that. Sometimes this occurs with repeated work as well.
8. Before you start coding, walk through your code and write down the steps you are going to follow.
9. Modularize your code from the very beginning. Break up your code into beautiful small pieces and add just comments if you need to.
10. Start actually writing your code now. Keep in mind that the more you prepare and understand what you need to code, the better the whiteboard will go. So never start a whiteboard interview not being sure of how things are going to work out. That is a recipe for disaster. Keep in mind: A lot of interviews ask questions that you won’t be able to fully answer on time. What can I show in order to show that I can do this and I am better than other coders. Break things up in Functions (if you can’t remember a method, just make up a function
and you will at least have it there. Write something, and start with the easy part.
11. Think about error checks and how you can break this code. Never make assumptions about the input. Assume people are trying to break your code and that Darth Vader is using your function. How will you safeguard it? Always check for false inputs that you don’t want. Here is a trick: Comment in the code, the checks that you want to do… write the function, then tell the interviewer that you would write tests now to make your function fail (but you won't need to actually write the tests).
12. Don’t use bad/confusing names like i and j. Write code that reads well.
13. Test your code: Check for no params, 0, undefined, null, massive arrays, async code, etc… Ask the interviewer if we can make assumption about the code. Can you make the answer return an error? Poke holes into your solution. Are you repeating yourself?
14. Finally talk to the interviewer where you would improve the code. Does it work? Are there different approaches? Is it readable? What would you google to improve? How can performance be improved? Possibly: Ask the interviewer what was the most interesting solution you have seen to this problem
15. If your interviewer is happy with the solution, the interview usually ends here. It is also common that the interviewer asks you extension questions, such as how you would handle the problem if the whole input is too large to fit into memory, or if the input arrives as a stream.
16. Care about scale. The answer is usually a divide-and-conquer approach — perform distributed processing of the data and only
read certain chunks of the input from disk into memory, write the output back to disk and
combine them later.

Checklist:
- [✅]It works
- [✅]Good use of data structures
- [✅]Code Re-use/ Do Not Repeat Yourself
- [✅]Modular - makes code more readable, maintainable and testable
- [✅]Less than O(N^2). We want to avoid nested loops if we can since they are expensive. Two separate loops are better than 2 nested loops
- [✅]Low Space Complexity --> Recursion can cause stack overflow, copying of large arrays may exceed memory of machine

Tips:
- [✅]Hash Maps are usually the answer to improve Time Complexity
- [✅]If it's a sorted array, use Binary tree to achieve O(log N). Divide and Conquer - Divide a data set into smaller chunks and then repeating a process with a subset of data. Binary search is a great example 
- [✅]Try Sorting your input
- [✅]Hash tables and precomputed information (i.e. sorted) are some of the best ways to optimize your code
- [✅]Look at the Time vs Space tradeoff. Sometimes storing extra state in memory can help the time(Runtime)
- [✅]If the interviewer is giving you advice/tips/hints. Follow them
- [✅]Space time tradeoffs: Hastables usually solve this a lot of the times. You use more space, but you can get a time optimization to the process. In programming, you often times can use up a little bit more space to get faster time

## Q1: Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items. For Example: 4bytes = 32bits --> array1: 4*4 = 16 bytes of storage

2 parameters - arrays - no size limit - need to consider large size -> return true or false

Brute force: O(n^2) --> O(a*b); O(1) - Space Complexity
```
const array1 = ['a', 'b', 'c', 'x']; const array2 = ['z', 'y', 'i']; --> return false
const array1 = ['a', 'b', 'c', 'x']; const array2 = ['z', 'y', 'x']; --> return true

function containsCommonItem(arr1, arr2) {
  for (let i=0; i < arr1.length; i++) {
    for ( let j=0; j < arr2.length; j++) {
      if(arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false
}

Inbuilt functions(depend on language)
function containsCommonItem(arr1, arr2){
	for (let i=0; i < arr1.length; i++){
		if(arr2.includes(arr1[i])){
			return true
		}
	}
	return false
}
//some() method checks if any of the elements(iteration) in an array pass a test (provided as a function)
function containsCommonItem(arr1, arr2){
	return arr1.some(item => arr2.includes(item))
}

Turn array to object: create key-valaue pair(ALWAYS think about hash table)
array 1 ==> obj {
	a: true,
	b: true,
	c: true,
	x: true
}
// loop through first array and create object where properties === items in the array
O(n) --> O(a + b) Time Complexity; O(a) Space Complexity
function containsCommonItem(arr1, arr2){
	let obj = {} //turned into string when created
	for (let i=0; i < arr1.length; i++){
		if(!obj[arr1[i]]){ //if no key, add that key-value pair
			const item = arr1[i]
			obj[item] = true
		}
	}
	for (let j=0; j < arr2.length; j++){
		if(obj[arr2[i]]){
			return true
		}
	}
	return false
}
```
# Array
- End: push('element')/pop() --> O(1)
- Start: shift()/unshift('element') --> O(n)
- Array(static vs dynamic)
- End: push('element')/pop() --> O(1) --- append('element'): O(1)/O(n)
- Start: shift()/unshift('element') --> O(n)
- Middle: splice(start, deleteCount, itemTobeAdded): changes the original array, return the removed items VS slice(start, end): selected from start to end (end not included), original array will NOT be modified(return a shallow copy of a portion of an array) --> O(n)
- String: convert it to an array --> split() --> https://www.w3schools.com/jsref/jsref_split.asp, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor, https://medium.com/@ashfaqueahsan61/time-complexities-of-common-array-operations-in-javascript-c11a6a65a168
- In javascript, arrays are objects, so there's no such thing as out of range in javascript arrays. Array indexes are stored as keys. If the index doesn't exists in the array, undefined is returned.
- JavaScript arrays are collections of items, where each item is accessible through an index. These indexes are non-negative integers, and accessing a negative index will just return undefined -> letters[-1]: undefined
- Use Proxies to access array items starting from the end using negative indexes
```
const proxy = new Proxy(letters, {})
const proxy = new Proxy(letters, {
    get(target, prop) {
        return target[prop]
    }
})
//Example
const letters = ['a', 'b', 'c', 'd', 'e']
const proxy = new Proxy(letters, {
    get(target, prop) {
        if (!isNaN(prop)) {
            prop = parseInt(prop, 10)
            if (prop < 0) {
                prop += target.length
            }
        }
        return target[prop]
    }
})
proxy[0] => 'a'
proxy[-1] => 'e'
proxy[-2] => 'd'
```
```
class MyArray{
	constructor(){
		this.length = 0;
		this.data = {};
	}
	get(index){ 
		retuen this.data[index]
	}
	push(item){ //0(1)
		this.data[this.length] = item
		this.length++
		return this.length
	}
	pop(){ //0(1)
		const lastItem = this.data[this.length-1]
		delete this.data[this.length-1]
		this.length--
		return lastItem
	}
	delete(index){ //0(n)
		const item = this.data[index]
		this.shiftItems(index)
	}
	shiftItems(index){ //method
		for(let i = index; i < this.length-1; i++){
			this.data[i] = this.data[i+1]
		}
		delete this.data[this.length-1]
		this.length--
	}
}

const newArray = new MyArray()
```
## Q2: Reverse a string
```
//https://stackoverflow.com/questions/958908/how-do-you-reverse-a-string-in-place-in-javascript/16776621#16776621
function reverse(str){ 
	const arr = str.split("")
	for(let i = 0; i<arr.length/2; i++){ //swap base on the middle element
		temp = arr[i]
		arr[i] = arr[arr.length-1-i]
		arr[arr.length-1-i] = temp
	}
	return arr.join("")
	//str.split("").reverse().join("") --> simple ASCII characters, not support UTF-16/multi-byte characters
	//const reverseFunc = str => [...str].reverse().join('')
}

function reverse(str){ 
	if(!str || str.length < 2 || typeof str !== 'string'){ //undefined, only one element
		return 'not string input' 
	}
	let s = ''
	for(let i = str.lengt-1; i >= 0; i--){
		s += str[i]
	}
	return s
}

function reverse(s) {
	var o = [];
	for (var i = s.length - 1, j = 0; i >= 0; i--, j++)
	    o[j] = s[i];
	return o.join(''); 
}

function reverse(s) {
	var o = [];
	for(let i = str.lengt-1; i >= 0; i--){
		o.push(str[i])
	}
	return o.toString(); 
}
```
### Complement
```
function reverseArray(arr) {
  let left = 0
  let right = arr.length - 1
  while (left < right) {
    const temp = arr[left]
    arr[left++] = arr[right]
    arr[right--] = temp
  }
  return arr
}
```
## Q3: Merge two sorted array
```
function mergeArray(array1, array2){
	const ans = []
	if(array1.length === 0){
		return arr2
	}
	if(array2.length === 0){
		return arr1
	}
	let item1 = arr1[0]
	let item2 = arr2[0]
	let i = 1
  	let j = 1
	while (item1 || item2){
	   	if(item2 === undefined || item1 < item2){
		    ans.push(item1)
		    item1 = array1[i]
		    i++
	   	}   
	   	else {
		    ans.push(item2)
		    item2 = array2[j]
		    j++
	   	}
	}
  	return ans;
}
```
## Hash
Insert/Delete/Search/Lookup --> O(1)
```
class HashTable {
    constructor(size){
      this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++){ //fit inside the bucket
            hash = (hash + key.charCodeAt(i) * i) % this.data.length //charCodeAt: A->65 a->97
    	}
        return hash;
    }
    set(key, value){ //0(1)
    	let adr = this._hash(key)
    	if(!this.data[adr]){ 
    		this.data[adr] = []
    	} 
    	this.data[adr].push([key, value])
    	return this.data
    }
    get(key){ //0(1) if no collision, 0(n) worst case
    	let adr = this._hash(key)
    	const currentBucket = this.data[adr]
    	if(currentBucket){
    		for(let i=0; i<currentBucket.length; i++){
    			if(currentBucket[i][0] === key ){
    				return currentBucket[i][1]
    			}
    		}
    	}
    	return undefined //empty bucket
    }
    keys(){ //get all keys in the hash table(no collision)
    	const keyArr = []
    	for(let i=0; i<this.data.length; i++){
    		if(this.data[i]){
    			keyArr.push(this.data[i][0][0])
    		}
    	}
    	return keyArr
    }
    keys2(){ //get all keys in the hash table(handle collision) -> slow key iteration and unordered
    	const keyArr2 = []
    	for(let i=0; i<this.data.length; i++){
    	    if(this.data[i]){
	    /*
	        if (this.data[i].length > 1){
		    for (let j=0; j < this.data[i].length; j++) {
                        keyArr2.push(this.data[i][j][0])
                    }
		}else{
		    keyArr2.push(this.data[i][0][0]
		}
	    }
	    */
	        for (let j=0; j < this.data[i].length; j++) {
                    keyArr2.push(this.data[i][j][0])
                }
    	}
    	return keyArr2
    }
}

const myHashTable = new HashTable(50);
myHashTable.set('banana', 10000)
myHashTable.get('banana')
```
## Q4: Given an array, get first recurring chracter
```
array = [2,5,1,2,3,5,1,2,4] -> return 2
array = [2,1,1,2,3,5,1,2,4] -> return 1
array = [2,3,4,5] -> return undefined
array = [2,5,5,2,3,5,1,2,4] -> return 5 because the pairs are before 2

function firstRecurringCharacter(input) {
	//const map = new Map()
	let map = {}
	for (let i = 0; i < nums.length; i++) {
	    if (map[nums[i]] !== undefined){
	    	return nums[i]
	    }else{
	    	map[nums[i]] = i
	    }
	    /*
	    if (map.has(nums[i])) {
	      	return nums[i]
	    }
	    map.set(nums[i], i)
	    */
  	}
  	return undefined
}
```
# Singly/Doubly Linked Lists
- Prepend/Append --> O(1) 
- Search/Lookup --> O(n) 
- Insert/Delete --> O(1)/O(n)
- Memory address -> array: sequential vs linked lists/hash: scatter
```
let linkedList = {
	head:{ //first node
		value: a1,
		next: {
			value: a2, //keep adding till the end
			next: {
				value: an, //last node
				next: null
				}
			}
		}
	}
}

class Node{
	constructor(value){		
		this.value: value,
		this.next: null
	}
}

class LinkedList{
	constructor(value){
		this.head = {
			value: value,
			next: null
		}
		this.tail = this.head
		this.length = 1
	}
	append(value){
		const newNode = {
			value: value,
			next: null
		}
		//const newNode = new Node(value)
		this.tail.next = newNode
		this.tail = newNode
		this.length++
		return this
	}
	prepend(value){
		const newNode = {
			value: value,
			next: null 
		}
		newNode.next = this.head
		this.head = newNode
		this.length++
		return this
	}
	printList(){
		const arr = []
		let currentNode = this.head
		while(currentNode !== null){
			arr.push(currentNode.value)
			currentNode = currentNode.next
		}
		return arr
	}
	insert(index, value){
		const newNode = {
			value: value,
			next: null 
		}
		if(index >= this.length){
			return this.append(value)
		}
		if (index === 0) {
  			this.prepend(value)
  			return this.printList()
		}
		const prev = this.traverseToIndex(index-1)
		const nxt = prev.next
		prev.next = newNode
		newNode.next = nxt
		this.length++
		return this //this.printList()
	}
	traverseToIndex(index){
		//check params
		let count = 0
		let currentNode = this.head
		while(count !== index){
			currentNode = currentNode.next
			count++
		}
		return currentNode
	}
	delete(index){
		const newNode = {
			value: value,
			next: null 
		}
		const prev = this.traverseToIndex(index-1)
		const removeNode = prev.next
		prev.next = removeNode.next
		this.length--
		return this //this.printList()
	}
	reverse() {
		if(!this.head.next){ //this.length === 1
			return this.head
		}
		let first = this.head
		this.tail = this.head //original first
		let second = first.next
		while(second){
			let tmp = second.next
			second.next = first
			first = second
			second = tmp
		}
		this.head.next = null
		this.head = first
		return this
  	}
}

class DoubleLinkedList{
	constructor(value){
		this.head = {
			value: value,
			next: null,
			prev: null
		}
		this.tail = this.head
		this.length = 1
	}
	append(value){
		const newNode = {
			value: value,
			next: null,
			prev: null
		}
		//const newNode = new Node(value)
		newNode.prev = this.tail
		this.tail.next = newNode
		this.tail = newNode
		this.length++
		return this
	}
	prepend(value){
		const newNode = {
			value: value,
			next: null,
			prev: null 
		}
		newNode.next = this.head
		this.head.prev = newNode
		this.head = newNode
		this.length++
		return this
	}
	printList(){
		const arr = []
		let currentNode = this.head
		while(currentNode !== null){
			arr.push(currentNode.value)
			currentNode = currentNode.next
		}
		return arr
	}
	insert(index, value){
		const newNode = {
			value: value,
			next: null,
			prev: null 
		}
		if(index >= this.length){
			return this.append(value)
		}
		if (index === 0) {
  			this.prepend(value)
  			return this.printList()
		}
		const lead = this.traverseToIndex(index-1)
		const follow = lead.next
		lead.next = newNode
		newNode.prev = lead
		newNode.next = follow
		follow.prev = newNode
		this.length++
		return this //this.printList()
	}
	traverseToIndex(index){
		//check params
		let count = 0
		let currentNode = this.head
		while(count !== index){
			currentNode = currentNode.next
			count++
		}
		return currentNode
	}
	delete(index){
		const newNode = {
			value: value,
			next: null 
		}
		const lead = this.traverseToIndex(index-1)
		const removeNode = lead.next
		removeNode.prev = lead
		lead.next = removeNode.next
		// removeNode.next = lead.next
		this.length--
		return this //this.printList()
	}
}
```
# Stack
LIFO -> Lookup: O(n); pop/push/peek: O(1)
```
class Node {
  constructor(value){
    this.value = value
    this.next = null
  }
}
class Stack{
	constructor(){
	    this.top = null
	    this.bottom = null
	    this.length = 0
	}
	peek() {
		return this.top 
	}
	push(value){
		const newNode = new Node(value)
		if(this.length === 0){
			this.top = newNode
	    	this.bottom = newNode
		}else{
			const current = this.top
			this.top = newNode
			this.top.next = current
		}
		this.length++
		return this
	}
	pop(){
		if(!this.top){
			return null
		}
		if(this.length === 1){ //this.top === this.bottom
	    	this.bottom = null
		}
		//JavaScript automatically allocates memory when objects are created and frees it when they are not used anymore
		const current = this.top //garbage collection
		this.top = this.top.next
		this.length--
		return current //return this: no access to pop up item
	}
}

class Stack{
	constructor(){
		this.array = []
	}
	peek(){
		this.array[this.array.length-1]
	}
	push(value){
		this.array.push(value)
		return this
	}
	pop(){
		this.array.pop()
		return this
	}
}
```
# Queue
FIFO -> Lookup: O(n); dequeue/enqueue/peek: O(1)
```
class Queue{
	constructor(){
	    this.first = null
	    this.last = null
	    this.length = 0
	}
	peek() {
		return this.first 
	}
	enqueue(value){
		const newNode = new Node(value)
		if(this.length === 0){
			this.first = newNode
	    	this.last = newNode
		}else{
			this.last.next = newNode
			this.last = newNode
		}
		this.length++
		return this
	}
	dequeue(){
		if(!this.first){
			return null
		}
		if(this.first === this.last){
	    	this.last = null
		}
		const newNode = this.first
		this.first = this.first.next
		this.length--
		return newNode
	}
}
```
## Q5: Implement a first in first out (FIFO) queue using only two stacks
```
/*
 * Initialize data structure 
 */
var MyQueue = function() {
    constructor(){
	    this.first = []
	    this.last = []
    }
};
/*
 * Push element x to the back of queue
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    const length = this.first.length
    for (let i = 0; i < length; i++) {
    	this.last.push(this.first.pop())
    }
    this.last.push(x)
    return this
};
/*
 * Removes the element from in front of queue and returns that element
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    const length = this.last.length
    for (let i = 0; i < length; i++) {
    	this.first.push(this.last.pop())
    }
    this.first.pop()
    return this
};
/*
 * Get the front element
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if (this.last.length > 0) {
      return this.last[0]
    }
    return this.first[this.first.length - 1];
};
/* var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 */
```
# Tree
Binary Search Tree -> Lookup/Insert/Delete: O(log(n)) -> unbalance: O(n)
```
class Node {
    constructor(value){
	    this.left = null
	    this.right = null
	    this.value = value
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null
    }
    insert(value){
    	const newNode = new Node(value)
    	if(!this.root){
    		this.root = newNode
    	}else{
    		let currentNode = this.root
    		while(true){
    			if(value < currentNode){
    				if(!currentNode.left){
    					currentNode.left = newNode
    					return this
    				}
    				currentNode = currentNode.left
    			}else{
    				if(!currentNode.right){
    					currentNode.right = newNode
    					return this
    				}
    				currentNode = currentNode.right
    			}
    		}
    	}
    }
    lookup(value){
    	if(this.root === null){
    		return false
    	}
    	let currentNode = this.root
    	while(currentNode){
    		if(value < currentNode.value){
				currentNode = currentNode.left
    		} else if(value > currentNode.value){
    			currentNode = currentNode.right
    		}else if(value === currentNode.value){
    			return currentNode
    		}
    	}
    	return false
    }
    remove(value){
    	if(!this.root){
    		return false
    	}
    	let currentNode = this.root
    	let parentNode = null
    	while(currentNode){
    		if(value < currentNode.value){
    			parentNode = currentNode
    			currentNode = currentNode.left
    		}else if(value > currentNode.value){
    			parentNode = currentNode
    			currentNode = currentNode.right
    		}else if(value === currentNode.value){
    			if(!currentNode.right){ //no right child
    				if(!parentNode){
    					this.root = currentNode
    				}else{
    					if(currentNode.value < parentNode.value){ //make current left child a child of parent
    						parentNode.left = currentNode.left
    					}else if(currentNode.value > parentNode.value){ //make left child a right child of parent
    						parentNode.right = currentNode.left
    					}
    				}
    			}else if(!currentNode.right.left){ //currentNode.right becomes the currentNode
    				currentNode.right.left = currentNode.left //new currentNode.left = original.left
    				if(!parentNode){
    				this.root = currentNode.right
    				}else{ //currentNode is at the left/right of the parentNode
    					if(currentNode.value < parentNode.value){
              				parentNode.left = currentNode.right
            			}else if(currentNode.value > parentNode.value){
              				parentNode.right = currentNode.right
            			}
    				}
    			}else{ //Right child that has a left child
    				let leftmost = currentNode.right.left
			        let leftmostParent = currentNode.right
			        while(leftmost.left !== null) { //right child's left most child
			            leftmostParent = leftmost
			            leftmost = leftmost.left
			        }
			        //Parent's left subtree is now leftmost's right subtree, leftmostParent.left as currentNode
    				leftmostParent.left = leftmost.right //leftmost = leftmost.right
          			leftmost.left = currentNode.left
          			leftmost.right = currentNode.right
          			if(parentNode === null) {
			            this.root = leftmost
			          	}else{
				            if(currentNode.value < parentNode.value){
				                parentNode.left = leftmost
				            } else if(currentNode.value > parentNode.value){
				                parentNode.right = leftmost
				            }
		            }
    			}
    			return true
    		}
    	}
    }
}

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}

function binarySearch(arr, val){
    let start = 0
    let end = arr.length - 1
    while (start <= end){
        let mid = Math.floor((start + end)/2)
        if (arr[mid] === val){
            return mid
        }
        if (val < arr[mid]){
            end = mid - 1
        }else{
            start = mid + 1
        }
    }
    return -1
}

function binarySearch(arr, val, l, r){
	let mid = Math.floor((l + (r + 1))/2)
	if (arr[mid] === val){
        return mid
    }
    if(l >= r){
    	return -1
    }
    if(val < arr[mid]){
    	return binarySearch(arr, val, l, mid - 1)
    }else{
    	return binarySearch(arr, val, mid + 1, r)
    }
    /*
    if(l <= r){
    	if (arr[mid] === val){
        	return mid
    	}else if(val < arr[mid]){
    		r = mid - 1
    	}else{
    		l = mid + 1
    	}
    	return binarySearch(arr, val, l, r)
    }
    return -1
    */
}
```
Both red-black trees and AVL trees are the most commonly used balanced binary search trees and they support insertion, deletion and look-up in guaranteed O(logN) time; Red-black trees are more general purpose. They do relatively well on add, remove, and look-up but AVL trees have faster look-ups at the cost of slower add/remove. 
- AVL trees are more rigidly balanced and hence provide faster look-ups(look-up intensive task use an AVL tree)
- For an insert intensive tasks, use a Red-Black tree
- AVL trees store the balance factor at each node. This takes O(N) extra space. If we know that the keys that will be inserted in the tree will always be greater than zero, we can use the sign bit of the keys to store the colour information of a red-black tree. In such cases, red-black tree takes no extra space

Binary Heap -> Lookup: O(n) -> Insert/Delete: O(log(n)) -> left to right insertion through bottom-up/bubble up(Best: O(1)); Memory Heap != Heap Data structure
```
class QElement {
    constructor(element, priority)
    {
        this.element = element
        this.priority = priority
    }
}
class PriorityQueue {
    constructor()
    {
        this.items = []
    }
  	enqueue(element, priority){
	    const qElement = new QElement(element, priority)
	    let contain = false
	    for (let i = 0; i < this.items.length; i++) {
	        if (this.items[i].priority > qElement.priority) {
	            this.items.splice(i, 0, qElement)
	            contain = true
	            break
	        }
	    }
	    if (!contain) { //highest priority added at the end of the queue
	        this.items.push(qElement)
	    }
	}
	dequeue(){
	    if (this.isEmpty())
	        return "Underflow"
	    return this.items.shift()
	}
	front(){ 
	    if (this.isEmpty())
	        return "No elements in Queue"
	    return this.items[0]
	}
	rear(){ 
	    if (this.isEmpty())
	        return "No elements in Queue"
	    return this.items[this.items.length - 1]
	}
	isEmpty(){
    	return this.items.length == 0
	}
	printPQueue(){
	    let str = ""
	    for (var i = 0; i < this.items.length; i++)
	        str += this.items[i].element + " "
	    return str
	}
}
```
# Graph
```
class Graph { //construct through edge list, adjacency list, adjacency matrix
    constructor(){ 
	this.numberOfNodes = 0
        this.adjacentList = {}
    } 
    addVertex(node){ 
  	this.adjacentList[node] = [] //add key
  	this.numberOfNodes++
    } 
    addEdge(node1, node2){ //undirected Graph
	this.adjacentList[node1].push(node2)
	this.adjacentList[node2].push(node1)
    } 
    showConnections(){ 
	const allNodes = Object.keys(this.adjacentList)
	for (let node of allNodes){ 
	    let nodeConnections = this.adjacentList[node]
	    let connections = ""
	    let vertex
	for (vertex of nodeConnections){
	    connections += vertex + " "
	} 
	    console.log(node + "-->" + connections)
	} 
    } 
} 
```
# Recursion
```
function reverseString(str) { //consider to use when converting sth into a tree/graph, divide and conquer, Merge/Quick sort
	//implement a function that reverses a string using iteration and recursion
	let arr = str.split("")
	let mid = str.length/2
	for(let i=0; i<=mid; i++){ //arr.reverse()
		let temp = arr[i]
		arr[i] = arr[arr.length-i-1]
		arr[arr.length-i-1] = temp
	}
	return arr.join("")
	/*
	1. let arr2 = []
	   while(arr.length > 0){
	       arr2.push(arr.pop())
	   }
	   return arr2.join("")
	2. var newString = ""
	   for (let i = str.length - 1; i >= 0; i--) { 
               newString += str[i]
           }
           return newString
        3. if (str === "") // terminal case that will end the recursion
    	       return ""
       	   else
               return reverseString(str.substr(1)) + str.charAt(0)
	*/
}
```
# Comparison Sort
- JS sort(): Sort number by its charCodeAt(0), only consider first index -> add sort(function(a, b){return a - b}) to sort in ascending order
- Stable: same key retain their relative order before and after the sort
- Non-Comparison Sort: Bucket/Radix/Counting Sort -> only work with numbers/integers in certain range
### Bubble Sort
```
function BS(array){ //time: O(n^2) space: O(1); Stable
	for(let i = 0; i < array.length; i++){
		for(let j = 0; j < array.length; j++){ //JS Array Out of Bounds: undefined
			if(array[j] > array[j+1]){ //swap with the neighbor value
				let temp = array[j]
				array[j] = array[j+1]
				array[j+1] = temp
			}
		}
	}
	return array
}
```
### Selection Sort
```
function SS(array){ //time: O(n^2) space: O(1); Unstable
	for(let i = 0; i < array.length; i++){ //select the smallest position
		let index = i
		let tmp = arr[i]
		for(let j = i + 1; j < array.length; j++){
			if(array[j] < array[index]){ 
				index = j //update minimum
			}
		}
		arr[i] = array[index]
		array[index] = tmp //swap
	}
	return array
}
```
### Insertion Sort
```
function IS(array){ //time: O(n^2) space: O(1); Stable -> when input is small/nearly sorted: O(n)
	for(let i = 0; i < array.length; i++){ 
		if(array[i] < array[0]){ //move the item to the first position
			array.unshift(array.splice(i,1)[0])
		} else {
			for(let j = 1; j < i; j++){
				if(array[i] > array[j-1] && array[i] < array[j]){ //insert i at position j
					array.splice(j,0,array.splice(i,1)[0])
				}
			}
		}
	}
	return array
}
```
### Merge Sort
```
function MS(array){ //time: O(nlog(n)) space: O(n); Stable 
	if (array.length === 1) {
    	return array
  	}
  	const mid = Math.floor(array.length/2)
  	const left = array.slice(0, mid)
  	const right = array.slice(mid)
  	return merge(MS(left), MS(right))
}
function merge(left, right){
	let result = []
	let l = 0
	let r = 0
	while(l < left.length && r < right.length){
		if(left[l] < right[r]){
			result.push(left[l++])
		}else{
			result.push(right[r++])
		}
	}
	return result.concat(left.slice(l)).concat(right.slice(r)) //console.log(left, right)
}
```
### Quick Sort
```
function QS(array, left, right){ //time: O(nlog(n)) space: O(log(n)); Unstable -> O(n^2) if pivot is the min/max in an array
	let pivot
  	let partitionIndex
  	if(left < right) {
	    pivot = right
	    partitionIndex = partition(array, pivot, left, right)
	    QS(array, left, partitionIndex - 1)
	    QS(array, partitionIndex + 1, right)
  	}
  	return array;
}
function partition(array, pivot, left, right){
  	let pivotValue = array[pivot] //choose the rightest value as pivot
  	let partitionIndex = left
  	for(let i = left; i < right; i++) {
	    if(array[i] < pivotValue){
	      	swap(array, i, partitionIndex)
	      	partitionIndex++
	    }
  	}
  	swap(array, right, partitionIndex)
  	return partitionIndex
}
function swap(array, firstIndex, secondIndex){
    var temp = array[firstIndex]
    array[firstIndex] = array[secondIndex]
    array[secondIndex] = temp
}
```
## Q6: What Sorting Algorithm could be used?
- Sort 10 schools around your house by distance: Insertion Sort
- eBay sorts listings by the current Bid amount: Radix/Counting Sort
- Sport scores on ESPN: Quick Sort
- Massive database (can't fit all into memory) needs to sort through past year's user data: Merge Sort
- Almost sorted Udemy review data needs to update and add 2 new reviews: Insertion Sort
- Temperature Records for the past 50 years in Canada: Radix/Counting Sort OR Quick Sort
- Large user name database needs to be sorted with random data: Quick Sort
# Search
In-built function -> linear search: O(n)
- array.indexOf('item')
- array.findIndex(function(item){return item === 'item'})
- array.find(function(item){return item === 'item'})
- array.includes('item')

Find shortest paths between nodes: Dijkstra's algorithm OR Bellman–Ford algorithm(edge contains negative numbers)
# BFS
- pos: shortest path/closer nodes; cons: more memory
- time: O(|V|) -> |V| is the number of nodes, traverse all nodes
- space: O(|V|) -> hold all vertices in the queue
```
BreadthFirstSearch(){
    let currentNode = this.root
    let list = []
    let queue = [] //keep track of level we add
    queue.push(currentNode)
    while(queue.length > 0){ //if the level contains any element
	    currentNode = queue.shift()
	    list.push(currentNode.value)
	    if(currentNode.left) {
	        queue.push(currentNode.left)
	    }
	    if(currentNode.right) {
	        queue.push(currentNode.right)
	    }
    }
    return list
}

BreadthFirstSearchRecursive(queue, list){ //[tree.root], []
	if(!queue.length){
	    return list
	}
	let currentNode = queue.shift()
	list.push(currentNode.value)
	if(currentNode.left) {
	    queue.push(currentNode.left)
	}
	if(currentNode.right) {
	    queue.push(currentNode.right)
	}
	return this.BreadthFirstSearchRecursive(queue, list)
}
```
# DFS
- pos: less memory/does path exist; cons: slow
- time: O(|V|) -> traverse all nodes
- space: O(|V|) -> O(h) in recursive implementation, where h is the maximal depth of your tree; O(|V|) when using an iterative solution with a stack instead of a queue
```
function DFSPreOrder(node, list){ //parent -> left -> right
  	list.push(node.value)
  	if(node.left) {
    	    traversePreOrder(node.left, list)
  	}
  	if(node.right) {
    	    traversePreOrder(node.right, list)
  	}
  	return list
}

function DFSInOrder(node, list){ //left -> parent -> right
  	if(node.left) {
    	    traverseInOrder(node.left, list)
  	}
  	list.push(node.value)
  	if(node.right) {
    	    traverseInOrder(node.right, list)
  	}
  	return list
}

function DFSPostOrder(node, list){ //left -> right -> parent
  	if(node.left) {
    	    traversePostOrder(node.left, list)
  	}
  	if(node.right) {
    	    traversePostOrder(node.right, list)
  	}
  	list.push(node.value)
  	return list
}
```
## Q7: Which search is suitable?
- If you know a solution is not far from the root of the tree: BFS
- If the tree is very deep and solutions are rare: BFS(DFS will take long)
- If the tree is very wide: DFS(BFS need to much memory)
- If solutions are frequent but located deep in the tree: DFS
- Determining whether a path exists between two nodes: DFS
- Finding the shortest path: BFS
# Dynamic Programming 
Think about DP: divide and conquer/recursive/memorization/repetitive subproblems
```
function memoizeAddTo80(n){ 
  	let cache = {} 
  	return function(n){ //closure: access to an outer function’s scope from an inner function
		if(n in cache){ //use variable declared in the parent function
			return cache[n]
		}else{
			console.log('long time')
			const answer = n + 80
			cache[n] = answer
			return answer
		}
  	}
}
```
closure example: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
```
function makeAdder(x) { //function factory
  	return function(y) {
    		return x + y
  	}
}
var add5 = makeAdder(5)
var add10 = makeAdder(10)
console.log(add5(2)) --> 7
console.log(add10(2)) --> 12
```
## Q8: Improve Fibonacci?
```
function fibonacciMaster(){ //O(n), top-down
   let cache = {}
   return function fib(n){
        if(n in cache){
            return cache[n]
        }else{
        	if(n < 2){
            		return n
        	}else{
            		cache[n] = fib(n-1) + fib(n-2)
            		return cache[n]
        	}
    	}
    }
}
function fibonacciMaster2(n){ //bottom-up 
    let answer = [0,1]
    for (let i = 2; i <= n; i++){
    	answer.push(answer[i-2]+answer[i-1])
    }
    return answer.pop() //answer[n-1]
}
```
