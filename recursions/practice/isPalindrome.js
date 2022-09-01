//  returns true if provided string is a palindrome

// my attempt AND IT WORKED
// function isPalindrome(str) {
//   let result = [];
//   let strArr = str.split("");
//   function helper(helperStrArr) {
//     let last = helperStrArr.length - 1;

//     if (strArr.length === 0) return;
//     if (helperStrArr.length === 1) {
//       result.push(helperStrArr[0]);
//     } else {
//       result.push(helperStrArr[last]);
//     }
//     strArr.pop();
//     return helper(helperStrArr);
//   }
//   helper(strArr);
//   let reversed = result.join("");
//   return reversed === str;
// }

isPalindrome("hello");

function isPalindrome(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
  return false;
}
