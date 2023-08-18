/* LEET CODE 11
https://leetcode.com/problems/container-with-most-water/
*/

/* 
Finds the container that can hold the most water based on it's area.
A container's length is the distance between indexes and the two sides are
the heights at those indexes.
See: https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg
*/

const heights1 = [4,4,71,54,11,2,678];
const expected1 = 49;
// Explanation: heights1[1] and heights1[8] as container edges.
// Length = 8 - 1. Height = 7

const heights2 = [1, 1];
const expected2 = 1;

const heights3 = [4, 3, 2, 1, 4];
const expected3 = 16;

const heights4 = [1, 2, 1];
const expected4 = 2;

/**
 * Finds the container that can hold the most water based on it's area.
 * A container's length is the distance between indexes and the two sides are
 * the heights at those indexes.
 * @see https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {number[]} heights
 * @returns {number} Representing the max area of a container.
 */

//=============================WORKS BUT TOO SLOW/BRUTE FORCE=========================================
function containerWithMostWater(heights) {
  let maxWater = 0;
  for(let left = 0; left < heights.length; left++){
    for(let right = heights.length-1; right > left; right--){
      let width = right - left;
      maxWater = Math.max(maxWater, Math.min(heights[left], heights[right]) * width);
      
    }
  }
  return maxWater
}


//===========================BEST==================================
function fasterContainerFinder(heights){
  let maxWater = 0;
  let left = 0;
  let right = heights.length - 1;

  while(left < right){
    maxWater = Math.max(maxWater, Math.min(heights[left], heights[right]) * (right - left));
    heights[left] <= heights[right] ? left++ : right--;
  }
  return maxWater;
}

console.log(fasterContainerFinder(heights1));
console.log(fasterContainerFinder(heights2));
console.log(fasterContainerFinder(heights3));
console.log(fasterContainerFinder(heights4));

