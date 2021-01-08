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

function dutchFlagSort(balls) {
  // define starting index for r and b
  // red is at the beginning
  let red=0;
  // blue is at the end
  let blue=balls.length-1;
  // pointer index
  let i = 0;

  // run until hitting the end of the input array index
  while(i<=blue) {
    // if the current index value is 'R'
      if(balls[i] == 'R'){
        // create temporary var
          let temp = balls[red];
          // swap red value with current pointer value
          balls[red] = balls[i];
          balls[i] = temp;

          i++;
          red++;
      }
      else if(balls[i] == 'B') {
          let temp = balls[blue];
          balls[blue] = balls[i];
          balls[i] = temp;
          blue--;
      } else if(balls[i] == 'G') {
          i++;
      }
  }

  return balls;
}
