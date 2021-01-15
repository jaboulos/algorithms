/*
Print out the n-th entry in the fibonacci seeries.
ex: fib(4) => 3
    fib(7) => 13

  Do not use an iterative approach
  Must use a recursive approach
*/

// recursive solution

// n = 6
//              *
// [0,1,1,2,3,5,8]
const fib = (n) => {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
};

// Time complexity : exponential
// how can you improve the runtime?
// fib function is being called multiple times with identical arguments
// can be improved with memoization
