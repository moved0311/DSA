import insertionSort from "./Algorithms/Sort/insertionSort";
const arrs = [
  [3, 2, 1],
  [4, 2, 6, 1, 0, 3, 9],
];

arrs.map((arr) => {
  console.log(insertionSort(arr));
});
