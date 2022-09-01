// binary search is MUCH faster than linear searching
// rather than eliminating one element at a time,
// you can eliminate half of the remaining elements
// at a time but the list must be sorted

const binary = (arr, val) => {
  // should acept an array and value
  // create a pointer for the start of the array
  let start = 0;
  // create a pointer for the end of the array
  let end = arr.length - 1;
  // create a pointer for the center of start and end
  let middle = Math.floor((start + end) / 2);
  // while the left pointer comes before the right pointer and the middle does not = our value
  while (arr[middle] !== val && start <= end) {
    // if value is less than the middle of array's value
    if (val < arr[middle]) {
      // move the end of the array down
      end = middle - 1;
    } else {
      // move the start up
      start = middle + 1;
    }
    // recoorddinate the middle within the while loop
    middle = Math.floor((start + end) / 2);
  }
  // check if value has been found
  if (arr[middle] === val) return middle;
  // return -1 if not
  return -1;
};

// Big O = O(log n) because n is determined by how many times we divide n by 2
