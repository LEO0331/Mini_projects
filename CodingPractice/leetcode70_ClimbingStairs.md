# Description
You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
# Concept
DP, Fibonacci
# Solution
1. iteration methods to count Fibonacci numbers
```
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    //if(n<=1) return 1
    let pre = 1
    let cur  = 1
    for(let i = 2; i <= n; i++){
        let temp = cur
        cur += pre //cur = cur + prev
        pre = temp
    }
    return cur
    /*
    while(n >= 2){
        let temp = cur
        cur += pre //cur = cur + prev
        pre = temp
        n--
    }
    return cur
    */
};
```
2. DP solution in array or cache
```
var climbStairs = function(n) {
    let answer = [1,1]
    for (let i = 2; i <= n; i++){
    	answer.push(answer[i-2]+answer[i-1])
    }
    return answer.pop() //answer[n-1]
    /*
    let cache = {}
    function helper(n){ 
        if (n <= 2) return n //fib: if (n <= 1) return n
        if (cache[n] === undefined){
            cache[n] = helper(n-1) + helper(n-2)
        }
        return cache[n]
    }
    return helper(n)
    */
};
```
