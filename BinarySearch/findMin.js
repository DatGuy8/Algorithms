/** 153
 * @param {number[]} nums
 * @return {number}
 * Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of unique elements, return the minimum element of this array.

You must write an algorithm that runs in O(log n) time.

Example 1:

Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The original array was [1,2,3,4,5] rotated 3 times.
Example 2:

Input: nums = [4,5,6,7,0,1,2]
Output: 0
Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.
Example 3:

Input: nums = [11,13,15,17]
Output: 11
Explanation: The original array was [11,13,15,17] and it was rotated 4 times. 
 */

// we are looking for the unsorted point , looking to return the smallest number
var findMin = function(nums) {
    
    let left = 0
    let right = nums.length - 1;

    // if only one element
    if(nums.length === 1){
        return nums[0];
    }

    // if the array is already sorted, return the first number in array
    if(nums[0] < nums[right]){
        return nums[0];
    }

    // binary
    while(left <=  right){
        let mid = Math.floor((left + right) / 2);
        
        // if the next number over is smaller than thats where its unsorted and the one over is the lowest number
        if(nums[mid] > nums[mid + 1]){
            return nums[mid + 1]; 
        }

        // if the number before is larger than the mid is where it is unsorted and thats the lowest number
        if(nums[mid] < nums[mid-1]){ 
            return nums[mid];
        }

        // we are looking the point where its not sorted
        if(nums[mid] > nums[left]){ // so it means that this side is sorted so when need to check the right side
            left = mid + 1;
        }
        else{  // else the unsorted point would be on the left side
            right = mid - 1;
        }
    }

};






console.log(findMin([4,5,6,7,0,1,2,3]));