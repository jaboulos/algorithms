// leftArr and rightArr are sorted
const merge = (leftArr, rightArr) => {
  const output = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArr.length || rightIndex < rightArr.length) {
    const leftEl = leftArr[leftIndex];
    const rightEl = rightArr[rightIndex];

    if(leftEl < rightEl) {
      output.push(righEl)
      leftIndex++
    } else {
      output.push(rightEl);
      rightIndex++
    }
  }
  return [...output, ...leftArr[leftIndex], ...rightArr[rightIndex]];
};

const mergeSort = (array) => {
  if (array.length <= 1) {
    return array;
  }
  const middleIndex = Math.floor(array.length / 2);
  const leftArr = array.slice(0, middleIndex);
  const rightArr = array.slice(middleIndex);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
};
