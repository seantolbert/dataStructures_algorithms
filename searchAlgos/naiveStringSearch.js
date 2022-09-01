// suppose you want to count the amount of times
// a smaller string appears in a larger string

// a straightforward  approach involves
// checking pairs of characters individually

const naive = (lstr, sstr) => {
  // accepts a longer and shorter string
  // create a variable storing matches
  let count = 0;
  // loop over the longer string
  for (let i = 0; i < lstr.length; i++) {
    // loop over the shorter string
    for (let j = 0; j < sstr.length; j++) {
      // console.log(lstr[i], sstr[j]);
      // if the characters don't match
      // break out of the inner loop
      if (sstr[j] !== lstr[i + j]) break;
      // if you complete the inner loop and find a match,
      // increment the count of matches
      if (j === sstr.length - 1) count++;
    }
  }
  // return the count
  return count;
};


naive("strmanongman", "man"); // should be 2