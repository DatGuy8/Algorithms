/**
 * You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.

Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true

Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false

 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

// this is m x Log(n)
var searchMatrix = function (matrix, target) {
    // loops through that matrix
    for (let i = 0; i < matrix.length; i++) {
        // sets the end variable of that nested array

        let end = matrix[i].length - 1;

        // if the target value is inbetween current array
        console.log(matrix[i][0], matrix[i][end]);
        if (target >= matrix[i][0] && target <= matrix[i][end]) {
            let left = 0,
                right = matrix[i].length - 1;

            while (left <= right) {
                let mid = Math.floor((left + right) / 2);

                if (target === matrix[i][mid]) {
                    return true;
                } else if (matrix[i][mid] < target) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
        }
    }

    return false;
};

// can do this cuz its all sorted
// binary searches the column then the selected row O log m * n
const searchMatrixFaster = (matrix, target) => {
    const rowIndex = searchPotentialRow(matrix, target);
    if (rowIndex != -1) return binarySearchRow(rowIndex, matrix, target);
    else return false;
};

const searchPotentialRow = (matrix, target) => {
    let low = 0;
    let high = matrix.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (
            target >= matrix[mid][0] &&
            target <= matrix[mid][matrix[0].length - 1]
        ) {
            return mid; // returns index of row
        } 
        else if (target < matrix[mid][0]) high = mid - 1; // if lower change high to mid
        else low = mid + 1; // if higher change low to mid
    }

    return -1;
};

const binarySearchRow = (rowIndex, matrix, target) => {
    let left = 0;
    let right = matrix[rowIndex].length - 1;

    while (left<=right){
        let mid = Math.floor((left+right)/2);

        if(target === matrix[rowIndex][mid]) return true;
        else if(target < matrix[rowIndex][mid]) right = mid - 1;
        else left = mid + 1; 
    }

    return false;
};

console.log(
    searchMatrixFaster(
        [
            [1, 3, 5, 7],
            [10, 11, 16, 20],
            [23, 30, 34, 60],
        ],
        31
    )
);
