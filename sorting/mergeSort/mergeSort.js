const mergeSort = function (arr) {
  if (arr.length === 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  const leftSide = mergeSort(left);
  const rightSide = mergeSort(right);

  return helper(leftSide, rightSide);
};

const helper = (left, right) => {
  const aux = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) aux.push(left.shift());
    aux.push(right.shift());
  }
  return [...aux, ...left, ...right];
};

// time complexity is O(nlogn)
