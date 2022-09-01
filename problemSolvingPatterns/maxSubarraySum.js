// sliding window method - creates a window which can either be an array or number from one position to another.
// depending on a certain condition, the window either increases or closes and a new window is created
// very useful for keeping track of a subset of data in an array/string etc.

// function accepts an array of integers and n.
// calculate the maximum sum of n consecutive elements in the array

maxSubarraySum([1, 2, 34, 5, 3, 2, 4, 5], 4);

// my attempt

function maxSubarraySum(arr, n) {
  // if the amount of numbers we need to add together exceeds the size of the array, return null
  if (n > arr.length) {
    return null;
  }
  // to account for a potential array with all negative numbers, our biggest sum would still be negative
  // therefore starting it at 0 does not work
  let max = -Infinity;
  // the -n+1 part accounts for us not seeking the largest sum at the end of the array,
  // as in starting at the last item and looking for 4 more
  for (let i = 0; i < arr.length - n + 1; i++) {
    // temp will store our individual sums each time through
    temp = 0;
    // j will only loop through the next n numbers in array
    for (let j = 0; j < n; j++) {
      // arr[i + j] is a quick way to add the n numbers between them together
      temp += arr[i + j];
    }
    // there is nothing lower than -Infinity in js so we will be updatigng it no matter what
    if (temp > max) {
      max = temp;
    }
    console.log(temp, max);
  }
  return max;
}

// refactored

// function maxSubarraySum(arr, num) {
//     let maxSum = 0;
//     let tempSum = 0;
//     if (arr.length < num) return null;
//     for (let i = 0; i < num; i++) {
//         maxSum += arr[i];
//     }
//     tempSum = maxSum
//     for (let i = num; i < arr.length; i++) {
//         tempSum = tempSum - arr[i - num] + arr[i];
//         maxSum = Math.max(maxSum, tempSum);
//     }
//     return maxSum
// }
