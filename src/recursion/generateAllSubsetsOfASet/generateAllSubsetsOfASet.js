/*
Generate All Subsets Of A Set
Generate ALL possible subsets of a given set. The set is given in the form of a string s containing distinct lowercase characters 'a' - 'z'.

Example
Input: "xy"
Output: ["", "x", "y", "xy"]

Notes
Input Parameters: There is only one argument denoting string s.
Output: Return array of strings res, containing ALL possible subsets of given string. You need not to worry about order of strings in your output array. E.g. s = "a", arrays ["", "a"] and ["a", ""]  both will be accepted.

Order of characters in any subset must be same as in the input string. For s = "xy", array ["", "x", "y", "xy"] will be accepted, but ["", "x", "y", "yx"] will not be accepted.

Constraints:
0 <= |s| <= 20
s only contains distinct lowercase alphabetical letters ('a' - 'z').

Empty set is a subset of any set.

Any set is a subset of itself.
*/

const generate_all_subsets = (s) => {
  let results = [];
  helper(s, 0, "", results);
  return results;
};

const helper = (s, idx, slate, results) => {
  // base case check
  if (idx === s.length) {
    results.push(slate);
    return;
  }
  helper(s, idx + 1, slate + s[idx], results);
  helper(s, idx + 1, slate, results);
};

generate_all_subsets("xy");
