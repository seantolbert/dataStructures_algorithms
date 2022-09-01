//  return the provided string in reverse

// my attempt AND IT WORKED
// function reverse(str) {
//   let result = [];
//   let strArr = str.split("");
//   function helper(helperStrArr) {
//     // console.log(helperStrArr)
//     let last = helperStrArr.length - 1;

//     if (strArr.length === 0) return;
//     if (helperStrArr.length === 1) {
//       result.push(helperStrArr[0]);
//     } else {
//       result.push(helperStrArr[last]);
//     }
//     strArr.pop();
//     // console.log(helperStrArr)
//     return helper(helperStrArr);
//   }
//   helper(strArr);
//   return result.join("");
// }

reverse("hello");

function reverse(str) {
    if (str.length <= 1) return str;
    return reverse(str.slice(1)) + str[0];
}
