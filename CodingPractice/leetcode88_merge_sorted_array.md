# Description
Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array. The number of elements initialized in nums1 and nums2 are m and n respectively. Assume that nums1 has a size equal to m + n so that it has enough space to hold additional elements from nums2.
# Concept
Array, Merge Sort 
# Solution
Insert array nums2 from the end of the array nums1: count number from right to the left(large to small)
```
/* 
* @param {number[]} nums1
* @param {number} m
* @param {number[]} nums2
* @param {number} n
* @return {void} Do not return anything, modify nums1 in-place instead.
*/
var merge = function(nums1, m, nums2, n) {
    let len = m + n - 1
    while (len >= 0) {
        if (n < 1) return
        if (nums1[m-1] > nums2[n-1]) {
            nums1[len--] = nums1[--m]
        } else {
            nums1[len--] = nums2[--n]
        }
    }
    /*
    var current = m+n-1
    while(current > -1){
        if (n === 0 ) return
        if (m === 0) {
            nums1[current--] = nums2[--n]
            continue;
        }
        if (n === 0) {
            nums1[current--] = nums1[--m]
            continue;
        }
        if(nums1[m-1] > nums2[n-1]){
            nums1[current--] = nums1[--m]
        }else{
            nums1[current--] = nums2[--n]
        }
    }
    */
};
```
# Complement
Merge Sort: involve new array, not in-place
```
function merge(nums1, nums2){
  let arr = []
  while(nums1.length || nums2.length){
    if(nums1.length === 0){
      arr.push(nums2) //nums2.shift()
      //continue
    }
    if(nums2.length === 0){
      arr.push(nums1) //nums1.shift()
      //continue
    }
    let a = nums1[0]
    let b = nums2[0]
    if(a > b){
      arr.push(nums2.shift());
    } else {
      arr.push(nums1.shift());
    }
  }
  return arr
}

function mergeArray(array1, array2){
	const ans = []
	if(array1.length === 0){
		return arr2
	}
	if(array2.length === 0){
		return arr1
	}
	let item1 = arr1[0]
	let item2 = arr2[0]
	let i = 1
  	let j = 1
	while (item1 || item2){
	   	if(item2 === undefined || item1 < item2){
		    ans.push(item1)
		    item1 = array1[i]
		    i++
	   	}   
	   	else {
		    ans.push(item2)
		    item2 = array2[j]
		    j++
	   	}
	}
  	return ans
}
```
