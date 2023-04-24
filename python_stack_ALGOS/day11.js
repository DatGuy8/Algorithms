/* 
Given an array of ints representing a line of people where the space between
indexes is 1 foot, with 0 meaning no one is there and 1 meaning someone is in
that space,
return whether or not there is at least 6 feet separating every person.
Bonus: O(n) linear time (avoid nested loops that cause re-visiting indexes).
*/

const queue1 = [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1];
const expected1 = false;

const queue2 = [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1];
const expected2 = true;

const queue3 = [1, 0, 0, 0, 0, 0, 0, 0, 1];
const expected3 = true;

const queue4 = [];
const expected4 = true;

/**
 * Determines whether each occupied space in the line of people is separated by
 * 6 empty spaces.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<0|1>} queue
 * @returns {Boolean}
 */
// function socialDistancingEnforcer(queue) {
//     for (var i = 0; i < queue.length; i++) {
//         let count = 0;
//         if (queue[i] == 1) {
//             while (queue[i + 1] != 1) {
//                 count++;
//                 i++;
//             }

//         }
//         if (count < 6) {
//             return false
//         }
//     }

// }

console.log(socialDistancingEnforcer(queue2))

function socialDistancingEnforcer(queue) {
    let firstperson = false;
    let count = 0;
    for(var i = 0; i < queue.length; i++){

        if (queue[i] == 1){
            

        }
    }
}



////////////////////////////////////////////

// /* 
//   Balance Index
//   Here, a balance point is ON an index, not between indices.
//   Return the balance index where sums are equal on either side
//   (exclude its own value).

//   Return -1 if none exist.

// */

// const nums1 = [-2, 5, 7, 0, 3];
// const expected1 = 2;

// const nums2 = [9, 9];
// const expected2 = -1;

// const nums3 = [1,3,6,2,10]
// const expected3 = 3

// /**
//  * Finds the balance index in the given array where the sum to the left of the
//  *    index is equal to the sum to the right of the index.
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param {Array<number>} nums
//  * @returns {number} The balance index or -1 if there is none.
//  */
// function balanceIndex(nums) {}




// solution1
// function socialDistancingEnforcer(queue){
//     firstPerson = false;
//     spaceCount = 0;

//     for (i = 0; i<queue.length; i++){

//         if (queue[i] == 1){

//             if (spaceCount < 6 && firstPerson == true){
//                 return false;
//             }
//             firstPerson = true;
//             spaceCount = 0;
//         }

//         else if (firstPerson == true){
//             spaceCount++;
//         }
//     }

//     return true;
// }

// solution 2 not as fast
// function balance(arr) {
//     for(i=0;i<arr.length;i++) {  
//         var sum1 = 0;                 
//         var sum2 = 0;
//         for(j=0;j<i;j++) {     
//             sum1 += arr[j];
//         }
//         for(k=arr.length-1;k>i;k--) { 
//             sum2 += arr[k];
//         }
//         if(sum1 == sum2) {   
//             return i;
//         }
//     } return -1;      
// }

// solution 2 best
// function balanceIndex(nums = []) {
//     if (nums.length < 3) {
//         return -1;
//     }

//     let left = nums[0];
//     let right = 0;

//     for (let i = 2; i < nums.length; i++) {
//         right += nums[i];
//     }

//     for (let i = 1; i < nums.length - 1; i++) {
//         if (left === right) {
//             return i;
//         }

//         right -= nums[i + 1];
//         left += nums[i];
//     }
//     return -1;
// }