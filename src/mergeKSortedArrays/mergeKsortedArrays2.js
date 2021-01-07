const mergeArrays = (arr) => {
  // create variable to determiine sorted order of given input
  let sortOrder = "asc";
  // create check to determine sortOrder
  for (let subArr of arr) {
    // loops through each index of arr of arrs, each index is itself an array
    // within that sub arr, compare first and last elements
    if (subArr[0] > subArr[subArr.length - 1]) {
      sortOrder = "desc";
    }
  }
  // this functions purpose if fulfilled, calls the next func
  return divideArrays(arr, sortOrder);
};

// this is the complex part of the solution, if you can understand this, the rest is intuitive
const divideArrays = (arr, sortOrder) => {
  // first thing to do is define base cases
  // if the input arr has a length of 1, return that value
  if (arr.length === 1) {
    return arr[0];
  }
  // if input arr has a length of 2, call merge function with arr value, merge's final return value is a single array
  if (arr.length === 2) {
    return merge(arr[0], arr[1], sortOrder);
  }

  // divide input array and define midpoint
  const mid = Math.floor(arr.length / 2);
  const arr1 = arr.slice(0, mid);
  const arr2 = arr.slice(mid);

  // recursivle call self until base case met, and pass into next helper function
  return merge(
    divideArrays(arr1, sortOrder),
    divideArrays(arr2, sortOrder),
    sortOrder
  );
};

// purpose of this is to compare values between both arrays and return a single array
const merge = (arr1, arr2, sortOrder) => {
  // create auxilary array, define pointer indexes for arr1 and arr2
  const aux = [];
  let i = 0;
  let j = 0;

  // check to see if BOTH input arrays length is greater i and j
  while (i < arr1.length && j < arr2.length) {
    // define pointer start values to iterate and compare values between input arrays
    let item1 = arr1[i]; // value of first index of arr1
    let item2 = arr2[j]; // value of first index of arr2

    // check to determine the input arrays sort order
    if (sortOrder === "asc") {
      // check to see if first pointer values in both input arrays are === to each other
      if (item1 === item2) {
        // if they are both equal push both into aux and increment index
        aux.push(item1);
        aux.push(item2);
        i++;
        j++;
      } else if (item1 < item2) {
        // check if the indexed value is less than item2
        aux.push(item1);
        i++;
      } else {
        aux.push(item2);
        j++;
      }
    } else {
      // run this block if order is not 'asc' and do similar checks as aboove
      if (item1 === item2) {
        // check if item1 === item2, push both to aux, inc both
        aux.push(item1);
        aux.push(item2);
        i++;
        j++;
      } else if (item2 > item1) {
        aux.push(item2);
        j++;
      } else {
        aux.push(item1);
        i++;
      }
    }
  }
  // if both input arrs dont have a length check each one to see if they have length
  while (i < arr1.length) {
    // take whatever is left and push the rest into aux
    aux.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    // take whatever is left and push the rest into aux;
    aux.push(arr2[j]);
    j++;
  }
  return aux;
};

const input = [
  [1, 2, 3, 4, 5],
  [99, 100, 101, 101, 102],
  [1, 20, 30, 40, 50],
];
console.log(mergeArrays(input));
