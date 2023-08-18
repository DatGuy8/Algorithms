/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const s1 = "anagram";
const t1 = "nagaram";

const s2 = "rat";
const t2 = "car";


var isAnagram = function (s, t) {
    // const string = s.split('');
    const obj = {};
    for (let i = 0; i < s.length; i++) {
        if (!obj[s[i]]) {
            obj[s[i]] = 1;
        }
        else {
            obj[s[i]] += 1;
        }
    }

    for (let i = 0; i < t.length; i++) {
        if (obj.hasOwnProperty(t[i]) && obj[t[i]] > 0) {
            obj[t[i]] -= 1;
        }
        else {
            return false;
        }
    }
    return true;
};



console.log(isAnagram(s1, t1));
console.log(isAnagram(s2, t2));