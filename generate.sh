#!/bin/sh
# create default js template 
# ./generate functionName 

FILENAME=$1

cat << EOF > $FILENAME.js
const fs = require("fs")
const split = require("split")
const through = require("through")

let input = []
const stdInput = process.stdin.pipe(split())

// stdin save to input array.
stdInput.on('data',(line) =>{
  if(!line) return ;
  input.push(JSON.parse(line))
})

const $FILENAME = (n) => {
  
}

const main = () => {
  let readlines = 1;
  while(input.length > 0){
    let [num] = input.splice(0, readlines);
    console.log("input : ", num)
    console.log("output: ", $FILENAME(num))
    console.log("============================")
  }
}

stdInput.on('end', ()=>{
  main();
})

/*=======================*/
EOF
