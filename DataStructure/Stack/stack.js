/*
 * push    : add new element to stack.
 * pop     : remove the top element.
 * peek    : return top element (dosen't remove element).
 * isEmpty : return true if stack is empty else return false.
 * clear   : clear stack.
 */
function Stack() {
  this.stack = [];

  this.push = (n) => {
    this.stack.push(n);
  };
  this.pop = () => {
    return this.stack.pop();
  };
  this.peek = () => {
    return this.stack[this.stack.length - 1];
  };
  this.isEmpty = () => {
    return this.stack.length > 0 ? false : true;
  };
  this.clear = () => {
    this.stack = [];
  };
  this.size = () => {
    return this.stack.length;
  };
  this.print = () => {
    console.log(this.stack.join(""));
  };
}
module.exports = Stack;
/*=================================*/
