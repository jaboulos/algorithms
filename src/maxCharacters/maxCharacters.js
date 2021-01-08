const maxChar = (str) => {
  const charMap = {};
  // iterate over string input and use it to build out object

  let max = 0;
  let maxChar = "";

  // for of loops used for iterating over strings and arrays
  for (let char of str) {
    // if entry in object exists, increment its value by 1
    if (charMap[char]) {
      charMap[char]++;
    } else {
      // if that key in object doesnt exist yet, set it and set its initial value to 1
      charMap[char] = 1;
    }
  }
  // iterate through charMap object and return key with highest count

  // for in is for objects
  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
};
