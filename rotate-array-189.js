/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// passed only okay this works but only beats 14.13% runtime but beats 81% memeory
var rotate = function (nums, k) {
    k = k % nums.length;

    let slicedNums = nums.slice(0, nums.length - k);
    console.log(slicedNums);


    if (k == 0) {
        return
    }

    for (i = 0; i < nums.length; i++) {
        if (i < k) {
            nums[i] = nums[(nums.length - k) + i];

        }
        else {
            nums[i] = slicedNums[i - k];
        }

    }
    console.log(nums);
};



// console.log(rotate([1,2], 5));



//=====================================
// This uses reverse method where you reverse the whole nums then you reverse the left of k and then right of k
const rotateFaster = (nums, k) => {

    // need to put %=
    k %= nums.length;

    // function to reverse 
    const reverse = (start, end) => {
        while (start < end) {
            let temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
            start++;
            end--;
        }
    }

    reverse(0, nums.length - 1);
    reverse(0 , k-1);
    reverse(k, nums.length-1);

    console.log(nums);
}

console.log(rotateFaster([1, 2, 3, 4, 5, 6, 7], 3));









