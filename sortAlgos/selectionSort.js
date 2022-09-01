// similar to bubble sort, but instead of first
// placing large values into sorted positions,
// it places small values into sorted positions

// immediately finds the minimum value in the array on EACH PASS
// and swaps with the very first element instead of the one before it

// right way
const selection = (arr) => {
  // initisla for loop to keep the loop going for
  // at most arr.length amount of passes
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    // j = i + 1 to account for the array getting shorter every pass
    for (let j = i + 1; j < arr.length; j++) {
      console.log(i, j);
      // if arr[j] is less than our current lowest
      if (arr[j] < arr[min]) {
        // update the value of min
        min = j;
      }
    }
    // to check and make sure we are not unecessarily swapping equal numbers
    if (i !== min) {
      // swap
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
};

// Big O = O(n^2) due to the nested loop so not great
// selection sort is best if you want to minimize 
// the amount of swaps you are making 
