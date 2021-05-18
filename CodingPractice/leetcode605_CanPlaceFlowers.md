# Description
You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots. Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule.
- flowerbed[i] is 0 or 1
- There are no two adjacent flowers in flowerbed
```
Input: flowerbed = [1,0,0,0,1], n = 1 Output: true
Input: flowerbed = [1,0,0,0,1], n = 2 Output: false
```
# Concept
Array
# Solution
1. record previous, current and next value to determine the plants
```
/*
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    for(let i=0; i<flowerbed.length; i++){
        let prev = flowerbed[i - 1]
        let cur = flowerbed[i]
        let next = flowerbed[i + 1]
        if(!prev && !cur && !next){ //outside array or 0
            flowerbed[i] = 1 //plant
            n--
            if(n === 0) return true
        }
    }
    return n <= 0
    /*
    let sum = 0
    flowerbed.map((x, i) => {
        if(!flowerbed[i - 1] && !x && !flowerbed[i + 1]) { //flowerbed[i] === 0 && flowerbed[i - 1] !== 1 && flowerbed[i + 1] !== 1
            sum++
            flowerbed[i] = 1
        }
    })
    return n <= sum
    */
};
```
2. use string manipulation with reduce method to determine where to plant
```
var canPlaceFlowers = function(flowerbed, n) {
    const s = flowerbed.join('').split('1')
    return s.reduce((sum, p, i) => {
        if (i === 0 && i === s.length - 1) {
            return (p.length + p.length % 2) / 2
        }
        if (i === 0 || i === s.length - 1) {
            return sum + (p.length - p.length % 2) / 2
        }
        return sum + ((p.length || 2) - p.length % 2 - !(p.length % 2) * 2) / 2
    }, 0) >= n
};
```
