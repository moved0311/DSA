import radixSort from "../radixSort";
const arrs = [
  [4, 2, 1, 8, 3, 7, 6, 5],
  [1, 2, 3, 4, 5, 6, 7],
  [170, 45, 75, 90, 802, 24, 2, 66]
];

arrs.map((arr) => {
  console.log("input: ", arr);
  console.log("output: ", radixSort(arr));
  console.log("===========================");
});
