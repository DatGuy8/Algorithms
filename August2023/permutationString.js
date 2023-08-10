/**
 * https://leetcode.com/problems/permutation-in-string/  WORKS
 * Time O(N + (M - N)) | Space O(1)
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

const checkInclustion = (str1, str2) => {
    
    // if str2 longer it will be false
    if(str1.length > str2.length){
        return false
    }
    let map = {};

    // creates map for str1
    for(let i = 0; i < str1.length; i++){
        if(!map[str1[i]]){
            map[str1[i]] = 1;
        }
        else{
            map[str1[i]]++;
        }
    }
    console.log(map);
    let left = 0;
    let right = 0;
    let requiredLength = str1.length;

    while(right < str2.length){
        if(map[str2[right]] > 0){
            requiredLength--;
        }
        
        map[str2[right]]--;
        right++;
        console.log(right);
        console.log("left", left);
        if (requiredLength === 0){
            return true;
        }
        

        if(right - left === str1.length){
            if (map[str2[left]] >= 0){
                requiredLength++;
            }
            map[str2[left]]++;
            left++;
        }

    }
    
    return false;

    
}

const s1 = "abcdxabcde";
const s2 = "abcdeabcdx";




console.log(checkInclustion(s1,s2));