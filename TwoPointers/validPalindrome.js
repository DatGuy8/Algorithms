/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  if (s.length <= 1) {
    return true;
  }

  let checkString = s.toLowerCase().replaceAll(/[^a-z0-9]/gi, "");

  for (let i = 0; i < checkString.length / 2; i++) {
    let j = checkString.length - 1 - i;
    if (checkString[i] !== checkString[j]) {
      return false;
    }
  }
  return true;
};

const str1 = "A man, a plan, a canal: Panama";
const str2 = "race a car";
const str3 = " ";

console.log(isPalindrome(str1));
console.log(isPalindrome(str2));
console.log(isPalindrome(str3));
