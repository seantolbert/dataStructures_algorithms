// accepts 2 arrays, returns true if every value in the array has its corresponding value squared in the second array, frequency of values must be the same

function same(arr1, arr2) {
    // determine f the same amount of items are in each array
    if (arr1.length !== arr2.length) {
        return false
    }
    // loop over the first array
    for (let i = 0; i < arr1.length; i++) {
        // create the correct corresponding array to compare arr2 with
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        // if returned value is ever negative then its false
        if (correctIndex === -1) {
            return false
        }
        // console.log(arr2)
        // removes the already found number so we are not double checking the same number
        arr2.splice(correctIndex, 1)
    }
    return true
}

same([1, 2, 3, 4], [1, 4, 9, 6])

// refactored to avoid nested loops

function sameSame(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false
    }
    // counting the individual values in each array
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    // looping through array 1
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    // looping through array 2
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    console.log(frequencyCounter1)
    console.log(frequencyCounter2)

    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false
        }
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false
        }
    }
    return true
}

sameSame([1, 2, 3, 2, 5], [9, 1, 4, 4, 11])