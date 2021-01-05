/*
You are given an integer array arr of size n. 
Group and rearrange them (in-place) into evens and odds in 
such a way that group of all even integers appears on the left 
side and group of all odd integers appears on the right side. 
*/

/*
 * Complete the function below.
 */
function solve(arr) {
  // try with while loop
  // in place means dont create a new array, probably need to swap

  // define starting points
  let left = 0;
  let right = arr.length - 1;

  // loop through array, increment left and decrement right each time
  // break out of loop when left >= right
  while (left <= right) {
    if (arr[left] % 2 === 0) {
      // if its even continue on
      left++;
    } else {
      // if its an odd, need to swap it with right
      let swapVals = arr[left];
      // set the left index value = to right
      arr[left] = arr[right];
      arr[right] = swapVals;
      // decrement from the right
      right--;
    }
  }
  return arr;
}
