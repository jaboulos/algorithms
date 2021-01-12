const chunk = (array, size) => {
  // creaet empty array to hold chunks called chunked

  // for each element in unchunked array, series of steps
  // retrieve the last element in 'chunked'
  // if last element does not exist, of ir its length is equal to chunk size
  // push a chunk into chunked with the current element
  // else add the current element into the chunk

  // declare new array for different chunks
  const chunked = [];

  for (let element of array) {
    // retrieve last element from chunked
    const last = chunked[chunked.length - 1];
    // if last element does not exist or if its length is equal to chunk size, push a new chunk into 'chunked' with the current element

    // *double check or statement, specifically last.length === size and why its not last.length < size *
    if (!last || last.length === size) {
      chunked.push([element]);
    } else {
      last.push(element);
    }
  }
  return chunked;
};
