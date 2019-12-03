/*
  * Divide and conquer
  * Divides input array into halves until target element is found
*/
// const binary = (array, target) => {
//   let start = 0;
//   let stop = array.length - 1;
//   let middle = Math.floor((stop + start) / 2);

//   while(array[middle] !== target && start !== stop) {
//     if (target > array[middle]) {
//       // Drop left half
//       start = middle + 1;
//     } else {
//       // Drop the right half
//       stop = middle - 1;
//     }
//     middle = Math.floor((stop + start) / 2);
//   }
//   return array[middle] === target ? middle : -1
// }

// OR

const binary = (array, target) => {
  let start = 0;
  let stop = array.length - 1;
  
  let middle = parseInt((stop + start) / 2);
  do {
    if (target > array[middle]) {
      // Drop left half
      start = middle + 1;
    } else {
      // Drop the right half
      stop = middle - 1;
    }
    middle = parseInt((stop + start) / 2);
  }
  while (array[middle] !== target && start !== stop);

  return array[middle] === target ? middle : -1
}
console.log(binary([1, 3, 5, 7, 9], 3))

console.log(binary([1, 2, 3, 4, 5, 6, 7, 8, 9, 100, 200], 200));
console.log(binary([1, 2, 3, 4, 5, 6, 7, 8, 9, 100, 200], 800));