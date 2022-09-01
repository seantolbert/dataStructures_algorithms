// builds up the sort by gradually creating a 
// larger half which is always sorted

const insertionp = arr => {
    // start by picking the second element in the array
    // now compare the second element with the 
    // one before it and swap if necessary
    // continue to the next element and 
    // if it uis in the incorrect order, 
        // iterate backwards through the sorted portion
        // and place the element in the correct place
    
}

const insertion = (arr) => {
    // start by picking the second element in the array
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i]
        // iterate backwards through the array to see 
        // where it should be inserted 
        // for SOME REASON it needs to be var in front of the j, let and const do not work
        for (var j = i - 1; j >= 0 && arr[j] > current; j--) {
            arr[j + 1] = arr[j]
            console.log(arr)
        }
        arr[j + 1] = current;
        console.log(arr)
    }
    return arr;
}

insertion([23, 456, 234,654, 768, 234, 5223])

// big O is O(n^2) nested for loop dictates
// insertion works with live data so 
// consistent data coming in can be sorted ad hoc

