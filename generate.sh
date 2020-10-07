#!/bin/sh
# create default js template 
# ./generate filename

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
  console.log(input)
}

stdInput.on('end', ()=>{
  main();
})

/*=======================*/
EOF
