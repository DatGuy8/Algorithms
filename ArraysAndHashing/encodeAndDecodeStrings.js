/** LEETCODE 271
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function(strs) {
    return strs.join(String.fromCharCode(257));
    
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(s) {
    return s.split(String.fromCharCode(257));
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */


const strs1 = ["HELLO", "WORLD", "TODAY", "is", "a", "GoOD"]


console.log(encode(strs1));
console.log(decode(encode(strs1)));