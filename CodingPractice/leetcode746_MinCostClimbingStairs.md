# Description
You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps. You can either start from the step with index 0, or the step with index 1. Return the minimum cost to reach the top of the floor.
```
Input: cost = [10,15,20] Output: 15 Explanation: Cheapest is: start on cost[1], pay that cost, and go to the top.
Input: cost = [1,100,1,1,1,100,1,1,100,1] Output: 6 Explanation: Cheapest is: start on cost[0], and only step on 1s, skipping cost[3].
```
# Concept
Array, DP
# Solution
1. calculate the min cost each time after iteration -> time: O(n), space: O(1)
```
/*
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let m1 = cost[0], m2 = cost[1]
    for(let i = 2; i < cost.length; i++){
        let temp = Math.min(m1, m2) + cost[i]
        m1 = m2
        m2 = temp
    }
    return Math.min(m1, m2)
};
```
2. use array to perform the calculation -> time/space: O(n)
```
var minCostClimbingStairs = function(cost) {
    let minCosts = new Array(cost.length + 1) //last index is the end of the floor
    minCosts[0] = cost[0], minCosts[1] = cost[1] //the minimum cost to get to i and climb up from i
    for (let i = 2; i <= cost.length; i++) {
        minCosts[i] = Math.min(minCosts[i-1], minCosts[i-2]) + (i == cost.length ? 0 : cost[i]) // 0: no more stair to climb up
    }
    return minCosts[minCosts.length - 1] //minCosts.pop()
    /*
    cost.push(0) //last index is the end of the floor with no more stair to climb up and add
	let dp = [cost[0], cost[1]]
	for (let i = 2; i < cost.length; i++) {
	    dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i]
	}
	return dp[dp.length - 1] //dp.pop()
    */
};
```
3. recursion with cache
```
var minCostClimbingStairs = function (cost) {
    let cache = []
    let helper = (cost, index) => {
	if (index < 0) return 0
	if (index < 2) return cost[index] //base
	if (cache[index]) return cache[index]
	cache[index] = Math.min(helper(cost, index - 1), helper(cost, index - 2)) + cost[index]
	return cache[index]
    }
    cost.push(0)
    return helper(cost, cost.length - 1)   
    /* Recursion without cache: Time Limit Exceeded
    let helper = (cost, index) => {
	if (index < 0) return 0
	if (index < 2) return cost[index]
	return Math.min(helper(cost, index - 1), helper(cost, index - 2)) + cost[index]  
    }
    cost.push(0)
    return helper(cost, cost.length - 1)
    */
};
```
