/** leet code 739 
 * Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

Example 1:

Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]
Example 2:

Input: temperatures = [30,40,50,60]
Output: [1,1,1,0]
Example 3:

Input: temperatures = [30,60,90]
Output: [1,1,0]
 * @param {number[]} temperatures
 * @return {number[]}
 */

const dailyTemperatures = (tempArr) => {
    // stack to keep track of position / position is kept in and we run a for loop to find a higher number... 
    //when we do we substract that position to the current position
    let stack = [];

    // creates an array of the same length as temps but with 0 filled in
    let result = new Array(tempArr.length).fill(0);


    //loops through tempArr
    for(let i = 0; i < tempArr.length; i++){
        
        
        // checking the top of the stack
        while(stack.length && tempArr[i] > tempArr[stack[stack.length-1]]){
            // when the temp gets higher than whats in the stack
            
            // remove that number from that stack but save that position on the tempArr.
            let temp = stack.pop();
            
            // change the number in the results array but subtracting the current location to that location of that lower temp.
            result[temp] = i - temp;
            
        }

        // first one is empty stack so add it
        // adds to stack / so keeps track of a number we havent found a number thats greater yet
        stack.push(i);
    }


    // returns the results array, no higher number to the right stays 0.
    return result;
};

console.log(dailyTemperatures([73,74,75,71,69,72,76,73]));
