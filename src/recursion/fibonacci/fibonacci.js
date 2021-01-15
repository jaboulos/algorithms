/*
Print out the n-th entry in the fibonacci seeries.
ex: fib(4) => 3
    fib(7) => 13
*/

// iterative solution
const fib = (n) => {
  const res = [0, 1];
  // start for loop at i = 2, iterate up to n
  for (let i = 2; i <= n; i++) {
    // add previous 2 values then push into result set
    const a = res[i - 2] + res[i - 1];
    res.push(a);
  }
  return res[n];
};
