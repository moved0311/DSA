/**
 * leetcode 139. Word Break
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
const helper=(s,wordDict,wordmap)=>{
  if(wordDict.includes(s))return true;
  if(wordmap.has(s))return wordmap.get(s);
  for(let i=1;i<=s.length;i++){
    let sub=s.substring(0,i)
    if(wordDict.includes(sub) && helper(s.substring(i),wordDict, wordmap)){
      wordmap.set(sub,true)
      return true;
    }
  }
   wordmap.set(s,false);
   return false
}
var wordBreak = function(s, wordDict) {
  let wordmap= new Map();
  return helper(s,wordDict,wordmap)
};

console.log('Input: s = "leetcode", wordDict = ["leet", "code"], Output: ', wordBreak("leetcode",["leet", "code"]))
console.log('Input: s = "applepenapple", wordDict = ["apple", "pen"], Output:',wordBreak("applepenapple",["apple", "pen"])) 
console.log('Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"], Output:', wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]) )

module.exports = wordBreak;
