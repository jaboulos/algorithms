/*
Implement a function called countUniqueValues,
which accepts a sorted array, and counts the
unique values in the array.  There can be negative numbers in the array
but it will always be sorted.
*/

const countUniqueValues = (arr) => {
  if (arr.length < 1) return 0;
  // map values
  const charMap = {};

  for (let val of arr) {
    if (charMap[val] === undefined) charMap[val] = 1;
    charMap[val]++;
  }

  console.log(charMap);
  return Object.keys(charMap).length;
};

// countUniqueValues([1,1,1,1,1,2]) // 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
// countUniqueValues([-2,-1,-1,0,1]) // 4
// countUniqueValues([]) // 0
