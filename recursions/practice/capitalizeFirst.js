//  given an array of strings
// capitalize the first letter of each string

function capitalizeFirst(arr) {
  if (arr.length === 1) {
    return [arr[0][0].toUpperCase() + arr[0].substring(1)];
  }
  const result = capitalizeFirst(arr.slice(0, -1));
  const str =
    arr.slice(arr.length - 1)[0][0].toUpperCase() +
    arr.slice(arr.length - 1)[0].substring(1);
  result.push(str);
  return result;
}
