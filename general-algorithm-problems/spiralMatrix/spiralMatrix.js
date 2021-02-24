/*
create impty arr 'results'
create counter var starting at 1
create vars to track startColumn, endColumn, startRow, endRow
--start's start with val 0, ends start with val of n-1

while (startColumn <= endColumn AND startRow <= endRow)
--loop from startColumn to endColumn
----at results[startRow][i] asign counter var
----inc counter
inc startRow
loop from startRow to endRow
--at results[i][endColumn] assign counter var
--inc counter
dec endColumn

...repeat for other 2 sides
*/

const matrix = (n) => {
  // create n number of subarrays inside results
  const results = [];
  // iterate from 0 => n, push empty subarr into results
  for (let i = 0; i < n; i++) {
    results.push([]);
  }

  let counter = 1;
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;

  while (startColumn <= endColumn && startRow <= endRow) {
    // first for loop, responsible for top row
    for (let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter;
      counter++;
    }
    startRow++;

    // right column
    for (let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = counter;
      counter++;
    }
    endColumn--;

    // bottom row
    for (let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter;
      counter++;
    }
    endRow--;

    // start column
    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }

  return results;
};

matrix(4);
