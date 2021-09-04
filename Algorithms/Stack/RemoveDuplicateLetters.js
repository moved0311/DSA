/*
 * leetcode : 316.
 * run code : node RemoveDuplicateLetters.js < input/RemoveDuplicateLetters
*/
const fs = require("fs")
const split = require("split")
const through = require("through")
const Stack = require("../../DataStructure/Stack/stack")

let input = []
const stdInput = process.stdin.pipe(split())

// stdin save to input array.
stdInput.on('data',(line) =>{
  if(!line) return ;
  input.push(JSON.parse(line))
})

const RemoveDuplicateLetters = (s) => {
  const arr = s.split("")
  // count char 
  let freq = Array(26).fill(0); 
  arr.map((char) => {
     freq[char.charCodeAt(0) - 97] += 1;
  })
  const stack   = new Stack();
  const inStack = Array(26).fill(false); 
  for(let char of arr){
    let idx = char.charCodeAt(0) - 97;
    freq[idx] -= 1;
    if(inStack[idx]) continue;
    
    /* stack is non-empty, stack top > char, stack top is not last one */
    while(!stack.isEmpty() && stack.peek() > char && freq[stack.peek().charCodeAt(0) - 97] > 0){
       inStack[stack.peek().charCodeAt(0) - 97] = false;
       stack.pop();
    }
            
    stack.push(char);
    inStack[idx] = true;

  }
  return stack.print();  
}

const main = () => {
  let readlines = 1;
  while(input.length > 0){
    let [s] = input.splice(0, readlines);
    console.log("input : ", s)
    console.log("output: ", RemoveDuplicateLetters(s))
    console.log("=====================")
  }
}

stdInput.on('end', ()=>{
  main();
})

/*=======================*/
