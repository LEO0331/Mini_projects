# Description
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and return the result in any order.
# Concept
Hash Table, Map
# Solution
1. Based on the length of the array, construct a map to record all elements and their appeared times
```
/*
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let arr = []
    let map = {}
    if(nums1.length >= nums2.length){
        for(let e of nums1){
            map[e] = (map[e] || 0) + 1
        }
        for(let i of nums2){
            if(map[i]){
                arr.push(i)
                map[i]--
            }
        }
    }else{
        for(let e of nums2){
            map[e] = (map[e] || 0) + 1
        }
        for(let i of nums1){
            if(map[i]){
                arr.push(i)
                map[i]--
            }
        }
    }
    return arr
};
```
2. Remove intersection element by looping through the shorter array
```
var intersect = function(nums1, nums2) {
    let l, s
    let arr = []
    if(nums1.length >= nums2.length){
        l = nums1
        s = nums2
    }else{
        l = nums2
        s = nums1
    }
    for(let i=0; i<s.length; i++){
        let v = s[i]
        if(l.indexOf(v) >= 0){
            l[l.indexOf(v)] = null //clear the found element
            arr.push(v)
        }
    }
    return arr
}
```
