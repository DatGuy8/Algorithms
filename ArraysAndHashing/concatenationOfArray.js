/**
 * @param {number[]} nums
 * @return {number[]}
 * Input: nums = [1,2,1]
    Output: [1,2,1,1,2,1]
    Explanation: The array ans is formed as follows:
- ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
- ans = [1,2,1,1,2,1]
 */
var getConcatenation = function (nums) {
    const results = []

    for (let i = 0; i < nums.length; i++) {
        results[i] = nums[i];
        results[i + nums.length] = nums[i];
    }

    return results
};




console.log(getConcatenation([1, 2, 5]));