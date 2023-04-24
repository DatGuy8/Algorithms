/*
  Sum To One Digit
  Implement a function sumToOne(num)​ that,
  given a number, sums that number’s digits
  repeatedly until the sum is only one digit. Return
  that final one digit result.
  Tips:
    to access digits from a number, need to convert it .toString() to access each digit via index
    parseInt(arg) returns arg parsed as an integer, or NaN if it couldn't be converted to an int
    isNaN(arg) used to check if something is NaN
*/

const num1 = 5;
const expected1 = 5;

const num2 = 10;
const expected2 = 1;

const num3 = 25;
const expected3 = 7;

const num4 = 29756
const expected4 = 2



/**
 * Sums the given number's digits until the number becomes one digit.
 * @param {number} num The number to sum to one digit.
 * @returns {number} One digit.
 */
function sumToOneDigit(num,i=num.length-1,sum) {
    
    
    num = num.toString();
    
    if (num.length <= 1){
        return sum;
    }
    
    
    
    
    
    console.log(num)
    
    
    
    return sumToOneDigit(num,i--,sum)
}

// console.log(sumToOneDigit(num1))
// console.log(sumToOneDigit(num2))
// console.log(sumToOneDigit(num3))
console.log(sumToOneDigit(num4))
/*****************************************************************************/






// solutions


function sumToOneDigit(num) {

    if (isNaN(parseInt(num))) {
      return null
    }
  
  
    if (num < 10) {
      return num
    }
  
    const strNum = num.toString()
    let sum = 0
    for (let digit of strNum){
      sum += parseInt(digit)
    }
  
    return sumToOneDigit(sum)
  
  }


  function sumToOneDigit(num) {
    let newStr = num.toString();
    if(newStr.length <= 1){
        return num;
    } else {
        return sumToOneDigit(parseInt(newStr[0]) + parseInt(newStr.slice(1)));
    }
}


function recursivesum1(nums,sum=0,i=0) {
    numstr = nums.toString();
    if (numstr.length <= 1) {
        return nums;
    }
    while(i < numstr.length) {
        sum  += parseInt(numstr[i]);
        i++;
    }
    return recursivesum1(sum);
}

function recursivesum2(nums) {
    numstr = nums.toString();
    if (numstr.length <= 1) {
        return nums;
    }
    sum = parseInt(numstr[0]) + recursivesum2(parseInt(numstr.slice(1)));
    return recursivesum2(sum);
}


function sumToOneDigit(num) {
    console.log(`Beginning of function, num = ${num}`)
    // edge/base case
    if (!num) {
        console.log(`Nan or 0, returning 0`)
        return 0;
    }

    // base case, single digit
    if (num % 10 == num) {
        console.log(`Single digit, returning ${num}`)
        return num;
    }

    // get sum of digits
    console.log(`${num % 10} + sumToOneDigit(${Math.floor(num / 10)})`);
    sum = (num % 10) + sumToOneDigit(Math.floor(num / 10));

    // If sum has more than one digit, repeats logic; if sum is a single digit, it gets sent back by the second conditional
    return sumToOneDigit(sum);
}

console.log(sumToOneDigit('not a num')); // 0
console.log(sumToOneDigit(0)); // 0
console.log(sumToOneDigit(1)); // 1
console.log(sumToOneDigit(6)); // 6
console.log(sumToOneDigit(23)); // 5
console.log(sumToOneDigit(1234)); // 1

// Same function as a single-line function, with test case 1234
// const sumToOneDigitSL = num => !num ? 0 : num % 10 == num ? num : sumToOneDigitSL(num % 10 + sumToOneDigitSL(Math.floor(num / 10)));

// console.log(sumToOneDigitSL(1234)); // 1