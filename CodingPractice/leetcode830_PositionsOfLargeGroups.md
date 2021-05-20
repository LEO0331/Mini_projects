# Description
In a string s of lowercase letters, these letters form consecutive groups of the same character. For example, a string like s = "abbxxxxzyy" has the groups "a", "bb", "xxxx", "z", and "yy". A group is identified by an interval [start, end], where start and end denote the start and end indices (inclusive) of the group. In the above example, "xxxx" has the interval [3,6]. A group is considered large if it has 3 or more characters. Return the intervals of every large group sorted in increasing order by start index.
```
Input: s = "abbxxxxzzy" Output: [[3,6]] Explanation: "xxxx" is the only large group with start index 3 and end index 6.
Input: s = "abc" Output: [] Explanation: We have groups "a", "b", and "c", none of which are large groups.
Input: s = "abcdddeeeeaabbbcd" Output: [[3,5],[6,9],[12,14]] Explanation: The large groups are "ddd", "eeee", and "bbb".
Input: s = "aba" Output: []
```
# Concept
Array, Two Pointers
# Solution
Use one pointer to record the starting point and one counter to record the string length
```
/*
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function(s) {
    let arr = []
    let pointer = 0
    let count = 1
    for(let i=1; i<s.length; i++){
        if(s[i] === s[i-1]) {
          count++
          if(i == s.length - 1 && count >= 3) arr.push([pointer, pointer+count-1]) //last element
        }else if(s[i] !== s[i-1]){
            if(count >= 3 ) arr.push([pointer, pointer+count-1])
            count = 1
            pointer = i
        }
    }
    return arr
};
var largeGroupPositions = function(s) {
    let arr = []
    let pointer = 0
    let count = 0
    for(let i=0; i<s.length; i++){
        if(s[i] === s[pointer]){
            count++
            if(i == s.length - 1 && count >= 3) arr.push([pointer, pointer+count-1])
        }else{
            if(count >= 3 ) arr.push([pointer, pointer+count-1])
            count = 1
            pointer = i
        }
    }
    return arr
};
var largeGroupPositions = function(s) { //record all substring length
    let arr = []
    let i = 0, j = 1
    while(j < s.length){
        if(s[j] == s[i])
            j++
        else {
            arr.push([i,j-1]) //start/end index
            i = j
            j++
        }
    }
    arr.push([i,j-1]) //push the last char sequence 
    return arr.filter(a => a[1] - a[0] + 1 >= 3)
}
```
