const swap = (arr, i, j) => {
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
};
const partition = (arr, low, high) => {
  let i = low - 1;
  let pivot = arr[high];
  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i += 1;
      swap(arr, i, j);
    }
  }
  //swap pivot to [...low, pivot, ...high]
  i += 1;
  swap(arr, i, high);
  return i;
};
const quickSort = (arr, low, high) => {
  if (low < high) {
    let pivotIndex = partition(arr, low, high);
    quickSort(arr, low, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, high);
  }
  return arr;
};
export default quickSort;

/*
 *  [i = -1, j = 0]
 *  5 > 4 skip
 *
 *  i  j                     p
 *    [5, 9, 1, 6, 3, 7, 11, 4]
 *
 * -----------------------------
 *  [i = -1, j = 1]
 *  9 > 4 skip
 *
 *  i     j                  p
 *    [5, 9, 1, 6, 3, 7, 11, 4]
 *
 * -----------------------------
 *  [i = -1, j = 2]
 *  1 < 4 => i++ => swap i,j
 *
 *  i        j               p
 *    [5, 9, 1, 6, 3, 7, 11, 4]
 *
 *     i     j               p
 *    [5, 9, 1, 6, 3, 7, 11, 4]
 *
 *     i     j               p
 *    [1, 9, 5, 6, 3, 7, 11, 4]
 * -----------------------------
 *  [i = 0, j = 3]
 *  6 > 4 skip
 *
 *     i        j            p
 *    [1, 9, 5, 6, 3, 7, 11, 4]
 * -----------------------------
 *  [i = 0, j = 4]
 *  3 < 4 => i++ => swap i,j
 *
 *     i           j         p
 *    [1, 9, 5, 6, 3, 7, 11, 4]
 *
 *        i        j         p
 *    [1, 9, 5, 6, 3, 7, 11, 4]
 *
 *        i        j         p
 *    [1, 3, 5, 6, 9, 7, 11, 4]
 * -----------------------------
 *  [i = 1, j = 5]
 *  7 > 4 skip
 *
 *        i           j      p
 *    [1, 3, 5, 6, 9, 7, 11, 4]
 * -----------------------------
 *  [i = 1, j = 6]
 *  11 > 4 skip
 *        i               j  p
 *    [1, 3, 5, 6, 9, 7, 11, 4]
 * -----------------------------
 *  [i = 1, j = 7]
 *  end loop => i++ => swap i,p
 *        i               j  p
 *    [1, 3, 5, 6, 9, 7, 11, 4]
 *
 *           i            j  p
 *    [1, 3, 5, 6, 9, 7, 11, 4]
 *
 *           i            j  p
 *    [1, 3, 4, 6, 9, 7, 11, 5]
 * -----------------------------
 *
 *  Time Complexity:
 *  1. Worst Case:
 *     n size array always partition to 1 and n-1
 *     => O(n^2)
 *  2. Best Case:
 *     n size array always partition to n/2 and n/2
 *     => O(nlogn)
 * */
