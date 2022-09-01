// all numbers up to the provided one are multiplied to eachother

// iterative

// function factorial(num) {
//   let total = 1;
//   for (let i = num; i > 1; i--) {
//     total *= i;
//   }
//   return total;
// }

factorial(5);

// recursive

function factorial(num) {
  // base call
  if (num === 1) return 1;
  // different call
  return num * factorial(num - 1);
}

//  you have to return for the base call to avoid maxing out the stack
