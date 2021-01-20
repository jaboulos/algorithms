/*
Given an input sequence arr, generate its power set.

A "power set" is the set of all subsets that can be formed from a sequence/set.

A set is a collection of distinct objects. A subset is a set that only contains elements found in the original set.

Example:
Input: [1, 2, 3]
Output:
[
  [], # the empty set
  [1,2,3],
  [1,2],
  [1,3],
  [1],
  [2,3],
  [2],
  [3]
]

Constraints:
All items in the provided sequence will be unique
*/

const powerset = (inputSet) => {
  const results = [];
  helper(inputSet, [], results, 0);
  return results;
};

const helper = (inputSet, combos, results, i) => {
  // base case
  // no for loop, going to make recursive calls and increment i each call
  if (i === inputSet.length) {
    // finish incrementing, so you want to push a copy of combos into results
    results.push(combos.slice());
    // break out of recursive function
    return; // this will conclude with the results array, dont need to return anything in this helper the return is int he powerSet func
  }
  // start by pushing an indexed value from the input into combos
  combos.push(inputSet[i]);
  // recursive call and increment i // include
  helper(inputSet, combos, results, i + 1);
  // when the recursion returns, remove the last item in the combos arr
  combos.pop(); // allows for same recursive call except without the last item added into combos
  helper(inputSet, combos, results, i + 1); // exclude
};

powerset([1, 2, 3]);
