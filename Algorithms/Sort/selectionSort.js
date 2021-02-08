/*
  run example: node selectionSort.js < input/selectionSort
*/
const fs = require("fs");
const split = require("split");
const through = require("through");

let input = [];
const stdInput = process.stdin.pipe(split());

// stdin save to input array.
stdInput.on("data", (line) => {
  if (!line) return;
  input.push(JSON.parse(line));
});

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    //swap current and minimum number
    let tmp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = tmp;
  }
  return arr;
};

const main = () => {
  let readlines = 1;
  while (input.length > 0) {
    let [num] = input.splice(0, readlines);
    console.log("input : ", num);
    console.log("output: ", selectionSort(num));
    console.log("============================");
  }
};

stdInput.on("end", () => {
  main();
});

module.exports = selectionSort;
/*=======================*/
