/* 
Recursive Sigma
Input: integer
Output: sum of integers from 1 to Input integer
*/

const num1 = 5; 
const expected1 = 15;
// Explanation: (1+2+3+4+5)

const num2 = 2.5;
const expected2 = 3;
// Explanation: (1+2)

const num3 = -1;
const expected3 = 0;

// /**
//  * Recursively sum the given int and every previous positive int.
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param {number} num
//  * @returns {number}
//  */
function recursiveSigma(num, counter=0){

    num = Math.floor(num)
    if (num <= 0){
        console.log(counter);
        return counter;
    }
    counter = counter + num;
    num--;
    
    return recursiveSigma(num, counter)
}

console.log(recursiveSigma(num1))




// function recursiveSigma(num, sum=0) 
// {
//     num = Math.floor(num);
//     if (num <= 0)
//     {
//         console.log(sum);
//         return;
//     }
//     sum = sum + num;
//     num--;
//     return recursiveSigma(num, sum);
// }





/* 
  Recursively sum an arr of ints
*/

const nums1 = [1, 2, 3];
const expected1 = 6;

const nums2 = [1];
const expected2 = 1;

const nums3 = [];
const expected3 = 0;

// /**
//  * Add params if needed for recursion
//  * Recursively sums the given array.
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param {Array<number>} nums
//  * @returns {number} The sum of the given nums.
//  */
// function sumArr(nums) {}

// /*****************************************************************************/



function sumArr(nums, sum=0) 
{
    if(nums.length == 0)
    {
        console.log(sum);
        return sum;
    }
    sum = sum + nums.pop()
    return sumArr(nums,sum);
}


function sumArr2(nums, sum=0,counter=0)
{
    if(counter == nums.length)
    {
        console.log(sum);
        return sum;
    }
    sum = sum + nums[counter]
    counter ++
    return sumArr2(nums, sum, counter)
}
function sumArr(nums, arrIndex){
    if (nums.length > 0){

        sum = nums[arrIndex];

        if (arrIndex + 1 < nums.length){
            sum += sumArr(nums, arrIndex+1);
        }
        
        return sum;
    }

    else{
        return 0;
    }
}

function sumArr2(nums){
    if (nums.length > 0){
        sum = nums[nums.length - 1];
        nums.pop();
        sum += sumArr2(nums);
    }

    else{
        return 0;
    }

    return sum;
}