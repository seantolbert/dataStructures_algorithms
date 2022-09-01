// Multiple pointers method - creating pointers or values that correspond to an index or position and move towards the beginning,
// end or middle based on a certain condition. 

// implement a function that accepts a SORTED array, and counts the unique values in the array. 
// There can be negative numbers in the array, but it will always be sorted.

countUniqueValues([-1, 1, 1, 1, 1, 2, 6, 8])

// function countUniqueValues(arr) {
//     const uValues = [...new Set(arr)]
//     return uValues.length
// }
// I DID IT!!!! but only because Set() is a new js array method

// intended approach
// function countUniqueValues(arr) {
//     let result = []
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             result.push(arr[i])
//             if (arr[i] !== arr[j]) {
//                 result.pop(arr[j])
//                 result.push(arr[j])
//             }
//         }
//     }
//     console.log(result)
//     return result.length
// }

// ^ NOPE

function countUniqueValues(arr) {
    // start at the beginning of the array
    let i = 0;
    // loop through the array startoing with the second item
    for (let j = 1; j < arr.length; j++) {
        // when they don't equal,  
        if (arr[i] !== arr[j]) {
            // i moves forward independently from the for loop, while the j keeps moving and
            i++;
            // changes the item to whatever arr[j] is since it does not equal arr[i]
            arr[i] = arr[j]
        }
        // console.log(i, j)
    }
    return i + 1
}