// const binarySearch = (arr, target) => {
//   if(arr.length < 1) return -1;

//   let left = 0;
//   let right = arr.length -1
//   let mid = Math.floor((arr.length-1)/2)

//   if(arr[mid] === target) return mid

//   while(left < right) {
//     if(arr[left] === target) {
//       return left
//     } else if(arr[right] === target) {
//       return right
//     } else {
//       left++
//       right--
//     }
//   }
//   return -1
// }

// binarySearch([1,2,3,4,5], 2) // 1
// binarySearch([1,2,3,4,5], 3) // 2
// binarySearch([1,2,3,4,5], 5) // 4
// binarySearch([1,2,3,4,5], 100) // -1

const binarySearch = (arr, target) => {
  if (arr.length < 1) return -1;

  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor((arr.length - 1) / 2);

  if (arr[mid] === target) return mid;

  while (arr[mid] !== target && left <= right) {
    if (target < arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }

    mid = Math.floor((left + right) / 2);
  }
  if (arr[mid] === target) {
    return mid;
  }
  return -1;
};

// binarySearch([1, 2, 3, 4, 5], 2); // 1
// binarySearch([1,2,3,4,5], 3) // 2
// binarySearch([1,2,3,4,5], 5) // 4
// binarySearch([1,2,3,4,5], 100) // -1
