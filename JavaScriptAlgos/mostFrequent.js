


const mostFrequent = nums => {
    let newObj = {};
    let highestCount = 0;
    let newArr = [];

    for (let i = 0; i < nums.length; i++) {

        if (nums[i] in newObj) {
            newObj[nums[i]] += 1;
            if (newObj[nums[i]] > highestCount){
                highestCount = newObj[nums[i]];
            }
        }
        else {
            newObj[nums[i]] = 1;
            if (newObj[nums[i]] > highestCount){
                highestCount = newObj[nums[i]];
            }
        }
    }

    for(let i in newObj){
        if(newObj[i] == highestCount){
            newArr.push(i);
        }
    }
    
    

    // console.log(newObj);
    return newArr;
}


// // should return [0]
// console.log(mostFrequent([0, 0, 0, 2, 2, 3]));

// // // should return [0,1,2,3,4,5]
// console.log(mostFrequent([0,1,2,3,4,5]));

// // // should return [5,2]
// console.log(mostFrequent([5,8,2,4,0,15,16,90,5,1,5,23,42,0,6,2,8,2,5,2]));

/*
* Returns the k most frequently occurring numbers from the given unordered
* nums array. Order in the return array should be highest frequecy first, 
* ordered to lowest frequency. If two or more numbers match frequency, the
* order they appear in the array does not matter.
*/

const kMostFrequent = (nums, k) => {

    let newObj = {};
    let highestCount = 0;
    let newArr = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in newObj) {
            newObj[nums[i]] += 1;
            if (newObj[nums[i]] > highestCount){
                highestCount = newObj[nums[i]];
            }
        }
        else {
            newObj[nums[i]] = 1;
            if (newObj[nums[i]] > highestCount){
                highestCount = newObj[nums[i]];
            }
        }
    }

    for(const [key, value] of Object.entries(newObj)){
        if(k != newArr.length){
            if(value == highestCount){
                newArr.push(key);
                highestCount--;
            }

        }
        else{
            break;
        }

        // console.log("ky " + key);
        // console.log("valuee " + value);
        
    }
    return newArr; //===========================NOT SOLVED YET=============================================
}

const nums1 = [1, 1, 1, 2, 2, 3];
const k1 = 2;
console.log(kMostFrequent(nums1,k1));
// const expected1 = [1, 2];
// Explanation: return the two most frequent elements, 1 and 2 are the two most frequent elements

const nums2 = [0, 0, 0, 2, 2, 3];
const k2 = 1;
console.log(kMostFrequent(nums2,k2));
// const expected2 = [0];
// Explanation: k being 1 means return the single most frequent element

const nums3 = [1, 1, 2, 2, 3, 3];
const k3 = 3;
console.log(kMostFrequent(nums3,k3));
// const expected3 = [1, 2, 3];

const nums4 = [5,8,2,4,0,15,16,90,5,1,5,23,42,0,6,2,8,2,5];
const k4 = 4;
console.log(kMostFrequent(nums4,k4));
// const expected3 = [5, 2, 0];