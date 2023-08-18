// /** LEET CODE 167
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */

//==============THIS WORKS BUT TOO SLOW=====================
var twoSum = function (numbers, target) {
  const returnArr = [];
  for (i = 0; i < numbers.length; i++) {
    let secondSum = target - numbers[i];
    for (j = numbers.length - 1; j > i; j--) {
      if (numbers[j] == secondSum) {
        returnArr.push(i + 1);
        returnArr.push(j + 1);
      }
    }
  }
  return returnArr;
};

const nums1 = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 1];
const target1 = 2;

console.log(twoSum(nums1, target1));

//============== THIS WORKS BECAUSE IT IS ALREADY SORTED ==================
const twoSumFaster = (numbers, target) => {
  let left = 0;
  let right = numbers.length - 1;

  while (numbers[left] + numbers[right] !== target) {
    if (numbers[left] + numbers[right] > target) {
      right--;
    } else {
      left++;
    }
  }

  return [left + 1, right + 1]
};


console.log(twoSumFaster(nums1, target1));

// this works too
// function twoSum(numbers, target) {
//     for(let start = 0, end = numbers.length-1; start < end;){
//         let sum = numbers[start] + numbers[end]
//         if(sum === target)return [++start, ++end]
//         else sum > target ? end-- : start++
//     }
// };