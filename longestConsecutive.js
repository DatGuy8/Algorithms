/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const sortedNums = nums.sort((a, b) => a - b);
  // console.log(sortedNums);
  let count = 1;
  let highestCount = 1;
  for (i = 0; i < sortedNums.length; i++) {
    while (sortedNums[i] + 1 == sortedNums[i + 1] || sortedNums[i] == sortedNums[i+1]) {
      count++;
      i++;
    }
    if(count > highestCount){
      highestCount = count;
    }
    count=1;
  }

  return(highestCount);
};

const num1 = [100, 4, 200, 1, 3, 2];
const num2 = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];

console.log(longestConsecutive(num1));
console.log(longestConsecutive(num2));
