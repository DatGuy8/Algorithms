//=========LEETCODE 424============
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const characterReplacement = (s, k) => {
  let set = new Set();
  let left = 0;
  let maxSize = 0;
  let replaced = 0;
  
  if (s.length === 0) return 0;
  if (s.length === 1) return 1;
  
  let currentLetter = s[0];
  for (let i = 0; i < s.length; i++) {

    if(s[i] != currentLetter && replaced < k){
      replaced++;
      maxSize= Math.max(maxSize, i- left + 1);
    }else if(s[i] != currentLetter && replaced >= k){
      replaced = 0;
      left = i;
    }

    currentLetter = s[i];
  }
  return maxSize;
};

const s1 = "ABAB";
const s2 = "AABABBA";


console.log(characterReplacement(s2,2));