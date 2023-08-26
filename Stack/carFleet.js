/** leet code 853
 * 
 * There are n cars going to the same destination along a one-lane road. The destination is target miles away.
You are given two integer array position and speed, both of length n, where position[i] is the position of the ith car and speed[i] is the speed of the ith car (in miles per hour).
A car can never pass another car ahead of it, but it can catch up to it and drive bumper to bumper at the same speed. The faster car will slow down to match the slower car's speed. The distance between these two cars is ignored (i.e., they are assumed to have the same position).
A car fleet is some non-empty set of cars driving at the same position and same speed. Note that a single car is also a car fleet.
If a car catches up to a car fleet right at the destination point, it will still be considered as one car fleet.
Return the number of car fleets that will arrive at the destination.

Example 1:

Input: target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]
Output: 3
Explanation:
The cars starting at 10 (speed 2) and 8 (speed 4) become a fleet, meeting each other at 12.
The car starting at 0 does not catch up to any other car, so it is a fleet by itself.
The cars starting at 5 (speed 1) and 3 (speed 3) become a fleet, meeting each other at 6. The fleet moves at speed 1 until it reaches target.
Note that no other cars meet these fleets before the destination, so the answer is 3.
Example 2:

Input: target = 10, position = [3], speed = [3]
Output: 1
Explanation: There is only one car, hence there is only one fleet.
Example 3:

Input: target = 100, position = [0,2,4], speed = [4,2,1]
Output: 1
Explanation:
The cars starting at 0 (speed 4) and 2 (speed 2) become a fleet, meeting each other at 4. The fleet moves at speed 2.
Then, the fleet (speed 2) and the car starting at 4 (speed 1) become one fleet, meeting each other at 6. The fleet moves at speed 1 until it reaches target.

 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 


so how i understand the question is that the position is how close it is to target(didnt get that before)

*/
const carFleet = (target, position, speed) => {
    

    let map = new Map();
    // what we are returning
    let fleet = 0;
    let lastTime = -1;

    // store car position and speed in a map
    for (let i = 0; i < position.length; i++) {
        map.set(position[i], speed[i]);
    }

    // then sort the highest position because it will be closest to the target number.
    const sortPos = [...map.keys()].sort((a,b)=> b - a);
    console.log(sortPos);

    for( let i = 0; i < position.length; i++){
        console.log(i,sortPos[i]);
        // start from highest number so its closest to target distance.
        // so (target - sortPos[i]) is the distance it has left 
        // so map.get(sortPos[i]) gets the speed and we divide the two to have the time it takes to get there
        let time = (target - sortPos[i] / map.get(sortPos[i]));
        
        // first time adds to the fleet, slower or equal times mean they meet with each other and combine
        // but if the time is greater that means it creates another fleet
        if(time > lastTime){
            fleet++;
            lastTime = time;
        }
    }
    
    return fleet;


};


const target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3];

console.log(carFleet(target,position,speed));