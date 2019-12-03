// Assumes input is array of numbers
// Will give output as array of numbers in ordered form 
// [ 45, 23, 10, 3, 128, 45] ==> [ 128, 45, 45, 23, 10, 3]
const algo = (input) => {
  input.map((number, index) => {
    if (number >= input[index + 1]) {
      input[index] = number
    } else {
      input[index] = input[index + 1];
      input[index + 1] = number;
    }
  });
}

console.log('res', algo([45, 23, 10, 3, 128, 45]));

// Check if each number is greater than the first
// If it is greater, place it at the beginning of the array
// If it is not, leave it where it is.

