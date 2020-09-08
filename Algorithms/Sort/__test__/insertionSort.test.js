const insertionSort = require("../insertionSort");

test("Insertion sort : [5, 4, 3, 2, 1]", () => {
  expect(insertionSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
});
test("Insertion sort : [15, 44, 63, 22, 7]", () => {
  expect(insertionSort([15, 44, 63, 22, 7])).toEqual([7, 15, 22, 44, 63]);
});
