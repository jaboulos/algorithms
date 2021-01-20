const fizzBuzz = (input) => {
  // use the modulo operator to determine the remainder of a number during divisiion

  // need to start from 1
  for (let i = 1; i <= input; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log("fizzBuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
};
