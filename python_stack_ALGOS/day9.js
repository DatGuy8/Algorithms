// const str = "Hello World";

// const rotateAmnt1 = 0;
// const expected1 = "Hello World";

// const rotateAmnt2 = 1;
// const expected2 = "dHello Worl";

// const rotateAmnt3 = 2;
// const expected3 = "ldHello Wor";

// const rotateAmnt4 = 4;
// const expected4 = "orldHello W";

// const rotateAmnt5 = 13;
// const expected5 = "ldHello Wor";



function rotateStr(str, amnt) {
    let newstr = '';
    let x = str.slice(str.length-amnt,str.length)
    let y = str.slice(0,str.length-amnt)
    newstr+=x+y
    console.log(x)
    console.log(y)
    return newstr


}
// console.log(rotateStr(str,rotateAmnt4))

const strA1 = "ABCD";
const strB1 = "CDAB";
// Explanation: if you start from A in the 2nd string, the letters are in the same order, just rotated
const expected1 = true;

const strA2 = "ABCD";
const strB2 = "CDBA";
// Explanation: all same letters in 2nd string, but out of order
const expected2 = false;

const strA3 = "ABCD";
const strB3 = "BCDAB";
// Explanation: same letters in correct order but there is an extra letter.
const expected3 = false;

function isRotation(s1, s2) {
    let double = s1 + s1;
    if (s1.length != s2.length){
        return false
    }
    if (double.includes(s2)) {
        return true
    }
    else {
        return false
    }

}

console.log(isRotation(strA1, strB1))
console.log(isRotation(strA2, strB2))
console.log(isRotation(strA3, strB3))