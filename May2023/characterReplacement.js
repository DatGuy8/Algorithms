//=========LEETCODE 424============
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const characterReplacement = (s, k) => {
  const map = []
  console.log(map);
  let maxSize = 0;
  let left = 0;
  let maxLength = 0;
  
  for(let i = 0; i < s.length; i++){
    const letter = s[i];
    
    map[letter] = (map[letter] || 0) + 1;
    console.log(map);
    maxSize = Math.max(maxSize, map[letter]);
    if( i - left + 1 - maxSize > k){
      map[s[left]] -= 1;
      left += 1;
    }

    maxLength = Math.max(maxLength, i - left + 1);

  }

  return maxLength;

};

const s1 = "ABBB";
const s2 = "AABABBA";


console.log(characterReplacement(s1,3));