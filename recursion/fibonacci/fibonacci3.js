/*
Print out the n-th entry in the fibonacci seeries.
ex: fib(4) => 3
    fib(7) => 13

  Do not use an iterative approach
  Must use a recursive approach with memoization
*/

// extremely slow
// before calling slowFib, create a data store
const fib = (n) => {
  if (n < 2) {
    return n;
  }
  return fib2(n - 1) + fib2(n - 2);
};

const memoize = (fn) => {
  const cache = {};

  // ...args makes this more flexible
  // means idk how many args this function will be called with, just take all arguments and assign them as an array to this variable called args
  return function (...args) {
    // first thing to do is check to see if this function has been called with this particular set of arguments before
    // look at cache object and see if the key args has an existing value there
    if (cache[args]) {
      return cache[args];
    }
    // result of calling the slow fib function
    // fn is representitive of the slowFib function
    const result = fn.apply(this, args);
    // take result and store in cached object
    cache[args] = result;
    return result;
  };
};

const fib2 = memoize(slowFib);

// O(n)
