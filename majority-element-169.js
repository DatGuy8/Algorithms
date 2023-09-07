/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {

    let map = {};
    let returnNumber = nums[0];
    let highestCount = 1;

    for (i = 0; i < nums.length; i++) {
        if(!map[nums[i]]){
            map[nums[i]] = 1;
        }
        else{
            map[nums[i]]++;

            if(highestCount < map[nums[i]]){
                highestCount = map[nums[i]];
                returnNumber = nums[i];
            }

            
        }
        
    }

    return returnNumber

};