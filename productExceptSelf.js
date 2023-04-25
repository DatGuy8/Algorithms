/** leetcode238
 *      SO EVERYTHING ON LEFT ARRAY IS MULTIPLIED FROM EVERYTHING FROM THE LEFT SIDE
 *      AND RIGHT ARRAY IS MULITLPLIED FROM EVERYTHING ON RIGHT AND YOU COMBINE AND MULITPLY THEM TOGETHER
 *   
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let leftArr = [];
  let leftMultiplication = 1;
  for (i = 0; i < nums.length; i++) {
    leftArr[i] = leftMultiplication;
    console.log(leftArr[i]);
    leftMultiplication *= nums[i];
    // console.log(leftMultiplication);
  }

  let rightArr = [];
  let rightMultiplication = 1;

  for (let i=nums.length-1; i >= 0; i--) {
    rightArr[i] = rightMultiplication;
    rightMultiplication *= nums[i];
    rightArr[i] *= leftArr[i]; //this additional step saves us from having another iteration. We can do the multiplication at the spot.
  }

  return rightArr
};

const nums1 = [1, 2, 3, 4];

console.log(productExceptSelf(nums1));
