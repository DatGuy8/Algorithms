/**33. Search in Rotated Sorted Array
Medium
24K
1.4K
Companies
There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

[4,5,6,7,0,1,2]

[5,1,2,3,4]

 
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// similar to find Min i think, so looking for target number in nums array
// return  index of target or -1
var search = function(nums, target) {
    
    let left = 0, right = nums.length -1;


    
    

    // binary search
    while(left <= right){

        let mid = Math.floor((left + right) / 2);

        if(target === nums[mid]){
            return mid;
        }
        

        // we need to check which side is sorted
        // if left side is sorted
        if(nums[left] <= nums[mid]){
            // then check left unsorted side 
            if(target >= nums[left] && target < nums[mid]){
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {  //else right side is sorted
            //check right sorted side
            if(target > nums[mid] && target <= nums[right]){
                left = mid + 1;
            }
            else{
                right = mid - 1;
            }
        }
        

        

    }

    return -1;
};


// [5,1,2,3,4]