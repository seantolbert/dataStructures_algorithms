// the largest values bubble up to the top one at a time

// as you loop throufgh the array, youu swap the larger
// of the 2 items being evaluated and keep passing through in that manner

// many sorting algos require swapping functionality
function swap(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

// or a less readable version

const swap2 = (arr, index1, index2) => {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
};

// naive version
const bubble = (arr) => {
  // start looping using i from the end of the array towards the beginning
  for (let i = arr.length; i > 0; i--) {
    // start an inner loop with a variable caklled j from the beginning until i - 1
    // this way j runs shorter each pass through
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      // if arr[j] is greater then the item after it in the array,
      if (arr[j] > arr[j + 1]) {
        // make your swap
        var temp = arr[j];
        arr[j] = arr[i];
        arr[j + 1] = temp;
      }
    }
    console.log("ONE PASS COMPLETE");
  }
  return arr;
};

// optimized version
// even if there is a nearly sorted list being entered,
// you will be looping through the array arr.length many
// times even after the sorting is complete
// you should only be looping through the array before the sorting is done
const optimizedbubble = (arr) => {
  // create a noswaps variable
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    // set to true upon reentering the j loop
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[i];
        arr[j + 1] = temp;
        // once a swap is made, change to false
        // so you do not break out of the loop
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
};

// Big O is O(n) since you are not using i as
// anything but a reference for the for loop with j
