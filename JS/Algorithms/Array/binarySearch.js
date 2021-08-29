const binarySearch = (arr, find, left = 0, right = arr.length - 1) => {
  if (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === find) return mid;

    if (find < arr[mid]) {
      return binarySearch(arr, find, left, mid - 1);
    } else {
      return binarySearch(arr, find, mid + 1, right);
    }
  }
  return -1;
};
export default binarySearch;
