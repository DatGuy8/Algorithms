/** COMPLETED AND ACCEPTED
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let first = nums[0];
    let position = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] != first) {
            nums[position] = nums[i];
            position++;
            first = nums[i];
        }
    }
    // dont need this... accepted without this
    // for (let i = position; i < nums.length; i++) {
    //     nums[i] = "x";
    // }

    console.log(position);
    return position;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));


