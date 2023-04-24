//combine two pre-sorted arrays into one sorted array
//return the newly combined array
//bonus challenge: combine in place into leftArr instead of a new array
const combine = (leftArr, rightArr) => {
    let i = 0;
    let j = 0;
    let newArr = [];
    
    while (i < leftArr.length && j < rightArr.length) {
        if (leftArr[i] < rightArr[j]) {
            newArr.push(leftArr[i]);
            i++;
        } else {
            newArr.push(rightArr[j]);
            j++;
        }
    }
    
    while (i < leftArr.length) {
        newArr.push(leftArr[i]);
        i++;
    }
    while (j < rightArr.length) {
        newArr.push(rightArr[j]);
        j++;
    }
    return newArr;
}



// should return [0,1,2,3,4,6,7,9,11]
console.log(combine([1, 2, 7, 9], [0, 3, 4, 6, 11]));

// should return [0,1]
console.log(combine([1], [0]));