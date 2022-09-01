// like merge sort, quick exploits the assumption
// that single item arrays are already sorted

// selects one element called the 'pivot' and finding the
// index where the pivot should end up in the sorted array

// once the pivot is established, repeat the process with the left side
// then right

//first implement a function responsible for arranging elements in an array
// on either side of the pivot

// given an array function should designate an element as the pivot
// rearrange the elements in the array so thath all values
// greater than the pivot are moved to the right of the pivot
// the order on either side of the pivot do not matter at this point
// this should be done in place as opposed to returning a new array
// returns the index of the pivot

// the runtime of quickSort depends on how pivot is selected
// ideally, the pivot should be the median value of the data set
// in the meantime, we will just select the first element for soimplicity

const pivot = (arr, start = 0, end = arr.length - 1) => {
  // accepts the array, the start index and the end index
  // define a reusable swap function
  const swap = (array, i, j) => {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  };
  // pick the pivot from the start of the array
  let pivot = arr[start];
  // store the current pivot index in a variable
  let swapIndex = start;
  // loop through the array from the start to end
  for (var i = start + 1; i < arr.length; i++) {
    // if the pivot is greater than the current element we are looping through,
    if (pivot > arr[i]) {
      // increment the pivot index variable and
      swapIndex++;
      // swap the current element with the one at the pivot index
      swap(arr, swapIndex, i);
      console.log("SWAP", arr);
    }
  }
  // swap the starting element with the pivot index
  swap(arr, start, swapIndex);
  // return the pivot index
  return swapIndex;
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  // base case occurs when you consider a subarray with less than 2 elements
  if (left < right) {
    // call helper
    let pivotIndex = pivot(arr, left, right);
    // recursively call the pivot helper on the subarray
    // to the left of the pivot
    quickSort(arr, left, pivotIndex - 1);
    // and the subarray to the right of the pivot
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
};

// Big O - O(n)