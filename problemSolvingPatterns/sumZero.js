// function that accepts a SORTED array of integers. the function should find the first pair where the sum is 0. 
// Return an array that includes both values if their sum = 0 or undefined if there is no pair. 

// this would not work if its not sorted

sumZero([-3, -2, -1, 0, 5, 2, 2])

// my attempt
// function sumZero(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[i] + arr[j] === 0) {
//                 return [arr[i], arr[j]]
//             }
//         }
//     }
// }


// refactored

function sumZero(arr) {
    // first index of the array
    let left = 0;
    // last index of the array
    let right = arr.length - 1;
    // safe to assume left will be less than right since its a sorted array
    while (left < right) {
        // assign the operation to a variable
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]]
        // if the sum is greater than 0 move on to the second to last item in array
        } else if (sum > 0) {
            right--;
        // if the sum is less than 0 (possible with negative numbers) move on to second item in array etc.
        } else {
            left++;
        }
    }
}