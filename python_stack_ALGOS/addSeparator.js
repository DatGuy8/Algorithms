// ====================== ADD SEPARTOR AND BOOK INDEX ============================
//   Given an arr and a separator string, output a string of every item in the array separated by the separator.
  
//   No trailing separator at the end
//   Default the separator to a comma with a space after it if no separator is provided
// */
// // /**
// //  * Converts the given array into a string of items separated by the given separator.
// //  * - Time: O(?).
// //  * - Space: O(?).
// //  * @param {Array<string|number|boolean>} arr The items to be joined as a string.
// //  * @param {string} separator To separate each item of the given arr.
// //  * @returns {string} The given array items as a string separated by the given separator.
// //  */

// const arr1 = [1, 2, 3];
// const separator1 = ", ";
// const expected1 = "1, 2, 3";

// const arr2 = [1, 2, 3];
// const separator2 = "-";
// const expected2 = "1-2-3";

// const arr3 = [1, 2, 3];
// const separator3 = " - ";
// const expected3 = "1 - 2 - 3";

// const arr4 = [1];
// const separator4 = ", ";
// const expected4 = "1";

// const arr5 = [];
// const separator5 = ", ";
// const expected5 = "";

// const arr6 = [1, 2, 3];
// const separator6 = " and ";
// const expected6 = "1 and 2 and 3";


// function join(arr, separator) {
//     var newStr = "";
//     for (var i = 0; i < arr.length; i++){

//             newStr += arr[i];
//             if (arr[i+1] != undefined){
//                 newStr += separator;

//             }

//         }
//         return newStr;
//     }


// console.log(join(arr1,separator1))
// console.log(join(arr2,separator2))
// console.log(join(arr3,separator3))
// console.log(join(arr4,separator4))
// console.log(join(arr5,separator5))
// console.log(join(arr6,separator6))


/* 
Book Index
Given an array of ints representing page numbers
return a string with the page numbers formatted as page ranges when the nums
span a consecutive range.
*/
/**
 * Turns the given arr of page numbers into a string of comma hyphenated
 * page ranges.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Page numbers.
 * @returns {string} The given page numbers as comma separated hyphenated
 *    page ranges.
 */

const nums1 = [1, 13, 14, 15, 37, 38, 70];
const expected1 = "1, 13-15, 37-38, 70";

const nums2 = [5, 6, 7, 8, 9];
const expected2 = "5-9";

const nums3 = [1, 2, 3, 7, 9, 15, 16, 17];
const expected3 = "1-3, 7, 9, 15-17";


function bookIndex(nums) {
    newstr = "";
    for (var i = 0; i< nums.length; i++){
        newstr += nums[i];
        if (nums[i] == nums[i+1] - 1){
            while (nums[i] == nums[i + 1] - 1){
                i++;
            }
            newstr += ("-" + nums[i]);
            
        }
        if (nums[i + 1] == undefined){
            break;
        }
        if (nums[i] != nums[i + 1]- 1){
            newstr += ",";
        }
    }
    return newstr;
}

console.log(bookIndex(nums1))
console.log(bookIndex(nums2))
console.log(bookIndex(nums3))

