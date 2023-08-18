// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
/**
 * Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 * 
 * 
 * @param {string} s
 * @return {boolean}
 */
const s1 = "()" // true
const s2 = "()[]{}" // true
const s3 = "(]" // false

const isValid = (str) => {
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
};

console.log(isValid(s1));
console.log(isValid(s2));
console.log(isValid(s3));

