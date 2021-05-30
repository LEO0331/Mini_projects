# Description
Given an array words of strings made only from lowercase letters, return a list of all characters that show up in all strings within the list (including duplicates).  For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer.
```
Input: ["bella","label","roller"] Output: ["e","l","l"]
Input: ["cool","lock","cook"] Output: ["c","o"]
```
# Concept
Array
# Solution
Use an array to store all common words or in-place filter by index, using the first element as the base
```
/*
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    /*
    const res = []
    const w = [...words[0]]
    for(const letter of w) {
        if(words.every(word => word.includes(letter))){// check if all elements in an array pass a test
            res.push(letter) //record the common letter
            words = words.map(word => word.replace(letter, '')) //delete the recorded common letter in all strings
        }
    }    
    return res
    */
    const findCommon = (prev, curr) => {
        curr = curr.split('')
        return prev.filter(p => {
            const i = curr.indexOf(p)
            if(i !== -1) {
                curr.splice(i, 1) //remove the recorded common letter
                return true
            }
            return false
        })
    }
    return words.reduce(findCommon, words[0].split(''))
};
```
