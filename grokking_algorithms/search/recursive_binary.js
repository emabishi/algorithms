// Instead of using a loop, call the binary search function recursively


function binarySearch(list, item, low = 0, high = list.length - 1) {
    let mid = Math.floor((low + high) / 2);
    let guess = list[mid];

    // stop the recursion when low and high overlap
    if (low > high) {
      return null;
    }
    // or when you've found the index of the item
    if (guess === item) {
      return mid;
    }
    if (guess < item) {
      // guess is too low
      low = mid + 1;
      return binarySearch(list, item, low, high)
    }
    if (guess > item) {
      high = mid - 1;
      return binarySearch(list, item, low, high)
    }
}


console.log(binarySearch([1, 3, 5, 7, 9], 3))
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 100, 200], 200));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 100, 200], 800));