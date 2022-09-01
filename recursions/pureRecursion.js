// pure recursion has no internal helper function

function collectOddValues(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues(arr.splice(1)));
  return newArr;
}

// unlike our helper function, we do not care that the result gets reset every time the call is made
// we concatinate all the reults together so the answer will be the same

// tips

//  for arrays, usemethods like slice, the spread operator
    //  and concat thaht make copies of arrays so you don't mutate them
//  strings are immutable so you will need to use methods like slice
    //  substr, or substring to make copies of strings
//  to make copies of objects, use Object.assign, or the spread operator
