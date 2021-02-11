import mergeSort from "./Algorithms/Sort/mergeSort";
const arrs = [
  [4, 2, 1, 8, 3, 7, 6, 5],
  [1, 2, 3, 4, 5, 6, 7],
  [-10, 2, 11, 5, 6, 40],
  [-22, -33, 41, 14, 56],
];

arrs.map((arr) => {
  console.log("input: ", arr);
  console.log("output: ", mergeSort(arr));
  console.log("===========================");
});
