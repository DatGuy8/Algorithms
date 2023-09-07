/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
    let highest = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (highest < arr[j + 1]) {
                highest = arr[j + 1];
            }
        }
        arr[i] = highest;
        highest = 0;
    }
    arr[arr.length-1] = -1;
    return arr;
};

const arr1 = [17, 18, 5, 4, 6, 1]
// Output [18,6,6,6,1,-1]

console.log(replaceElements(arr1));