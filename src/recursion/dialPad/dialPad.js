/*
leetcode link: https://leetcode.com/problems/letter-combinations-of-a-phone-number/
given input phone number,
looking at a dialpad, each digit has letters
permute each character associated with digit on dialpad

1 2 3
4 5 6
7 8 9
  0

{
  1: '1',
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz',
  0: '0'
}

*/

const dialPad = (digits) => {
  // create obj with mapped values for each digit
  let charMap = {
    // 1: "1",
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
    // 0: "0",
  };

  let result = helper(charMap, digits, [], "", digits.length);
  return result;
};

const helper = (charMap, digit, result = [], currentStr = "", len) => {
  if (currentStr.length === len) {
    result.push(currentStr);
    return [];
  } else {
    for (let i = 0; i < digit.length; i++) {
      let char = digit[i];
      let str = charMap[char];
      let nextDigit = digit.slice(i + 1);
      for (let j = 0; j < str.length; j++) {
        helper(charMap, nextDigit, result, currentStr + str[j], len);
      }
    }
  }
  return result;
};
