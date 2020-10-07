/**
 * @param {number} N
 * @return {number}
 */

/*
Example 1:
Input: 5
Output: 2
Explanation: 5 is "101" in binary, with complement "010" in binary, which is 2 in base-10.

Example 2:
Input: 7
Output: 0
Explanation: 7 is "111" in binary, with complement "000" in binary, which is 0 in base-10.

Example 3:
Input: 10
Output: 5
Explanation: 10 is "1010" in binary, with complement "0101" in binary, which is 5 in base-10.
*/

var bitwiseComplement = function(N) {
    if(N === 0) return 1;
    let res = 0;

    for(let i = 0; N > 0; i++){
      // check last binary number, if is 1 shift and add to res.
      if(!(N & 1)){
        res += (1 << i);
      }
      // shift n 1010 -> 101
      N = N >> 1;
    } 
  return res;
};

module.exports = bitwiseComplement;

