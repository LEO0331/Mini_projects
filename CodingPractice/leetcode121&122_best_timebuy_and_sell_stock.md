# Description
Given an array prices where prices[i] is the price of a given stock on the ith day. 
1. Maximize profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit from this transaction. If no profit, return 0.
2. Find the maximum profit. Can complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times). But can not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

# Concept
Array

# Solution
1. Record the maximum and minimum values through days: time -> 0(n), space -> 0(1)
```
/*
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0
    let min = prices[0]
    for(let i = 1; i<prices.length; i++){
        if(prices[i] > prices[i-1]){
            profit = Math.max(profit, prices[i]-min)
        }else{
            min = Math.min(min, prices[i])
        }
    }
    return profit
};
```
2. Take any profit/Collect all price gain if there is a gap between low and high price(buy at low, sell at high): time -> 0(n), space -> 0(1)
```
/*
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0
    for(let i = 0; i<prices.length; i++){
        if(prices[i] > prices[i-1]){
            profit += prices[i] - prices[i-1]
        }
    }
    /*
    if(prices.length <= 1) return 0
    let profit = 0
    for(let i = 1; i < prices.length; i++) {
        profit += Math.max(0, prices[i] - prices[i-1])
    }
    */
    return profit
};
```
