// Linear search - moving at a set interval, one item at a time, checking every single thing

const linear = (arr, val) => {
  // accepts an array and value
  // loop through the entire array,
  for (let i = 0; i < arr.length; i++) {
    // check if the current array element is equal to the value
    // if it is, return the index at which it was found
    if (arr[i] === val) return i;
  }
  return -1;
  // if the value is never found, return -1
};

// big O - O(n)
