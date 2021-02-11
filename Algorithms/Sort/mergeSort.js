/*
 *  //index.js
 *  import mergeSort from 'path/mergeSort'
 *  mergeSort([4,2,1,8,2,7,6,5])
 *
 *  run: babel-node index.js
 * */
const merge = (left, right) => {
  const res = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      res.push(left[i]);
      i += 1;
    } else {
      res.push(right[j]);
      j += 1;
    }
  }
  const rest = i < j ? left.slice(i) : right.slice(j);
  return [...res, ...rest];
};
const mergeSort = (arr) => {
  if (arr.length === 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  const l = mergeSort(left);
  const r = mergeSort(right);
  return merge(l, r);
};
export default mergeSort;
/*
 divide: 
 [4,2,1,8,3,7,6,5]
 [4,2,1,8] [3,7,6,5]
 [4,2] [1,8] [3,7] [6,5]
 [4] [2] [1] [8] [3] [7] [6] [5]

 conquer:
 [4] [2] [1] [8] [3] [7] [6] [5]
 [2,4] [1,8] [3,7] [5,6]
 [1,2,4,8] [3,5,6,7]
 [1,2,3,4,5,6,7,8]

  time complexity: 
    divide: nlog(n)
    conqure: n
    => O(nlog(n))
*/
