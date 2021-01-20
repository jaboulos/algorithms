const isPalindrome = (input) => {
  const reversed = input.split("").reverse().join("");
  // return input === reversed ? true : false
  return input === reversed;
};
