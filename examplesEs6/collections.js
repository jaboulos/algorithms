/*
FILTER example
return words with a length > 4
*/
const words = [
  'spray',
  'limit',
  'elite',
  'exuberant',
  'destruction',
  'present',
];

const filterWords = words.filter((e) => e.length > 4);

/*
REDUCE example
*/
const nums = [0, 1, 2, 3, 4];
const sum = nums.reduce((accumulator, currentValue, currentIndex, array) => {
  return accumulator + currentValue;
}, 0);

/*
Object.entries()
*/

const ob1 = {
  a: 'somestring',
  b: 42,
};

const result = Object.entries(object1); // [ [ 'a', 'somestring' ], [ 'b', 42 ] ]
