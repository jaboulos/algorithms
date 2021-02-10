/*
56. Merge Intervals
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

Example 1:
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

Example 2:
Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.

Constraints:
1 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 104
*/

/*
 * @param {number[][]} intervals
 * @return {number[][]}
 */

const merge = (intervals) => {
  // sort the input intervals
  intervals = intervals.sort((a, b) => a[0] - b[0]);
  let curr = intervals[0];
  const result = [curr];

  for (let i = 1; i < intervals.length; i++) {
    // get value of current subarray 2nd element inside result
    const currRight = curr[1];
    // destructure ith subarray
    const [nextLeft, nextRight] = intervals[i];
    // compare nextLeft with currRight
    if (currRight >= nextLeft) {
      // replace 2nd val of curr sub array withe larger value between currRight and nextRight
      curr[1] = Math.max(currRight, nextRight);
    } else {
      // otherwise push into result
      result.push(intervals[i]);
      // set curr to the ith element
      curr = intervals[i];
    }
  }
  return result;
};
