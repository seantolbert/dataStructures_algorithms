// Write a function called averagePair. Given a sorted array of integers and a target average,
// determine if there is a pair of values in the array where the average of the pair equals the target average. 
// There may be more than one pair that matches the average target.

// my attempt

// function averagePair(arr, n) {
//     if (arr.length < 2) {
//         return false
//     }
//     let start = 0;
//     let next = 1;
//     while (next < arr.length) {
//         if ((arr[start] + arr[next]) / 2 === n) {
//             return true
//         }
//         start++;
//         next++;
//     }
//     return false;
// }

averagePair([1, 2, 3], 2.5)
// averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)

function averagePair(arr, n) {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        let avg = (arr[start] + arr[end]) / 2;
        if (avg === n) return true;
        else if (avg < n) start++;
        else end--
    }
    return false
}