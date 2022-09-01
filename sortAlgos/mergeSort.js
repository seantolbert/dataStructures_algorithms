// merge sort works by decomposing an array into smaller arrays
// of 0 to 1 elements, then building up a newly sorted array

const merge = require("nodemon/lib/utils/merge");

// for example, breaks an array of 8 items into 8 different arrays
// by dividing the array by 2 over and over again
// making the big O bnotation logarithmic
// then adds the seoparate arrays back together by 2

// mergeSort helper function
const mergeHelper = (arr1, arr2) => {
  // create an empty array that you will return in the end
  let results = [];
  let i = 0;
  let j = 0;
  // while there are still values we have not looked at
  while (i < arr1.length && j < arr2.length) {
    // if teh value of the first array is smaller than the value in the second array
    if (arr2[j] > arr1[i]) {
      // push the value in the first array into our results,
      results.push(arr1[i]);
      // and move on to the next value in the first array
      i++;
      // if the value in the first array is larger than the second array,
    } else {
      // push the value in the second array into our results,
      results.push(arr2[j]);
      // and move om to the next value in the second array
      j++;
    }
  }
  // once we finish an array, push in all the remaining values from the other array
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
};

const mergeSort = (arr) => {
  // edge case: if the array is too small to sort, return
  if (arr.length <= 1) return arr;
  // assign the mid point to a variable
  let mid = Math.floor(arr.length / 2);
  // recursively call and assign the individual halves to variables
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  // until you have arrays that are empty or have one element
  // once you have your smaller arrays
  // merge those arrays until you are back at the full  length of the array
  // return the merged and sorted array
  return mergeHelper(left, right);
};

// Big O = O(n log n)