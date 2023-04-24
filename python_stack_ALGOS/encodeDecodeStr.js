// function encodStr(str) {

//     var newStr = "";

//     for (var i = 0; i < str.length; i++) {
//         if (str[i] == str[i + 1]) {
//             var count = 1;
//             while (str[i] == str[i + 1]) {
//                 count++;
//                 i++;
//             }
//             newStr += str[i] + count;
//             // newStr += count;
//             // console.log(str[i]);
//             // console.log(count);

//         }
//         else {
//             newStr += str[i] + 1;
//         }
//     }
//     if (newStr.length < str.length) {

//         return newStr;
//     }
//     else {
//         return str;
//     }
// }

// const str1 = "aaaabbcddd";
// const expected1 = "a4b2c1d3";

// const str2 = "";
// const expected2 = "";

// const str3 = "a";
// const expected3 = "a";

// const str4 = "bbccc";
// const expected4 = "bbcc";

// console.log(encodStr(str1))
// console.log(encodStr(str2))
// console.log(encodStr(str3))
// console.log(encodStr(str4))

// /*
// String Decode
// */

const str1 = "a3b2c1d3";
const expected1 = "aaabbcddd";

const str2 = "a3b2c12d10";
const expected2 = "aaabbccccccccccccdddddddddd";

/**
 * Decodes the given string by duplicating each character by the following int
 * amount if there is an int after the character.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str An encoded string with characters that may have an int
 *    after indicating how many times the character occurs.
 * @returns {string} The given str decoded / expanded.
 */
// function decodeStr(str) {
//     let newstr = '';
//     for (i = 0; i < str.length; i++) {
//         if (isNaN(str[i]) == true) {
//             newstr += str[i];
//             if (isNaN(str[i + 1]) == false) {
//                 let temp = "";
//                 temp += str[i + 1];
//                 while (isNaN(str[i+1]) == false){
//                     i++;
//                     console.log(str[i]);
//                     newstr += str[i+1];

//                 }

//                 console.log(temp);
//             }
//         }

//     }

//     return (newstr);
// }

function decodeStr1(str) {
  let returnStr = "";
  let tempLetter = "";
  for (let i = 0; i < str.length; i++) {
    if (isNaN(str[i])) {
      returnStr += str[i];
      tempLetter = str[i];
    } else {
      let stringNum = str[i];
      while (!isNaN(str[i + 1])) {
        stringNum += str[i + 1];
        i++;
      }

      returnStr += tempLetter.repeat(Number(stringNum) - 1);
    }
  }
  return returnStr;
}

console.log(decodeStr1(str1));
