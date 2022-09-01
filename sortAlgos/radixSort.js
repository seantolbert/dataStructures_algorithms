// comparison sorts are sorts that only ever compare 2 things at one time

// radix sort works on lists of numbers and is not a comparison sort
// exploits the fact that information about the size of
// the number is encoded in the number of digits
// more digits dictates a larger number

// required helper functions
const getDigit = (num, place) => {
  // returns the digit in num at the given place value
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
};

getDigit(7323, 2); // you would get 3 since it is the digit with the index of 2 from the right
getDigit(7323, 1); // 2
getDigit(7323, 0); // 3
getDigit(7323, 3); // 7

const digitCount = (num) => {
  if (num === 0) return 1;
  // counts the amount of digits in the number
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

const mostDigits = (nums) => {
  // given an array of numbers
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  // returns the number of digits in the largest number(s) in the list
  return maxDigits;
};

const radixSort = (arr) => {
  // determine how many digits the largest number has
  let maxDigitCount = mostDigits(arr);
  // loop from k = 0 up to the largest this largest number of digits
  for (let k = 0; k < maxDigitCount; k++) {
    // for each iteration of the loop:
    // create buckets for each digit (0 to 9)
    let digitBuckets = Array.from({ length: 10 }, () => []);
    // place each number in their corresponding bucket based on its kth digit
    for (let i = 0; i < arr.length; i++) {
      let digit = getDigit(arr[i], k);
      digitBuckets[digit].push(arr[i]);
    }
    // replace existing array with values in our buckets starting with 0 through 9
    arr = [].concat(...digitBuckets);
  }
  // return list at the end
  return arr
};

// Big O - O(nk) 
// n = number of items in the array
// k = amount of digits in longest number in the array