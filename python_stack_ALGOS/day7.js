/* 
  Given a string containing space separated words
  Reverse each word in the string.
  If you need to, use .split to start, then try to do it without.
*/



const str1 = "hello";
const expected1 = "olleh";

const str2 = "hello world";
const expected2 = "olleh dlrow";

const str3 = "abc def ghi";
const expected3 = "cba fed ihg";

/**
 * Reverses the letters in each words in the given space separated
 * string of words. Does NOT reverse the order of the words themselves.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str Contains space separated words.
 * @returns {string} The given string with each word's letters reversed.
 */
// function reverseWords(str) {
//   let newstr = '';
//   let words = str.split(' ');
//   for (i = 0; i < words.length; i++) {
//     for (j = words[i].length - 1; j >= 0; j--) {
//       newstr += words[i][j]
//     }
//     if (i != words.length -1){

//       newstr += ' '
//       // console.log(newstr)
//     }

//     // console.log(words[i])
//   }
//   return newstr;
// }
function reverseWords(str) {
  let temp = '';
  let newstr = '';

  for (i = str.length - 1; i >= 0; i--) {
    if (str[i] != ' ') {
      temp += str[i]
      // console.log(temp)
    }
    if (str[i] == ' ') {
      newstr = temp + ' ' + newstr;
      temp = '';
    }
  }
  newstr = temp + ' ' + newstr;
  return newstr

}

console.log(reverseWords(str1))
console.log(reverseWords(str2))
console.log(reverseWords(str3))



////////////////////////////////////////////////////////////////


// /*
//   Reverse Word Order
//   Given a string of words (with spaces)
//   return a new string with words in reverse sequence.
// */

// const str1 = "This is a test";
// const expected1 = "test a is This";

// const str2 = "hello";
// const expected2 = "hello";

// const str3 = "   This  is a   test  ";
// const expected3 = "test a is This";




// /**
//  * Reverses the order of the words but not the words themselves form the given
//  * string of space separated words.
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param {string} wordsStr A string containing space separated words.
//  * @returns {string} The given string with the word order reversed but the words
//  *    themselves are not reversed.
//  */
// function reverseWordOrder(wordsStr) {}



///////////solutions/////////////////////////////////

// function reverseString(string)
// {
//     var tempWord = "";
//     var newString = " ";
//     for(i = string.length -1; i >= 0; i--){
//         if(string[i] != " "){
//             tempWord += string[i];
//         }
//         if(string[i] == " "){
//             newString = tempWord + " " + newString;
//             tempWord = " ";
//         }
//     }
//     newString = tempWord + " " +  newString;
//     return newString;
// }



// function reverseWordOrder(wordsStr) {
//     let words = wordsStr.split(" ")
//     let revWords = []
//     for(let i=words.length-1;i>=0;i--){
//         if(words[i] != ''){
//             revWords.push(words[i])
//         }
//     }
//     return revWords.join(" ")
// }
// console.log(reverseWordOrder(str3))



// function reverseWordOrder(string)
// {
//     var tempWord = "";
//     var newString = " ";
//     for(i = 0; i <= string.length -1; i++){         //goes thru the string forwards
//         if(string[i] != " "){                       //if the letter is not a space
//             tempWord += string[i];                  //add the letter to our temp word
//         }
//         if(string[i] == " " && tempWord != ""){     //if there is a space, but it's the first one
//             newString = tempWord + " " + newString; //then add tempWord to our newString
//             tempWord = "";                          //and clear the tempWord variable
//         }                                           //the function basically ignores extra spaces
//     }
//     newString = tempWord + " " + newString;         //this adds the final word in tempWord
//     return newString;                               //returns the final string.
// }