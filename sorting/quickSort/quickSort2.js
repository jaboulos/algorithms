// pivot helper
const pivotHelper = (arr, start = 0, end = arr.length - 1) => {
  let pivot = arr[start]; // pivot is the value
  let swapIndex = start; // index that is returned at the end // start is the index of pivot

  // helper function for swapping indexes
  const swap = (array, i, j) => {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  };

  for (let i = start + 1; i < arr.length; i++) {
    // compare pivot
    if (pivot > arr[i]) {
      swapIndex++; // tells us something is less than pivot
      swap(arr, swapIndex, i);
    }
  }
  swap(arr, start, swapIndex);
  return swapIndex;
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIndex = pivotHelper(arr, left, right);
    quickSort(arr, left, pivotIndex - 1); // left side
    quickSort(arr, pivotIndex + 1, right); // right side
  }
  return arr;
};
