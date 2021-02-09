/*
  example: use in ./index.js

  import selectionSort from './selectionSort' 
  selectionSort([3,2,1])
*/
const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    //swap current and minimum number
    let tmp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = tmp;
  }
  return arr;
};
export default selectionSort;
