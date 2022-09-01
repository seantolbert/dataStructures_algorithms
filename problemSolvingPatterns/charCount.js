function charCount(str) {
    // make object to return at end
    const result = {};
    // loop over string for each character
    for (let i = 0; i < str.length; i++) {
      // if the char is a number/letter AND is a key in object, add one to count
      let char = str[i];
      if (result[char] > 0) {
        result[char]++;
      } else {
        // if the char is a number/letter AND not in object, add it to the object and set value to 1
        result[char] = 1;
      }
  
      // if char is something else, don't do anything
    }
    // return object at end
    return result;
  }
  
  charCount("Your PIN number is 1234");
  
  