const swap = (arr, a, b) => {
  let tmp = arr[a]
  arr[a] = arr[b]
  arr[b] = tmp
}
const heapify = (arr, n, i) => {
  let rootIndex = i
  let leftIndex = 2 * i + 1
  let rightIndex = 2 * i + 2
  if (arr[leftIndex] > arr[rootIndex] && leftIndex < n) {
    rootIndex = leftIndex
  }
  if (arr[rightIndex] > arr[rootIndex] && rightIndex < n) {
    rootIndex = rightIndex
  }
  if (rootIndex !== i) {
    swap(arr, rootIndex, i)
    heapify(arr, n, rootIndex)
  }
}
const heapSort = (arr) => {
  // 1. build max-heap
  let len = arr.length
  heapify(arr, len, 0)

  // 2. swap 0 and last element, and fix last element by reducing heap size.
  for (let i = len - 1; i > 0; i--) {
    swap(arr, 0, i)
    heapify(arr, i, 0)
  }
  return arr
}
export default heapSort
