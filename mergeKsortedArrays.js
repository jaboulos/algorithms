function mergeArrays(arr) {
  let sortOrder = "asc";

  for (let subArr of arr) {
    if (subArr[0] > subArr[subArr.length - 1]) {
      sortOrder = "desc";
    }
  }

  return divideArrays(arr, sortOrder);
}

// [[1]]
function divideArrays(arr, sortOrder) {
  // already sorted because its the only element
  if (arr.length === 1) {
    return arr[0];
  }
  /*
        [ 
          [1, 3, 5, 7],

          [2, 4, 6, 8],

          [0, 9, 10, 11]
        ]
  */
  if (arr.length === 2) {
    return merge(arr[0], arr[1], sortOrder);
  }

  const mid = Math.floor(arr.length / 2); // 1 => 2
  const arr1 = arr.slice(0, mid); // [1,3,5,7] => [1,3]
  const arr2 = arr.slice(mid); // [[2,4,6,8], [0,9,10,11]] => [5,7]

  // merge doesnt actually run until divideArrays recursion completes
  return merge(
    divideArrays(arr1, sortOrder), // [1,3]
    divideArrays(arr2, sortOrder), // [5,7]
    sortOrder
  );
}

function merge(arr1, arr2, sortOrder) {
  const aux = []; // [1] => [1,3] => [1,3,5] => [1,3,5,7]
  let i = 0; // 1 => 2
  let j = 0; // 1

  //arr1  [1,3]
  //arr2  [5,7]
  while (i < arr1.length && j < arr2.length) {
    // i=>1
    let item1 = arr1[i]; // 1 => 3
    let item2 = arr2[j]; // 5

    if (sortOrder === "asc") {
      if (item1 === item2) {
        aux.push(item1);
        aux.push(item2);
        i++;
        j++;
      } else if (item1 < item2) {
        aux.push(item1);
        i++;
      } else {
        aux.push(item2);
        j++;
      }
    } else {
      if (item1 === item2) {
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

  while (i < arr1.length) {
    aux.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    aux.push(arr2[j]);
    j++;
  }

  return aux;
}
