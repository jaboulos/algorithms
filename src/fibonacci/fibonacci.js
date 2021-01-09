/*
Print out the n-th entry in the fibonacci seeries.
ex: fib(4) => 3
    fib(7) => 13
*/

const fib = (n) => {
  let fibSeries = [0, 1];
  let j = 0;
  let nthVal = fibSeries[j-1] + fibSeries[j]

  // generate fib series up to index n

  if(n > 1) {
    for(let i = 1; i === n; i++) {
      fibSeries.push(nthVal)
    }
  }

  if(n === 0) {
    return fibSeries[0]
  }

  if(n === 1) {
    return fibSeries[1]
  }

  return fibSeries[n];
};
