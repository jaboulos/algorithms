/*
It is a very simple comparison sort to sort an array.
A comparison sort compares the current value that we
are trying to sort with other values in the array.
It works with one item at a time and iteratively places
each item in correct place so as to get a required sorted array.

Actually, insertion sort is not as efficient as some advanced algorithms
such as heap sort or merge sort. It is not a best option while dealing
with large programs. Because of its low hidden constant value,
an insertion sort outperforms some of the advanced algorithms such as
heap or quick sort while dealing with small arrays.

Insertion sort works by moving from left to right over an array.
It will use the current item as a 'key' and searches for a value to
the left of that key to find a location where the key should actually resides.
*/

function InsertionSort(arr) {
  let len = arr.length, // number of items in the array
    value, // the value currently being compared
    i, // index into unsorted section
    j; // index into sorted section

  for (i = 1; i < len; i++) {
    // store the current value because it may shift later
    value = arr[i];
    j = i - 1;

    // Whenever the value in the sorted section is greater than the value
    // in the unsorted section, shift all items in the sorted section over
    // by one. This creates space in which to insert the value.
    while (j >= 0 && arr[j] > value) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = value;
  }

  return arr;
}
