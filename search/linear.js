const linear = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    return array[i] === target ? 1 : -1;
  }
}

const linear2 = (array, target) => {
  // Find will return the value of the first element that satisfies the condition
  // If not, it will return undefined
  return (array.find((element) => element === target)) === target ? 1 : -1
}

console.log(linear2([20,30], 20));
console.log(linear2([20,30], 10));