/* 
  Array: Binary Search (non recursive)
  Given a sorted array and a value, return whether the array contains that value.
  Do not sequentially iterate the array. Instead, ‘divide and conquer’,
  taking advantage of the fact that the array is sorted .
  Bonus (alumni interview): 
    first complete it without the bonus, because they ask for additions
    after the initial algo is complete
    return how many times the given number occurs
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

// bonus, how many times does the search num appear?
const nums4 = [2, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9];
const searchNum4 = 2;
const expected4 = 4;


// function binarySearch(arr, num) {

//     let end = arr.length-1;
//     let start = 0;
//     while (start <= num) {
//         let mid = Math.floor(end - start / 2);   // half of array number
        
//         if(arr[mid] === num){
//             return true;
//         }

//         if(num < arr[mid]){
//             end = mid - 1;
//             console.log('END IS', end)
//         }
//         else{
//             start = mid + 1
//             console.log('START IS', start)
//         }


//     }
//     return false;
// }


function binarySearch(sortedNums, searchNum) {
    let leftIdx = 0;
    let rightIdx = sortedNums.length - 1;
    
    while (leftIdx <= rightIdx) {
        let midIdx = Math.floor(rightIdx - leftIdx / 2);
        
        if (sortedNums[midIdx] === searchNum) {
            return true;
        }
        
        if (searchNum < sortedNums[midIdx]) {
            rightIdx = midIdx - 1;
        } else {
            leftIdx = midIdx + 1;
        }
    }
    return false;
}
    
    console.log(binarySearch(nums1, searchNum1))
    console.log(binarySearch(nums2, searchNum2))
    console.log(binarySearch(nums3, searchNum3))
    console.log(binarySearch(nums4, searchNum4))

