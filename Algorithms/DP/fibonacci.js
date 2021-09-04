const fib = (n) => {
    let f = Array(n+1).fill();
    f[0] = 0;
    f[1] = 1;
    for(let i = 2; i < f.length; i++){
        f[i] = f[i-1] + f[i-2];
    }
    return f[n];
}
module.exports = fib;
/*
    time complexity : O(n)
    space : O(n)
*/
