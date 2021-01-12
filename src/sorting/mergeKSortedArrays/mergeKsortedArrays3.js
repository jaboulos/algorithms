const mergeArrays = (arr) => {
  let sortOrder = 'asc';
  for(let subArr of arr) {
    if(subArr[0] > subArr[arr.length-1]) {
      sortOrder = 'desc'
    }
  }
  divideArrays(arr, sortOrder)
}

const divideArrays = (arr, sortOrder) => {

}

const merge = (arr1, arr2, sortOrder) => {
  let i = 0;
  let j = 0;

  // check if sortOrder is asc or desc
  if(sortOrder === 'asc') {
    if(){}
  }
}