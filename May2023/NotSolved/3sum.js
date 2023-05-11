/**LEET CODE 15
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const returnArr = [];
  for (let i = 0; i < nums.length; i++) {
    let target = nums[i];
    let k = nums.length - 1;
    
    for(let j = i + 1; j < k; j++){
      console.log("nums j", nums[j]);
      console.log("nums k", nums[k]);
      if(nums[j] + nums[k] + nums[i] == 0){
        console.log("here");
        returnArr.push([nums[i], nums[j],nums[k]]);
      }else{
        k--;
      }
    }
  }
  return returnArr
};

const nums1 = [-1,0,1,2,-1,-4];

console.log(threeSum(nums1));