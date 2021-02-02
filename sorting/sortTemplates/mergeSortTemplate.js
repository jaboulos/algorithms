/*
Merge sort is an example of a divide-and-conquer type sorting-algorithm.
The input of merge sort is an array of some elements, which are need to
be arranged typically from least to the greatest.

Steps to follow in Merge Sort
1. Merge sort divides the array in to two sub arrays and later divides each array
in to another two arrays and so on until a bunch of single element arrays are left.
For instance, in the following example the array [4,7,5,9,1,3,8,2] divides
in to single array elements such as [4], [7], [5], [9], [1], [3], [8], [2].

2. It starts comparing arrays in such a manner that two arrays are compared and concatenated.
In the following example, it compares two arrays at a time that is  [4], [7] are compared
and concatenated then [5], [9] are compared and concatenated and so on such that arrays
[4,7], [5,9], [1,3], [2,8] are formed.

3. It follows the same way that is two-two arrays are compared and concatenated to form two arrays.
In the following example [4,7]  and [5,9] are compared and concatenated to get an array as [4,5,7,9]
and same is the case with other two arrays to form an array as [1,2,3,8].

4. Same rule applicable here that is the remaining two arrays compares and concatenates to get a
final array as [1,2,3,4,5,7,8,9].
*/

function MergeSort(arr) {

  let len     = arr.length,       // number of items in the array
      middle,                     // middle of the array
      left,                       // left side of the array
      right,                      // right side of the array

  // Arrays with 0 or 1 elements don't need sorting
  if (len < 2) {
    return arr
  }

  middle = Math.floor(len/2)


  left = arr.slice(0, middle)   // left side, from 0 to the middle
  right = arr.slice(middle)     // right side, from the middle to the end

  return merge(MergeSort(left), MergeSort(right))

}


// Merges 2 sorted arrays
function merge(left, right) {
  let result = [],
      i = 0,
      j = 0

  while(i < left.length && j < right.length) {

    // Elements in both arrays are compared against each other.
    // Whichever element is smaller it's inserted in the results.

    if(left[i] < right[j]) {
      result.push(left[i++])       // Each time a value from one array is added, it's
    } else {                       // corresponding index variable is incremented.
      result.push(right[j++])
    }
  }

  // As soon as one of the arrays has been finished, the
  // remaining values are added to the end of the result array

  return result.concat(left.slice(i)).concat(right.slice(j))

}