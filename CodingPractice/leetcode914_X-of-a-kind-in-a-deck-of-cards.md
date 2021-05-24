# Description
In a deck of cards, each card has an integer written on it. Return true if and only if you can choose X >= 2 such that it is possible to split the entire deck into 1 or more groups of cards, where: Each group has exactly X cards. All the cards in each group have the same integer.
```
Input: deck = [1,2,3,4,4,3,2,1] Output: true Explanation: Possible partition [1,1],[2,2],[3,3],[4,4].
Input: deck = [1,1,1,2,2,2,3,3] Output: false Explanation: No possible partition.
Input: deck = [1] Output: false Explanation: No possible partition.
Input: deck = [1,1,2,2,2,2] Output: true Explanation: Possible partition [1,1],[2,2],[2,2].
Input: deck = [1,1] Output: true Explanation: Possible partition [1,1].
```
# Concept
Array, Map
# Solution
Use map to record the key-value pair and implement gcd to the array of value
```
/*
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    const gcd = (x, y) => (x === 0 ? y : gcd(y % x, x))
    let map = new Map()
    for(let i=0; i<deck.length; i++){
        if(map.has(deck[i])) map.set(deck[i], map.get(deck[i]) + 1) 
        else map.set(deck[i], 1)
    }
    const val = Array.from(map.values())
    return val.reduce(gcd) > 1
};
var hasGroupsSizeX = function(deck) {
    const map = {}
    deck.forEach(d => map[d] = (map[d] || 0) + 1)
    const gp = Object.values(map)
    let g = gp[0]
    for (let i = 1; i < gp.length; i++) {
        g = gcd(g, gp[i])
        if (g < 2) return false
    }
    return g >= 2
}
const gcd = (x, y) => (x === 0 ? y : gcd(y % x, x)) //greatest common divisor
```
# Complement 
``` 
for (const [key, value] of map.entries()) { //map.forEach((value, key) => {})
    console.log((key, value)) //display key-value
}
```
