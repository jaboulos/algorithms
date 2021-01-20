/*
  candidates = input
  target = target sum
  i = current index
  curr = current combinations that sum to the target
  combinations = result array
*/
const combinationSum = (
  candidates,
  target,
  i = 0,
  cur = [],
  combinations = []
) => {
  // base case 1
  // as long as our target sum is greater than 0, keep subtracting from target, because we have not reached target
  // return when target <= 0
  // we're continuously subtracting from the target value in this approach until we hit one of these base cases
  if (target <= 0) {
    // push set of numbers into combinatioins // cur.slice is a copy of our current set of #s
    if (target === 0) {
      combinations.push(cur.slice());
    }
    return;
  }

  // run code if i < candidates.length
  if (i < candidates.length) {
    // take first value over and over again until we hit our target or overshoot our target and then move a number and try the next one
    // grab whatever value we're working on
    const value = candidates[i];
    // add value to array of values we're going to use
    cur.push(value);
    // make recursive call to function
    // --> subtract current value that we just used
    combinationSum(candidates, target - value, i, cur, combinations);
    // when we return from the combinations function call (after hitting a base case)
    // --> remove that last item that was added to cur
    cur.pop();
    // --> --> make another call to our function using the next item in the input @16:30
    combinationSum(candidates, target, i + 1, cur, combinations);
    return combinations;
  }
  return combinations;
};

combinationSum([2, 3, 5], 8);
