// JavaScript comes with a built in .sort() method
// You can pass in an optional comparator function as an argument
// the comparator looks at pairs of elements (a and b),
// determines their sort order based on their value
// if it returns a negative number, a should come before b
// if it returns a positive number, a should come after b
// if it returns 0, a and b are the same  as far as the sort is concerned

function numberCompare(num1, num2) {
  return num1 - num2;
}

[6, 4, 15, 10].sort(numberCompare); // 4, 6, 10, 15

function numberCompare2(num1, num2) {
  // reversing the subtraction
  return num2 - num1;
}

[6, 4, 15, 10].sort(numberCompare2); // 15, 10, 6, 4

function compareByLength(stringOne, stringTwo) {
  return stringOne.length - stringTwo.length;
}

["steele", "Colt", "data structures", "algorithms"].sort(compareByLength);
// ['Colt', 'steele', 'algorithms', 'data structures']

// and the opposite applies as well for rthe above result
