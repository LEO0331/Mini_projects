# Description
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if:
- Open brackets must be closed by the same type of brackets.
- Open brackets must be closed in the correct order.
# Concept
Stack
# Solution
Push left signs in a stack and pop it to compare with right signs to determine whether it matches the map
```
/*
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(!s) return true
    let stack = []
    const left = ['(','[','{']
    const right = [')',']','}']
    /*
    const map = {
        ')':'(',
        ']':'[',
        '}':'{'
    }
    */
    const map = {
        '(':')',
        '[':']',
        '{':'}'
    }
    for(let i in s){
        if(left.includes(s[i])){//left.indexOf(s[i]) > -1
            stack.push(s[i])
        }
        if(right.includes(s[i])){
            let e = stack.pop()
            //if(map[s[i]] !== e) return false
            if(map[e] !== s[i]) return false
        }
    }
    return stack.length === 0
};
```
