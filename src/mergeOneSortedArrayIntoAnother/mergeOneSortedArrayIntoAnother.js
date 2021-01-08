/*
Merge One Sorted Array Into Another

Given two arrays:

1) arr1 of size n, which contains n positive integers sorted in the ascending order.

2) arr2 of size (2*n) (twice the size of first), which contains n positive integers sorted in the ascending order in its first half. Second half of this array arr2 is empty. (Empty elements are marked by 0).

Write a function that takes these two arrays, and merges the first one into second one, resulting in an increasingly sorted array of (2*n) positive integers.

Example
Input:
n = 3
arr1 = [1 3 5]
arr2 = [2 4 6 0 0 0]

Output: arr2 = [1 2 3 4 5 6]

Notes
Input Parameters: There are two arguments. First one is an integer array denoting arr1 and second one is also an integer array denoting arr2.
Output: You don't have to return anything. You just need to modify the given array arr2.

Constraints:

1 <= n <= 10^5
1 <= arr1[i] <= 2 * 10^9
1 <= arr2[i] <= 2 * 10^9 (for the first half)
arr2[i] = 0 (for the second half)
You can use only constant extra space.
0 denotes an empty space.

*/

function merger_first_into_second(arr1, arr2) {
  // define 3 pointers
  let a = arr1.length-1
  let b = Math.floor((arr2.length-1) /2)
  let c = arr2.length -1

  while(a >= 0 && b >= 0) {
      if(arr2[b] > arr1[a]) {
          arr2[c] = arr2[b]
          b--;
          c--;
      } else {
          arr2[c]=arr1[a]
          a--;
          c--;
      }
  }

  while(a>=0) {
      arr2[c]=arr1[a]
      a--;
      c--;
  }
  while(b>=0) {
      arr2[c]=arr2[b]
      b--;
      c--;
  }
  return arr2
}


const arr1 = [1,36,50]
const arr2 = [33,41,51, 0, 0, 0]

console.log(merger_first_into_second(arr1,arr2))