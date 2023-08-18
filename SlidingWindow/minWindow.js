

/** LEET CODE 76
 * @param {string} s
 * @param {string} t
 * @return {string}
*/
const minWindow = (s, t) => {
    let map = {};
    
    // Creates the map to check;
    for(let i = 0; i < t.length; i++){
        if(!map[t[i]]){
            map[t[i]] = 1;
        }
        else{
            map[t[i]]++;
        }
    }
    
    // sets variables for sliding window
    let left = 0;
    let right = 0;
    let returnStr = "";
    // need count of characters checking from t string
    let count = Object.keys(map).length;


    while(right < s.length){
        
        let rightPoint = s[right];
        map[rightPoint]--;
        if(map[rightPoint] == 0) count--;

        while(count == 0){

            // current window or if current window is smaller than returnStr
            if( !returnStr  || returnStr.length > right - left + 1){
                returnStr = s.slice(left, right+1);
            }

            const leftPoint = s[left];

            if(map[leftPoint] == 0) count++;

            map[leftPoint]++;

            left++;

        }
        right++

    }
    return returnStr;
};



const s1 = "ADOBECODEBANC";
const t1 = "ABC";
const expected1 = "BANC";

console.log(minWindow(s1,t1));
