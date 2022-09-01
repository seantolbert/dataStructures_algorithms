// adds all the numberrs within that provided number and 1

function sumRange(num) {
    // base case
  if (num === 1) return 1;
  // different call
  return num + sumRange(num - 1);
}
