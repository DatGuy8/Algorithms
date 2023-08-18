// ================ SOLVED NOW !==================

// /**
//  * @param {string[]} strs
//  * @return {string[][]}
//  */
var groupAnagrams = function (strs) {
  let map = {};
  for (i = 0; i < strs.length; i++) {
    let word = strs[i].split("").sort().join("");
    console.log(word);
    map[word] ? map[word].push(strs[i]) : (map[word] = [strs[i]]);
  }
  return Object.values(map);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
