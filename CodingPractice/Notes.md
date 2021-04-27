# Data Structure Notes
Good Code? https://www.bigocheatsheet.com/
1. Readable
2. Scalable(Big 0) -> time/space complexity
O(1) Constant - no loops e.g. in JS, .length is a built-in function so that no looping from the first string: O(1)
O(log n) Logarithmic - usually searching algorithms have log n if they are sorted (Binary Search)
O(n) Linear - for loops, while loops through n items
O(n log(n)) Log Liniear - usually sorting operations
O(n^2) Quadratic - every element in a collection needs to be compared to ever other element. Two
nested loops
O(2^n) Exponential - recursive algorithms that solves a problem of size N
O(n!) Factorial - you are adding a loop for every element
Iterating through half a collection is still O(n)
Two separate collections: O(a * b)

-What can cause time in a function?-
Operations (+, -, *, /)
Comparisons (<, >, ==)
Looping (for, while)
Outside Function call (function())

-Rule Book-
Rule 1: Always worst Case
Rule 2: Remove Constants
Rule 3: Different inputs should have different variables. O(a+b). A and B arrays nested would be O(a*b), + for steps in order, * for nested steps
Rule 4: Drop Non-dominant terms

-What causes Space complexity?-
Variables
Data Structures
Function Call
Allocations

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
[✅]It works
[✅]Good use of data structures
[✅]Code Re-use/ Do Not Repeat Yourself
[✅]Modular - makes code more readable, maintainable and testable
[✅]Less than O(N^2). We want to avoid nested loops if we can since they are expensive. Two separate loops are better than 2 nested loops
[✅]Low Space Complexity --> Recursion can cause stack overflow, copying of large arrays may exceed memory of machine
Tips:
[✅]Hash Maps are usually the answer to improve Time Complexity
[✅]If it's a sorted array, use Binary tree to achieve O(log N). Divide and Conquer - Divide a data set into smaller chunks and then repeating a process with a subset of data. Binary search is a great example 
[✅]Try Sorting your input
[✅]Hash tables and precomputed information (i.e. sorted) are some of the best ways to optimize your code
[✅]Look at the Time vs Space tradeoff. Sometimes storing extra state in memory can help the time(Runtime)
[✅]If the interviewer is giving you advice/tips/hints. Follow them
[✅]Space time tradeoffs: Hastables usually solve this a lot of the times. You use more space, but you can get a time optimization to the process. In programming, you often times can use up a little bit more space to get faster time

Q1: Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
For Example: 4bytes = 32bits --> array1: 4*4 = 16 bytes of storage
const array1 = ['a', 'b', 'c', 'x']; const array2 = ['z', 'y', 'i'];
should return false.
-----------
const array1 = ['a', 'b', 'c', 'x']; const array2 = ['z', 'y', 'x'];
should return true.

2 parameters - arrays - no size limit - need to consider large size
return true or false

Brute force: O(n^2) --> O(a*b); O(1) - Space Complexity
```
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
Array
End: push('element')/pop() --> O(1)

Start: shift()/unshift('element') --> O(n)

Array(static vs dynamic)

End: push('element')/pop() --> O(1) --- append('element'): O(1)/O(n)

Start: shift()/unshift('element') --> O(n)

Middle: splice(start, deleteCount, itemTobeAdded): changes the original array, return the removed items VS slice(start, end): selected from start to end (end not included), original array will NOT be modified(return a shallow copy of a portion of an array) --> O(n)

String: convert it to an array --> split() --> https://www.w3schools.com/jsref/jsref_split.asp, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor, https://medium.com/@ashfaqueahsan61/time-complexities-of-common-array-operations-in-javascript-c11a6a65a168

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
Q2: Reverse a string
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
Q3: Merge two sorted arrasy
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
	let i = 1;
  	let j = 1;
	while (item1 || item2){
	   	if(item2 === undefined || item1 < item2){
		    ans.push(item1);
		    item1 = array1[i];
		    i++;
	   	}   
	   	else {
		    ans.push(item2);
		    item2 = array2[j];
		    j++;
	   	}
	}
  	return ans;
}
```
