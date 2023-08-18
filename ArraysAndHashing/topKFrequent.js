/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var topKFrequent = function (nums, k) {
  let map = new Map();
  const returnArr = [];
  for(let num of nums){
    map.set(num, map.get(num) + 1 || 1)
  }

  for(let [key,value] of map) {
    returnArr.push([key,value]);
  }
  returnArr.sort((a,b) => b[1] - a[1]);
  console.log(returnArr);

  return returnArr.slice(0,k).map((x)=>x[0]);
};

const nums1 = [1, 1, 1, 2, 2, 3, 4, 5,5,5,5,5, 6];
const k1 = 2;

console.log(topKFrequent(nums1, k1));
