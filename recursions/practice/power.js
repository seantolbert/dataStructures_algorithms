// write a function that accepts a base and exponent. the function
// return the power of the base to the exponent.
// this should mimic the functionality of Math.pow()

// my attempt

// function power(base, exp) {
//   result = 0;
//   function helper(helperBase, helperExp) {
//     if (helperExp < 0) {
//       result = helperBase;
//       return;
//     }

//     if (helperExp > 0) {
//       result = (helperBase ** 2) ** helperExp;
//       helperExp--;

//       return;
//     }
//   }
//   if (exp === 0) return 1;
//   helper(base, exp - 1);

//   return result;
// }

power(2, 7);

function power(base, exp) {
    if (exp === 0) return 1;
    return base * power(base, exp - 1);
}
