// /* 
//   Recursively reverse a string
//   helpful methods:
//   str.slice(beginIndex[, endIndex])
//   returns a new string from beginIndex to endIndex exclusive
// */

// const str1 = "abc123";
// const expected1 = "cba";

// const str2 = "";
// const expected2 = "";

// /**
//  * Recursively reverses a string.
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param {string} str
//  * @returns {string} The given str reversed.
// //  */
// function reverseStr(str, position = str.length - 1, newstr = '') {


//     if (position < 0) {
//         return newstr;
//     }

//     newstr += str[position];
//     return reverseStr(str, position - 1, newstr)
// }

// console.log(reverseStr(str1))
// console.log(reverseStr(str2))

// /*****************************************************************************/












/*
  Recursive Binary Search
  Input: SORTED array of ints, int value
  Output: bool representing if value is found
  Recursively search to find if the value exists, do not loop over every element.
  Approach:
  Take the middle item and compare it to the given value.
  Based on that comparison, narrow your search to a particular section of the array
*/

const nums1 = [1, 3, 5, 6];
const searchNum1 = 4;
const expected1 = false;

const nums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
const expected2 = true;

const nums3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
const expected3 = true;

/**
 * Add params if needed for recursion
 * Recursively performs a binary search (divide and conquer) to determine if
 * the given sorted nums array contains the given number to search for.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedNums
 * @param {number} searchNum
 * @returns {boolean} Whether the searchNum was found in the sortedNums array.
 */
function binarySearch(sortedNums, searchNum, start=0, end = sortedNums.length-1) {

    
    let mid = Math.floor(end - start /2);
    
    if (start > end){
        return false;
    }
        
    
    if (sortedNums[mid]===searchNum){
        return true;
    }

    
    if (searchNum > sortedNums[mid]){
        return binarySearch(sortedNums, searchNum, start = mid + 1, end)
    }
    
    
    if (searchNum < sortedNums[mid]){
        return binarySearch(sortedNums, searchNum,start , end = mid -1)
    }
    

}

console.log(binarySearch(nums1,searchNum1))
console.log(binarySearch(nums2,searchNum2))
console.log(binarySearch(nums3,searchNum3))




// function binarySearchNonrecursive(sortedNums, searchNum) {
//     let leftIdx = 0;
//     let rightIdx = sortedNums.length - 1;

//     while (leftIdx <= rightIdx) {
//         let midIdx = Math.floor(rightIdx - leftIdx / 2);

//         if (sortedNums[midIdx] === searchNum) {
//             return true;

//         }

//         if (searchNum < sortedNums[midIdx]) {
//             rightIdx = midIdx - 1;
//         } else {
//             leftIdx = midIdx + 1;
//         }
//     }
//     return false;

// }