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

const rotate = (nums, k) => {
  while (k > 0) {
    lastnum = nums.pop();
    nums.unshift(lastnum);
    k -= 1;
  }
  return nums;
};

const main = () => {
  let readlines = 2;
  while (input.length > 0) {
    let [nums, k] = input.splice(0, readlines);
    console.log("input : ", nums);
    console.log("output: ", rotate(nums, k));
    console.log("============================");
  }
};

stdInput.on("end", () => {
  main();
});

/*=======================*/
