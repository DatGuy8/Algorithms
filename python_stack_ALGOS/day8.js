// /* 
// Parens Valid
// Given an str that has parenthesis in it
// return whether the parenthesis are valid
// */

// const str1 = "Y(3(p)p(3)r)s";
// const expected1 = true;

// const str2 = "N(0(p)3";
// const expected2 = false;
// // Explanation: not every parenthesis is closed.

// const str3 = "N(0)t ) 0(k";
// const expected3 = false;
// // Explanation: because the second ")" is premature: there is nothing open for it to close.

// const str4 = "a(b))(c";
// const expected4 = false;
// // Explanation: same number of opens and closes but the 2nd closing closes nothing.

// /**
//  * Determines whether the parenthesis in the given string are valid.
//  * Each opening parenthesis must have exactly one closing parenthesis.
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param {string} str
//  * @returns {boolean} Whether the parenthesis are valid.
//  */
// function parensValid(str) {
//     let count = 0;
//     for (var i = 0; i < str.length; i++) {  // loops through string
//         if (str[i] == '(') {                // checks to find open parenthesis
//             count++;                          // add to counter to check position
//         }
//         if (str[i] == ')') {                // checks close parentheis location
//             count--;                        // adds to counter
//             if (count < 0) {                // if count goes below 0 means close paranthesis in wrong location
//                 return false
//             }
//         }
//     }
//     if(count == 0){                     //if count is 0 all parenthesis open and close
//         return true
//     }
//     else{
//         return false                  // if there is an open or close left open so returns false
//     }
// }

// console.log(parensValid(str1))
// console.log(parensValid(str2))                            
// console.log(parensValid(str3))
// console.log(parensValid(str4))

/*****************************************************************************/
















/*
Braces Valid
Given a string sequence of parentheses, braces and brackets, determine whether it is valid.
*/

const str1 = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!";
const expected1 = true;

const str2 = "D(i{a}l[ t]o)n{e";
const expected2 = false;

const str3 = "A(1)s[O (n]0{t) 0}k";
const expected3 = false;

/**
 * Determines whether the string's braces, brackets, and parenthesis are valid
 * based on the order and amount of opening and closing pairs.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {boolean} Whether the given strings braces are valid.
 */


// function bracesValid(str) {
//     let paren = 0;
//     let curly = 0;
//     let box = 0;
//     for(var i = 0; i < str.length; i++){
//         if(str[i] == '(' || str[i] == '{' || str[i] == '['){
//             count++;
//         }
//         if(str[i] == ')' || str[i] == '}' || str[i] == ']'){
//             count--;
//             if(count < 0){
//                 return false
//             }
//         }
//     }
//     if (count == 0){
//         return true
//     }
//     else{
//         return false
//     }
// }


function bracesValid(str) {
    var stack = [];
    for(let i = 0; i < str.length; i++) {
        if(str[i] == "(" || str[i] == "{" || str[i] == "[") {
            stack.push(str[i]);
        }
        else{
            switch(str[i]) {
                case ")":
                    if(stack[stack.length-1] == "(") {
                        stack.pop();
                    }
                    else {
                        return false;
                    }
                    break;
                case "}":
                    if(stack[stack.length-1] == "{") {
                        stack.pop();
                    }
                    else {
                        return false;
                    }
                    break;
                case "]":
                    if(stack[stack.length-1] == "[") {
                        stack.pop();
                    }
                    else {
                        return false;
                    }
                    break;
            }
        }
    }
    if(stack.length > 0) {
        return false
    }
    else {
        return true;
    }
}

console.log(bracesValid(str1));
console.log(bracesValid(str2));
console.log(bracesValid(str3));