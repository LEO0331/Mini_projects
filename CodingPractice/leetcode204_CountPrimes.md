# Description
Count the number of prime numbers less than a non-negative number, n.
# Concept
Hash Table, Sieve of Eratosthenes Algorithm
# Solution
1. Check prime number between 2~(n-1), only need to divide Square root of each number
```
/*
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    var count = 1 //number 2
    if(n <= 2){
        return 0
    }
    for(let i=3; i<n; i+=2){
        let flag = true
        for(let j=3; j*j<=i; j+=2){
            if(i%j === 0){
                flag = false 
                break
            }
        }
        if(flag){
            count++
        }
    }
    return count
};
```
2. Sieve of Eratosthenes Algorithm
```
var countPrimes = function(n) {
    let arr = new Array(n).fill(true)
    arr[0] = false
    arr[1] = false
    for(let i=2; i*i<n; i++){ //only need to count to the square root of n
        if(arr[i]){ //for any number n, its power n^2 is not prime, its n^2 + n/2n/3n... are not primes
            for(let j=i*i; j<n; j+=i){ //p*(p+1)
                arr[j] = false
            }
        }
    }
    /*
    let count = 0
    for (let i = 0; i < n; i++) {
        if(arr[i]) count++
    }
    return count
    */
    return arr.filter(val => val).length //how many true
}
```
