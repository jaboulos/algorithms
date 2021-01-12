function mergeArrays(arr) {
  let sortOrder = "asc";

  for (let subArr of arr) {
    if (subArr[0] > subArr[subArr.length - 1]) {
      sortOrder = "desc";
    }
  }

  return divideArrays(arr, sortOrder);
}

function divideArrays(arr, sortOrder) {
  if (arr.length === 1) {
    return arr[0];
  }

  if (arr.length === 2) {
    return merge(arr[0], arr[1], sortOrder);
  }

  const mid = Math.floor(arr.length / 2);
  const arr1 = arr.slice(0, mid);
  const arr2 = arr.slice(mid);

  return merge(
    divideArrays(arr1, sortOrder),
    divideArrays(arr2, sortOrder),
    sortOrder
  );
}

function merge(arr1, arr2, sortOrder) {
  const aux = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    let item1 = arr1[i];
    let item2 = arr2[j];

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
