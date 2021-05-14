# Description
Given an integer n, return a string array answer (1-indexed) where:
- answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
- answer[i] == "Fizz" if i is divisible by 3.
- answer[i] == "Buzz" if i is divisible by 5.
- answer[i] == i if non of the above conditions are true.
# Concept
Array
# Solution
Push corresponding values to the array based on the description followed by index or use map() to simplify
```
/*
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let answer = []
    for(let i=1; i<=n; i++){
        if(i%3 === 0 && i%5 === 0) answer.push("FizzBuzz") //i%15 === 0
        else if(i%3 === 0) answer.push("Fizz")
        else if(i%5 === 0) answer.push("Buzz")
        else answer.push(i.toString()) //''+i
    }
    return answer
    /*
    for(let i=1; i<=n; i++){
        if(i%15 === 0) answer[i] = 'FizzBuzz'
        else if(i%3 === 0) answer[i] = 'Fizz'
        else if(i%5 === 0) answer[i] = 'Buzz'
        else answer[i] = ''+i
    }
    answer.shift()
    return answer
    */
    //return new Array(n).fill(0).map((e, i) => (++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || '' + i)
};
```
