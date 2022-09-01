// Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of 
// a subarray with the length of the number passed to the funtion
// the subarray must consist of consecutive elements from the original array.

maxSubarraySum([-3,4,0,-2,6,-1], 2)

function maxSubarraySum(arr, n) {
    let maxSum = 0;
    let windowSum = 0;
    if (n > arr.length) return null;
    for (let i = 0; i < n; i++) {
        maxSum += arr[i];
    }
    windowSum = maxSum;
    for (let i = n; i < arr.length; i++) {
        windowSum = windowSum - arr[i - n] + arr[i];
        maxSum = Math.max(maxSum, windowSum);
    }
    return maxSum
}