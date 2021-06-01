# Description
Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1. Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2.  Elements that don't appear in arr2 should be placed at the end of arr1 in ascending order.
```
Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6] Output: [2,2,2,1,4,3,3,9,6,7,19]
```
# Concept
Array, Map, Filter, Concat
# Solution
1. push all same elements in another array, filter the non-common one to with sortation and concat at the end
```
/*
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    /*
    let arr = []
    arr2.forEach((a, idx) => {arr.push(...arr1.filter(n => n === a))})
    return [...arr, ...arr1.filter(a => !arr2.includes(a)).sort((b,c) => b-c)]
    */
    let res = []
    for (let i = 0; i < arr2.length; i++) {
        res = res.concat(arr1.filter(j => j === arr2[i])) //find all matching numbers in arr1 
        arr1 = arr1.filter(j => j !== arr2[i]) //remove non-common numbers 
    }
    return res.concat(arr1.sort((a, b) => a - b))
};
```
2. map arr2 and sort arr1 with custom comparator
```
var relativeSortArray = function(arr1, arr2) {
    const map = new Map()
    arr2.forEach((a, idx) => map.set(a, idx))
    const l = arr2.length
    return arr1.sort((a, b) => { 
        a = map.has(a) ? map.get(a) : l + a
        b = map.has(b) ? map.get(b) : l + b
        return a - b //ascending order
    })
};
```
