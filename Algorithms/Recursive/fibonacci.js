const fib = (n) =>{
    if(n <= 1) return n;
    return fib(n-1) + fib(n-2);
}

module.exports = fib;

/*
 time complexity: exponential.
 space : O(n)  ---> stack size.
 */
