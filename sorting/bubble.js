/*
  * BUBBLE SORT ALGORITHM
  * Compares adjacent elements in an array.
  * The greater value is moved to the right position
  * The lower value is moved to the left position
*/

const bubble = (array) => {
 for(i = 0; i < array.length; i++) {
   let start = array[i];
   let stop = array[i + 1];
   if (start > stop) {
     array[i] = stop;
     array[i+1] = start;
     bubble(array);
   }
  }
  return array
}

console.log(bubble([9,2,-1,22,0,300]));
console.log(bubble([9,2,-1,22,0,-20,300]));