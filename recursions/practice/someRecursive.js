// accepts an array and a callback function
// returns true if a single value in the array returns true for the provided callback

function someRecursive(arr, callback) {
  if (arr.length === 0) return false;
  if (callback(arr[0])) return true;
  return someRecursive(arr.slice(1), callback);
}
