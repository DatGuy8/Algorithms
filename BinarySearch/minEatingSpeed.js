/** 875
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 * Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

Return the minimum integer k such that she can eat all the bananas within h hours.

Example 1:

Input: piles = [3,6,7,11], h = 8
Output: 4
Example 2:

Input: piles = [30,11,23,4,20], h = 5
Output: 30
Example 3:

Input: piles = [30,11,23,4,20], h = 6
Output: 23
 */

var minEatingSpeed = function (piles, h) {
    // min would the slowest speed can eat, which is one
    // max is the fast speed which is the highest pile number 
    let min = 1;
    let max = Math.max(...piles); // highest number in piles since piles.length will be longer than hours

    // then we do a binary search
    while (min <= max) {
        
        // we get the middle index
        // hoursSpent is the total time spent eating the bananas 
        let mid = Math.floor((min + max) / 2); // mid is the current eating speed
        let hoursSpent = 0;

        // so loop through all piles and divide by eating speed/ using ceil because you round up since you cant move on to next pile if you eat faster
        for (const pile of piles) {
            hoursSpent += Math.ceil(pile / mid);   // adds to the time
        }

        // then if the current eating speed time is less than or equal to the target hours spent
        if(hoursSpent <= h){
            max = mid -1;      // move the right/max to the middle
        }else{
            min = mid + 1;       // or move left/min to the middle (binary)
        }
    }
    // then return left/min because its the smallest number in the boundries.
    return min;
};
// check editoral solution for good explaination

console.log(minEatingSpeed([30, 11, 23, 4, 20], 6));
