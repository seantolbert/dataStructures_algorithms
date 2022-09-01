// Divide and conquer method - divides a data set into smaller chunks and then repeating a process with a subset of data

// given a SORTED array of integers, write a function that accepts a value and returns the index where the value passed to the function is located, 
// if the value is not found, return negative 1


// naive solution also known as linear search

// function search(arr, n) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === n) {
//             return i
//         }
//     }    
//     return -1
// }

search([1, 2, 3, 5, 6, 23], 23)


//  refactor also known as a binary search
function search(arr, val) {
    let min = 0
    let max = arr.length - 1;

    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
        let currentElement = arr[middle]

        if (arr[middle] < val) {
            min = middle + 1;
        } else if (arr[middle] > val) {
            max = middle -1;
        } else {
            return middle
        }
    }
    return -1
}