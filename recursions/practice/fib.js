// accepts a number and returns the nth number in the fibonnacci sequence
// fib seq = every number is the product of the 2 before it

// my attempt

function fib(num) {
  let arr = [];

  function helper(helperNum) {
    let last = arr.length - 1;
    let secondLast = arr.length - 2;
    if (arr.length === 0) {
      arr.push(1, 1);
    } else {
      return arr[last] + arr[secondLast];
    }
  }

  helper(num);
  return arr[num];
}

function fib(num) {
  if (num <= 2) return 1;
  return fib(num - 1) + fib(num - 2);
}
