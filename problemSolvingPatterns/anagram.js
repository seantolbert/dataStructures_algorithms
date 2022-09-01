// frequency counters method - uses objects or sets to collect values/frequencies of values

// given 2 strings write a function to determine if the second string is an anagram of the first (are the same letters present, just rearranged?)
// my attempt
// function validAnagram(str1, str2) {
//     let strArr1 = str1.split('')
//     let strArr2 = str2.split('')
//     console.log(strArr1)
//     console.log(strArr2)
//     let checker = []
//     if (strArr1.length !== strArr2.length) {
//         return false
//     }
//     for (let i = 0; i < strArr1.length; i++) {
//          if (strArr2.includes(strArr1[i])) {
//              checker.push(strArr1[i])
//          }
//         if (checker.length == strArr1.length) {
//             return true
//         }
//     }
// }

validAnagram('neat', 'tean')

function validAnagram(first, second) {
    if (first.length !== second.length) {
        return false
    }

    const lookup = {}

    for (let i = 0; i < first.length; i++) {
        let letter = first[i];
        // if letter exists, increment, otherwise, set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1
    }
    console.log(lookup)

    for (let i = 0; i < second.length; i++) {
        let letter = second[i]
        // can't find letter or letter is zero then it is not an anagram
        if (!lookup[letter]) {
            return false
        } else {
            lookup[letter] -= 1;
        }
    }
    return true
}
