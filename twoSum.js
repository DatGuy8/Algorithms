// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
var twoSum = function (nums, target) {
    for (i = 0; i < nums.length; i++) {
        j = nums.length - 1 
        while(j != i){
            if(nums[j] + nums[i] == target){
                return [i, j];
            }
            j--;
        }
    }


};

const nums1 = [2,7,11,15];
const target1 = 9;

console.log(twoSum(nums1,target1))