var letterCombinations = function (digits) {
  const mappings = {
      1: [],
      2: ["a", "b", "c"],
      3: ["d", "e", "f"],
      4: ["g", "h", "i"],
      5: ["j", "k", "l"],
      6: ["m", "n", "o"],
      7: ["p", "q", "r", "s"],
      8: ["t", "u", "v"],
      9: ["w", "x", "y", "z"],
    },
    results = [];

  // index has 2 uses, target index of index string
  // creates digit for how we access array in mappings
  const helper = (index, slate) => {
    if (index > digits.length - 1) return results.push(slate);

    const digit = digits[index];

    for (const char of mappings[digit]) {
      helper(index + 1, slate + char);
    }
  };

  if (digits.length > 0) {
    helper(0, "");
  }

  return results;
};

console.log(letterCombinations("23"));
