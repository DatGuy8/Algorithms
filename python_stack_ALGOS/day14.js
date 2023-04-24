
/* 
  Given an int to represent how much change is needed
  calculate the fewest number of coins needed to create that change,
  using the standard US denominations
*/

const cents1 = 25;
const expected1 = { quarter: 1 };

const cents2 = 50;
const expected2 = { quarter: 2 };

const cents3 = 9;
const expected3 = { nickel: 1, penny: 4 };

const cents4 = 99;
const expected4 = { quarter: 3, dime: 2, penny: 4 };

/**
 * Calculates the fewest coins of the standard American denominations needed
 *    to reach the given cents amount.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} cents
 * @param {string} sick
 * @returns {Object<string, number>} - A denomination table where the keys are
 *    denomination names and the value is the amount of that denomination
 *    needed.
 */
function fewestCoinChange(cents) {
    let change = {};

    
    if(cents >= 25){
        cents -= 25;
        change['quarters'] = 1;

        while (cents >= 25){
            cents-=25;
            change['quarters']++;
        }
    
    }
    
    if (cents >= 10){
        cents -= 10;
        change['dimes'] = 1;

        while (cents >= 10 ){
            cents-=10;
            change['dimes']++;
        }
    
    }

    if (cents >= 5){
        cents-=5;
        change['nickels'] = 1;

        while (cents >= 5){
            cents-=5;
            change['nickels']++;
        }

    }

    if(cents>= 1){
        cents--;
        change['pennies'] = 1;
        
        while(cents >= 1){
            cents--;
            change['pennies']++;

        }
    }

    return change
}
// this takes too long(brute force)

/*****************************************************************************/
console.log(fewestCoinChange(cents1))
console.log(fewestCoinChange(cents2))
console.log(fewestCoinChange(cents3))
console.log(fewestCoinChange(cents4))

// faster SOLUTION
function getChange(val){
    let change = {
        'quarter' : 0,
        'dime' : 0,
        'nickel' : 0,
        'penny' : 0
    }
    
    if (val >= 25){
        change['quarter'] = Math.floor(val/25);
        val = val%25;
    }

    if (val >= 10){
        change['dime'] = Math.floor(val/10);
        val = val%10;
    }

    if (val >= 5){
        change['nickel'] = Math.floor(val/5);
        val = val%5;
    }

    if (val >= 1){
        change['penny'] = val;
    }

    for (key in change){
        console.log(key + ": " + change[key]);
    }
}
console.log(getChange(cents1))
console.log(getChange(cents1))
console.log(getChange(cents1))
console.log(getChange(cents1))