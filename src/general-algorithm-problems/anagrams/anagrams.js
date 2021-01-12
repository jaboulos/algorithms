const anagrams = (stringA, stringB) => {
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);

  const aKeys = Object.keys(aCharMap).length;
  const bKeys = Object.keys(bCharMap).length;

  if (aKeys !== bKeys) {
    return false;
  }

  for (let elem in aCharMap) {
    for (let elem in bCharMap) {
      if (aCharMap[elem] !== bCharMap[elem]) {
        return false;
      }
    }
  }
  return true;
};

// helper function to build character map for given string

const buildCharMap = (str) => {
  const charMap = {};
  for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
};
