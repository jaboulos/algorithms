const reverseInt = (input) => {
  const stringNum = input.toString().split("").reverse().join("");
  return parseInt(stringNum) * Math.sign(input);
};
