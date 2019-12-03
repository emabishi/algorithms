// Given a list of values, sort the values in descenging order

const selection = (list) => {
  // Create new array
  // Look through old array for largest
  // Add largest to new array
  // remove largest from old array
  // Do this until the old list.length = new list.length

  let result = [];
  while (list.length > 0) {
    let max = list.find((num, idx, self) => num === Math.max(...self));
    console.log(max)
    let indexOfMax = list.indexOf(max);
    console.log(indexOfMax)
    list.splice(indexOfMax, 1);
    result.push(max);
  }
  return result
}

// console.log(selection([156,141,111,94,88,61,35]))
console.log(selection([141,94,88,35,111, 61, 156]))