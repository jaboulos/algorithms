/*
It takes a pivot value(a random value) from an array.
All the other elements in the array are split to two categories.
They may be less than the pivot value and greater than the pivot value.

After that each of the categories(less than the pivot and greater than the pivot)
are subjected to the same procedure that is a pivot is chosen then each category
is divided in to sub-categories(less than the pivot and greater than the pivot).

Eventually, the sub-categories are divided in such a way that they may contain
an element or no element if there are no more elements to compare.
The rest of the values will be denoted as a pivots at some previous points and
did not trickle down to this lowest sub category.
*/

// Find a "pivot" element in the array to compare all other
// elements against and then shift elements before or after
// pivot depending on their values
function QuickSort(arr, left = 0, right = arr.length - 1) {
  let len = arr.length,
    index;

  if (len > 1) {
    index = partition(arr, left, right);

    if (left < index - 1) {
      QuickSort(arr, left, index - 1);
    }

    if (index < right) {
      QuickSort(arr, index, right);
    }
  }

  return arr;
}

function partition(arr, left, right) {
  let middle = Math.floor((right + left) / 2),
    pivot = arr[middle],
    i = left, // Start pointer at the first item in the array
    j = right; // Start pointer at the last item in the array

  while (i <= j) {
    // Move left pointer to the right until the value at the
    // left is greater than the pivot value
    while (arr[i] < pivot) {
      i++;
    }

    // Move right pointer to the left until the value at the
    // right is less than the pivot value
    while (arr[j] > pivot) {
      j--;
    }

    // If the left pointer is less than or equal to the
    // right pointer, then swap values
    if (i <= j) {
      [arr[i], arr[j]] = [arr[j], arr[i]]; // ES6 destructuring swap
      i++;
      j--;
    }
  }

  return i;
}
