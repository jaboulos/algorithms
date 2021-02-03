/*
Given a string S, check if the letters can be rearranged
so that two characters that are adjacent to each other are not the same.

If possible, output any possible result.
If not possible, return the empty string.

Example 1:
Input: S = "aab"
Output: "aba"

Example 2:
Input: S = "aaab"
Output: ""

Note:
S will consist of lowercase letters and have length in range [1, 500].
*/

/*
 * @param {string} S
 * @return {string}
 */
const reorganizeString = (S) => {
  // create hashmap
  let charMap = {};
  for (let key of S) {
    // if the key exists, add 1, otherwise set its value to 1
    charMap[key] = charMap[key] + 1 || 1;
  }
  // create array of sorted keys from charMap, sort from most to least
  let sortedKeys = Object.keys(charMap).sort((a, b) => charMap[b] - charMap[a]);
  // set variable for index starting at 0
  let result = [];
  let idx = 0;

  // loop over sortedKeys
  for (let i = 0; i < sortedKeys.length; i++) {
    // create variable that is the # of occurrences for the letter in the string
    let occurrenceCount = charMap[sortedKeys[i]]; // ex: {a:3, b:1} -> ['a','a','a','b'] -> charMap[a] -> 3
    if (occurrenceCount > (S.length + 1) / 2) return ""; // ? why + 1

    for (let j = 0; j < occurrenceCount; j++) {
      if (idx >= S.length) idx = 1; // ?
      result[idx] = sortedKeys[i];
      idx += 2;
    }
  }
  return result.join("");
};
