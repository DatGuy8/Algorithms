/** LEET CODE 4 NOT SOLVED
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

 * 
 */

// so for this method,
// thought process: if you know the length of both arrays,
/**
 * So for this first method (Merge Sort)
 *
 * Thought Process: if you know the length of both sorted arrays you know what you need to get
 * EXAMPLE: length of 3 of first array and length 7 second array ...
 * median would be the average of 2 points so position 5 and 6 (10 / 2) and ((10/2) + 1);
 * OR if its odd the(like length of 9) then median would be position 5 (Math.floor(9/2) + 1)
 *
 *
 *
 */

const findMedianSortedArrays = (nums1, nums2) => {
    let p1 = 0,
        p2 = 0,
        totalLength =nums1.length + nums2.length;

    const movePointers = (nums1, nums2) => {
        if (p1 < nums1.length && p2 < nums2.length) {
            return nums1[p1] < nums2[p2] ? nums1[p1++] : nums2[p2++];
        }
        else if(p1 < nums1.length){
            return nums1[p1++];
        }
        else if(p2 < nums2.length){
            return nums2[p2++];
        }
        return -1;
    };
    
    // console.log(totalLength);
    // console.log(totalLength % 2 == 0);

    let m = nums1.length, n = nums2.length;
    
    if ((m+n) % 2 == 0) {
        for (let i = 0; i < ((m+n) / 2 -1); i++) {
            console.log(movePointers(nums1,nums2));
        }
        return ((movePointers(nums1,nums2) + movePointers(nums1,nums2))/2);
    }else{
        for (let i = 0; i < (m+n) / 2 -1; i++) {
            movePointers(nums1,nums2);
            
        }
        return movePointers(nums1,nums2);
    }
};

const nums1 = [1, 3];
const nums2 = [2];
const nums3 = [1, 2, 4, 6];
const nums4 = [3, 4, 7, 9, 10];

console.log(findMedianSortedArrays(nums1, nums2));
