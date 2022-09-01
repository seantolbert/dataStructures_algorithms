// takes an array and returns the product of all the numbers 

// my attempt

// function productOfArray(arr) {
//     let product = 1
//     function helper(helperArr) {
//         console.log(helperArr)
//         console.log(product)
//         if (helperArr.length === 0) { 
//             return;
//         } else {
//             product = helperArr[0] * helperArr[1]
//         }
//         helper(helperArr.slice(1));
//     }
//     helper(arr)
//     return product
// }

productOfArray([1, 2, 3, 4])

function productOfArray(arr) {
    if (arr.length === 0) return 1;
    return arr[0] * productOfArray(arr.slice(1))
}