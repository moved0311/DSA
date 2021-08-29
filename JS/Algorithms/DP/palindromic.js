/**
 * leetcode - 647. Palindromic Substrings
 * @param {string} s
 * @return {number}
 */
const countSubstrings = function (s) {
  let arr = s.split("");
  let len = arr.length;
  let res = 0;
  let dp = Array(len)
    .fill(false)
    .map(() => Array(len).fill(false));

  for (let k = 0; k < len; k++) {
    for (let i = 0; i < len - k; i++) {
      let j = i + k;
      let cur = arr[i] === arr[j] && (k < 2 || (j > i + 1 && dp[i + 1][j - 1]));

      dp[i][j] = cur;
      if (cur) {
        res += 1;
      }
    }
  }

  return res;
};
module.exports = countSubstrings;
/*
    time complexity: 
        00     01          02     ...   0(n-1)  0n
        11     12          13     ...   1(n)
        22     23          24
        33     ...         (n-2)n
        ...    (n-1) n
        nn

        -> n + (n-1) + (n-2) + .. + 2 + 1 = O(n^2)
    space : dp -> O(n^2)
*/
