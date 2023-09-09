/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// passed only okay this works but only beats 14.13% runtime but beats 81% memeory
var rotate = function (nums, k) {
    k = k% nums.length;
    
    let slicedNums = nums.slice(0,nums.length - k);
    console.log(slicedNums);


    if(k == 0){
        return
    }

    for (i = 0; i < nums.length; i++) {
        if(i<k){
            nums[i] = nums[(nums.length - k) + i];

        }
        else{
            nums[i] = slicedNums[i-k];
        }

    }
    console.log(nums);
};



console.log(rotate([1,2], 5));
