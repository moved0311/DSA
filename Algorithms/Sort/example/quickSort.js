import quickSort from "../quickSort";

let arr = [5, 9, 1, 6, 3, 7, 11, 4];
console.log(`before: [${arr}]`);
console.log(`after : [${quickSort(arr, 0, arr.length - 1)}]`);
console.log("================");
let arr1 = [10, 7, 8, 9, 1, 5];
console.log(`before: [${arr1}]`);
console.log(`after : [${quickSort(arr1, 0, arr1.length - 1)}]`);
console.log("================");
