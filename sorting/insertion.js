const insertion = (array) => {
  for (var i = 0; i < array.length; i++) {
    let currentValue = array[i]
    // store the current item currentValue so it can be placed right
    for (var j = i - 1; j > -1 && array[j] > currentValue; j--) {
      // loop through the array in the sorted array (the array from the current to the beginning)
      // copy each item to the next one
      array[j + 1] = array[j]
    }
    // the last item we've reached should now hold the currentValue of the currently sorted item
    array[j + 1] = currentValue
  }

  return array;
}


console.log(insertion([9, 2, -1, 22, 0, 300]));
console.log(insertion([9, 2, -1, 22, 0, -20, 300]));