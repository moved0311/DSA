const toBinary = (num) => {
  /*
  const arr = [];
  while (num) {
    arr.push(num % 2);
    num = Math.floor(num / 2);
  }
  return arr.reverse().join("");
  */
  return num.toString(2);
};
export default toBinary;
