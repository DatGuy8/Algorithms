//Intersect two arrays to create an unsorted multiset
//return the new array of all the values that both arrays
//have in common

//[6,7,2,7,6,2], [2,7,2,1,2] returns [7,2,2]

const intersectUnsorted = (arrLeft, arrRight) => {
    let newArr = [];
    let newObj = {};
    for (let i = 0; i < arrLeft.length; i++) {

        if (arrLeft[i] in newObj) {
            newObj[arrLeft[i]] += 1;
        }
        else {
            newObj[arrLeft[i]] = 1;
        }
    }

    for (let i = 0; i < arrRight.length; i++) {
        if (arrRight[i] in newObj && newObj[arrRight[i]] > 0) {
            newArr.push(arrRight[i]);
            newObj[arrRight[i]]--;
        }
    }
    return newArr;

}

// console.log(intersectUnsorted([6,7,2,7,6,2], [2,7,2,1,2]));
// console.log(intersectUnsorted([1,2,2,2,7],[2,2,6,6,7]));
// console.log(intersectUnsorted([1,5,9],[2,6,10]));

//return a new unsorted union multiset of two arrays
//essentially same as yesterday but your input is unsorted
//don't just sort the arrays, then do a union!

//[2,7,2,1,2], [6,7,2,7,6,2] returns [7,2,7,2,2,1,6,6]
//(or a different combination of the same numbers, since it's unsorted)

const union = (leftArr, rightArr) => {
    let newArr = [];

    for (let i = 0; i < leftArr.length; i++) {
        for (let j = 0; j < rightArr.length; j++) {

            if (leftArr[i] === rightArr[j]) {
                newArr.push(leftArr[i]);
                rightArr.splice(j, 1);
                leftArr.splice(i, 1);
                j--;
                i--;
            }
        }
    }
    // console.log("new Array",newArr);
    // console.log("left array",leftArr);
    // console.log("right array",rightArr);

    return [...leftArr, ...rightArr,...newArr];
}

console.log(union([2, 7, 2, 1, 2], [6, 7, 2, 7, 6, 2])); //=================[1, 2, 6, 7, 6, 2, 7, 2]
console.log(union([2, 1, 10, 7, 9], [3, 10, 2, 7, 9, 5, 2])); // ===========1 , 3, 5, 2, 2, 10, 7 ,9 
console.log(union([2, 2, 7, 1, 2], [2, 2, 6, 7, 6]));// ====================2, 1, 6, 6,  2, 7 ,2