# Description
Alice and Bob have candy bars of different sizes: aliceSizes[i] is the size of the i-th bar of candy that Alice has, and bobSizes[j] is the size of the j-th bar of candy that Bob has. Since they are friends, they would like to exchange one candy bar each so that after the exchange, they both have the same total amount of candy.  (The total amount of candy a person has is the sum of the sizes of candy bars they have.) Return an integer array ans where ans[0] is the size of the candy bar that Alice must exchange, and ans[1] is the size of the candy bar that Bob must exchange. If there are multiple answers, you may return any one of them.  It is guaranteed an answer exists.
- It is guaranteed that Alice and Bob have different total amounts of candy
- It is guaranteed there exists an answer
```
Input: aliceSizes = [1,1], bobSizes = [2,2] Output: [1,2]
Input: aliceSizes = [1,2], bobSizes = [2,3] Output: [1,2]
Input: aliceSizes = [2], bobSizes = [1,3] Output: [2,3]
Input: aliceSizes = [1,2,5], bobSizes = [2,4] Output: [5,4]
```
# Concept
Array, Set, Map
# Solution
1. use set and check the difference between alice and bob
```
/*
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function(aliceSizes, bobSizes) {
    let sumA = aliceSizes.reduce((acc, cur) => acc + cur) //for (let i = 0; i < aliceSizes.length; i++) aliceSize += aliceArr[i]
    let sumB = bobSizes.reduce((acc, cur) => acc + cur) //for (let i = 0; i < bobSizes.length; i++) aliceSize += aliceArr[i]
    const diff = (sumA - sumB) >> 1 //half
    const set = new Set(aliceSizes) //aliceSizes as base
    for (let candy of bobSizes) {
        if(set.has(candy + diff)) return [candy + diff, candy]
    }
};
```
2. use double for loop to look through the gap between alice and bob
```
var fairCandySwap = function(aliceSizes, bobSizes) {
    let sumA = aliceSizes.reduce((acc, cur) => acc + cur)
    let sumB = bobSizes.reduce((acc, cur) => acc + cur)
    let swap = []
    let diff = sumA - sumB
    for (let i = 0; i < aliceSizes.length; i++) {
        for (let j = 0; j < bobSizes.length; j++) {
            if ((aliceSizes[i] - bobSizes[j]) === (diff/2)) {
                swap.push(aliceSizes[i], bobSizes[j])
                return swap
            }
        }
    }
};
```
3. use map to record the element in the array and check the difference between alice and bob -> time/space: O(n)
```
var fairCandySwap = function(aliceSizes, bobSizes) {
    let sumA = 0, sumB = 0
    let m1 = new Map(), m2 = new Map()
    for (let num of aliceSizes) {
        sumA += num
        m1.set(num, m1.get(num)+1 || 1)
    }
    for (let num of bobSizes) {
        sumB += num
        m2.set(num, m2.get(num)+1 || 1)
    }
    let average = (sumA + sumB)/2 //(sumA + sumB) >> 1
    for (let num of aliceSizes) {
        let diff = average-sumA
        if (m2.has(num+diff)) return [num, num+diff] //bobSizes as base
    }
    /*
    for (let candy of bobSizes) {
        let diff = average-sumB
        if(m1.has(candy + diff)) return [candy + diff, candy]
    }
    */
};
```
