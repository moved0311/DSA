function InsertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
      let tmp = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = tmp;
      j -= 1;
    }
  }
  return arr;
}
module.exports = InsertionSort;
