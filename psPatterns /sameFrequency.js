// Write a function called sameFrequency. Given two positive integers, 
// find out if the two numbers have the same frequency of digits.

function sameFrequency(first, second) {
    let numArr1 = first.toString().split('');
    let numArr2 = second.toString().split('');
    console.log(numArr1, numArr2)
    let confirm ={}
    if (numArr1.length !== numArr2.length) {
        return false
    }
    for (let i = 0; i < numArr1.length; i++) {
        let digit = numArr1[i];
        confirm[digit] ? confirm[digit] += 1 : confirm[digit] = 1
    }
    console.log(confirm)
    for (let i = 0; i < numArr2.length; i++ ) {
        let digit = numArr2[i];
        if (!confirm[digit]) {
            return false
        } else {
            confirm[digit] -= 1
        }
    }
    return true
}

sameFrequency(59768, 58976)

// experimenting where i just use sort and compare the 2 arrays
// was not accepted

// function sameFrequency(first, second) {
//     let arr1 = first.toString().split('').sort();
//     let arr2 = second.toString().split('').sort();
//     console.log(arr1, arr2)
//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i] !== arr2[i]) return false
//     }
//     return true
// }