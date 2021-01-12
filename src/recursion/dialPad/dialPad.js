const dialPad = (digits) => {
  // create obj with mapped values for each digit
  let charMap = {
    1: "1",
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
    0: "+",
  };

  let result = helper(charMap, digits, [], "", digits.length);
  return result;
};
//                        '1230'  []        ''        4
//                        '230'   []        '1'       4
//                         '30'   []        '1a'      4
//                          '0'   []        '1ad'     4
//                          ''    []        '1ad+'    4
const helper = (charMap, digits, result, currentStr, len) => {
  // hit BC
  if (currentStr.length === len) {
    // result.push('1ad+')
    result.push(currentStr);
  } else {
    //                      3
    //                      2
    //                      1
    for (let i = 0; i < digits.length; i++) {
      let char = digits[i]; // 1 // 2 // 3 // 0
      let str = charMap[char]; // '1' // 'abc' // 'def' // '+'
      let nextDigits = digits.slice(i + 1); // '230' // '30' // '0' // ''
      for (let j = 0; j < str.length; j++) {
        //                '230'      []         '' + '1'          4
        //                '30'       []         '1' + 'a'         4
        //                '0'        []         '1a' + 'd'        4
        //                 ''        []         '1ad' + '+'       4
        helper(charMap, nextDigits, result, currentStr + str[j], len);
      }
    }
  }
  // goes to previous stack in recursive calls, take recursive leap of faith
  return result;
};

console.log(dialPad("1230"));
