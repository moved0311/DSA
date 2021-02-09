import bubbleSort from "./Algorithms/Sort/bubbleSort";
const arrs = [
  [3, 2, 1],
  [4, 2, 6, 1, 0, 3, 9],
  [10, 4, 9, 7, 0, 1, 5],
  [1, 2, 3, 4, 5, 6, 7],
];

arrs.map((arr) => {
  console.log("input: ", arr);
  console.log("output: ", bubbleSort(arr));
  console.log("===========================");
});
