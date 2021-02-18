// run: bable-node binarySearch.js

import binarySearch from "../binarySearch";

let arr = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
let find = 3;
let index = binarySearch(arr, find);
if (index > 0) {
  console.log(`found ${find} at ${index}.`);
} else {
  console.log(`${find} not found.`);
}
