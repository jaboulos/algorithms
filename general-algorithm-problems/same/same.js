/*
Write a function called same, which accepts 2 arrays.
The function should return true if every value in the
array has its corresponding value squared in the 2nd array.
The frequency of values must be the same

ex1: same([1,2,3], [4,1,9]) // true
ex2: same([1,2,3], [1,9]) // false
ex3: same([1,2,1], [4,4,1]) // false (must be same frequency)
*/

/*
Write a function called same, which accepts 2 arrays.
The function should return true if every value in the
array has its corresponding value squared in the 2nd array.
The frequency of values must be the same

ex1: same([1,2,3], [4,1,9]) // true
ex2: same([1,2,3], [1,9]) // false
ex3: same([1,2,1], [4,4,1]) // false (must be same frequency)
*/

const same = (arr1, arr2) => {
  // edge cases
  if (arr1.length !== arr2.length) return false;
  // create hash tables
  const arr1Map = {}; // ex: [1,2,3]
  const arr2Map = {}; // ex: [4,1,9]

  // assign values to maps
  for (let val of arr1) {
    if (arr1Map[val] === undefined) {
      arr1Map[val] = 1;
    } else {
      arr1Map[val]++;
    }
  }

  for (let val of arr2) {
    if (arr2Map[val] === undefined) {
      arr2Map[val] = 1;
    } else {
      arr2Map[val]++;
    }
  }

  // compare both maps
  for (let key in arr1Map) {
    if (arr1Map[key] === arr2Map[key] * arr2Map[key]) {
      return true;
    }
    return false;
  }

  // console.log('arr1Map', arr1Map)
  // console.log('arr2Map', arr2Map)
};

// same([1,2,3], [4,1,9]) // true
// same([1,2,3], [1,9]) // false
// same([1,2,1], [4,4,1]) // false
