// add some extra inputs here and give them default values
// cur = [] // current sub array holding candidates
// results = []
// i = index // going to have to iterate over candidates // start at 0
//
const combinationSum = (candidates, target, i = 0, cur = [], results = []) => {
  // base case
  if (target <= 0) {
    // if the sum of items inside of cur are === to target value, push to results
    // going to be decrementing cur[i] values from target, if they decrement to 0, add that sub array to results
    if (target === 0) {
      results.push(cur.slice());
    }
    return results;
  }

  // going to increment i each recursive call
  // kind of a base case too
  if (i < candidates.length) {
    // set a value that can be reused
    let value = candidates[i];
    // add this value to cur
    cur.push(value);
    // going to call this again, each time it will add THE SAME value to cur AND it will subtract that value from target, targets value will
    // continuously decrement until base case hits
    combinationSum(candidates, target - value, i, cur, results);
    // come to this line after base case hits
    // pop because cur will have 1 extra value in it where target !== 0 after the subtraction want to remove the last
    // item in cur before the next recursive call
    cur.pop();
    // after first recursive call, all left side branches are exhausted, increment i by 1
    combinationSum(candidates, target, i + 1, cur, results);
    return results;
  }
  return results;
};
