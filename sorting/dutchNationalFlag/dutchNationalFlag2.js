/*
Dutch National Flag

Given some balls of three colors arranged in a line, rearrange them such that all the red balls go first, then green and then blue ones.
Do rearrange the balls in place. A solution that simply counts colors and overwrites the array is not the one we are looking for.

This is an important problem in search algorithms theory proposed by Dutch computer scientist Edsger Dijkstra. Dutch national flag has three colors (albeit different from ones used in this problem).

Example
Input: [G, B, G, G, R, B, R, G]
Output: [R, R, G, G, G, G, B, B]

There are a total of 2 red, 4 green and 2 blue balls. In this order they appear in the correct output.

Notes
Input Parameters: An array of characters named balls, consisting of letters from {‘R’, ‘G’, ‘B’}.
Output: Return type is void. Modify the input character array by rearranging the characters in-place.

Constraints:

1 <= n <= 100000
Do this in ONE pass over the array - NOT TWO passes, just one pass.
Solution is only allowed to use constant extra memory.
*/

function dutchFlagSort(arr) {
  let low = 0;
  let high = arr.length - 1

  let i = 0;

  while ( i <= high ) { // pointer starts at the beginning of input arr
  // if pointer value is 'R'
      if (arr[i] === 'R') {
          [arr[i], arr[low]] = [arr[low], arr[i]] // instead of making a swap helper, swaps values in place
          i++;
          low++;
  // if the pointer value is 'B'
      } else if (arr[i] === 'B'){
          [arr[i], arr[high]] = [arr[high], arr[i]]
          high--;
  // if the pointer values is 'G'
      } else {
          i++;
      }
  }
  return arr;
}

console.log(dutchFlagSort(['G','R','B','G','R','R','G','B']))

/*
input = ['G', 'R', 'B', 'G', 'R']

First iteration
i = 0
low = 0
high = 4
pointer val is 'G' hits else statement, increment i
['G', 'R', 'B', 'G', 'R'] // no swapping done

Next interation
i = 1
low = 0
high = 4

hits first if statement arr[i] === 'R'
arr[1] swaps with arr[0]
['R', 'G', 'B', 'G', 'R']
i = 2
low = 1
high = 4

Next interation
i = 2
low = 1
high = 4

hits 2nd if statement
arr[2] swaps with arr[4]
['R', 'G', 'R', 'G', 'B']
high = 3

Next iteration
i = 2
low = 1
high = 3

hits 1st if statement
swaps arr[i] with arr[low] // arr[2] arr[1]
['R', 'R', 'G', 'G', 'B']

i = 3
low = 2
high = 3

Next iteration
arr[3] is === 'G', hits else statement

i = 4
low = 2
high = 3

breaks out of loop and returns arr

*/