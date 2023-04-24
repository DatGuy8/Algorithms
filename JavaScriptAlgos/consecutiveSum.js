/* 
    You are given a list of integers. Find all the consecutive sets of 
    integers that adds up to the sum passed in as one of the inputs.
*/
const findConsecutiveSums = (nums, targetSum) => {
    let newArr = []
    
    for(let i = 0; i < nums.length; i++){
        let tempArr = [];
        let sum = 0;
        let index = i;
        // console.log(i);
        while(sum < targetSum){
            
            sum += nums[index];
            tempArr.push(nums[index]);
            if(sum == targetSum){
                // console.log('target reached');
                newArr.push(tempArr);
            }
            index++
        }


    }
    return newArr;
    
}

const nums1 = [2, 5, 3, 6, 7, 23, 12];
const sum1 = 16;
console.log(findConsecutiveSums(nums1,sum1));
// const expected1 = [
//   [2, 5, 3, 6],
//   [3, 6, 7],
// ];

const nums2 = [];
const sum2 = 5;
console.log(findConsecutiveSums(nums2,sum2));
// const expected2 = [];

const nums3 = [10, 15, 20, 35, 30];
const sum3 = 5;
console.log(findConsecutiveSums(nums3,sum3));
// const expected3 = [];

// Bonus:
// const expected4 = [
    //   [2, 5, 3, 6],
    //   [3, 6, 7],
    //   [3, 6, 7, 0],
    //   [3, 6, 7, 0, 0],
    // ];
    
  //============================= Soluition Alex  group ================================  
    const findConsecutiveSums1 = (nums, targetSum) => {
        let nArr = []
        // keeping track of us within the array
        for(let i = 0; i < nums.length ; i++){
            // want to reset the sum and currentIndex after moving to next index
            let sum = 0
            let currentIndex = i 
            if(nums[i] < targetSum){
                while( sum <= targetSum && currentIndex < nums.length ){
                    // 
                    sum += nums[currentIndex]
                    // step through the array with currentIndex
                    currentIndex++
                    if(sum === targetSum){
                        nArr.push(
                            nums.slice(i, currentIndex)
                            )
                        }
                    }
                }
            }
            return nArr
            // check element to make sure it's less than the target
        }


        const nums4 = [2, 5, 3, 6, 7, 0, 0, 23, 12];
        const sum4 = 16;
        console.log(findConsecutiveSums1(nums4,sum4));