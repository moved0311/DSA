/*
  example: 
    //index.js
    import bubbleSort from './bubbleSort' 
    bubbleSort([3,2,1])

  run:
    babel-node index.js
*/
const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let swap = 0;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = tmp;
        swap += 1;
      }
    }
    if (swap === 0) break;
  }
  return arr;
};
export default bubbleSort;

/*
 * time complexity:
 *  O(n-1 * n-2 * n-3 * ... * 1)
 *  => O(n(n-1)/2) => O(n^2)
 *
 *  Ω => is already ordered sort(no swap)
 *  Ω(n-1) => Ω(n)
 * */
