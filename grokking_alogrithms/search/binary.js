// Binary seach algorithm
// Input is a sorted list of numbers
// If an item you're looking for is in the list, binary search returns the position of its location
// else it returns null

// Approach:
// Guess the middle number, eliminating half of the options every time
// Time -> For any lit of n values, binary search will take log2 n
// returns index of found item


// https://github.com/egonSchiele/grokking_algorithms/blob/master/01_introduction_to_algorithms/ES6/02_recursive_binary_search.js


function binarySearch (list, item) {
  // set initial high, mid, low indices
  let low = 0;
  let high = list.length - 1;
  console.log(low, high)
  
  // Continue until there's only one value left in the list
  while (low <= high) {
    let mid = Math.floor((low + high) / 2)
  //   // Our guess will always be the value in the middle index
    let guess = list[mid];
    if (guess === item) {
      return mid;
    }
    if (guess < item) {
      // The value in the middle(our guess) is too low
      // Set new low as the next item from our former middle 
      low = mid + 1;
    }
    if (guess > item) {
      high = mid - 1;
    }
  }
  return null;
}

console.log(binarySearch([1, 3, 5, 7, 9], 3))
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 100, 200], 200));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 100, 200], 800));


// assert(binarySearch([1, 3, 5, 7, 9], 3), 1)