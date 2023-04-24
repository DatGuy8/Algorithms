//Intersect Sorted Arrays
//Given two sorted arrays, return a new array containing all the numbers they have in common

//Ex: given [2,4,7,9,10] and [2,3,5,7,9,10], return [2,7,9,10]
//Ex: given [1,1,4,5,8] and [1,1,1,5,6,8] return [1,1,5,8]
//Ex: given [1,3,5,7,9] and [2,4,6,8,10] return []

const intersect = (arrLeft, arrRight) => {
    
    let newArr = [];
    let newObj = {};
    for(let i = 0; i < arrLeft.length; i++){
        
        if(arrLeft[i] in newObj){
            newObj[arrLeft[i]] += 1;
        }
        else{
            newObj[arrLeft[i]] = 1;
        }
    }

    for(let i = 0; i < arrRight.length; i++){
        if(arrRight[i] in newObj && newObj[arrRight[i]] > 0){
            newArr.push(arrRight[i]);
            newObj[arrRight[i]]--;
        }
    }
    return newArr;
}

console.log(intersect([2,4,7,9,10],[2,3,5,7,9,10]));
console.log(intersect([1,1,4,5,8],[1,1,1,5,6,8]));
console.log(intersect([1,3,5,7,9],[2,4,6,8,10]));
console.log(intersect([-9, 1, 3, 4, 4, 4, 4, 4, 4, 5, 7], [-5, 0, 1, 1, 1, 1, 1, 2, 4, 4, 6, 7]));

//ALEX DECICCO SOLUTION
//great solution
const intersect1 = (arrLeft, arrRight) => {
    let i = 0;
    let j = 0;
    let outArr = [];

    while (i < arrLeft.length && j < arrRight.length){
        if (arrLeft[i] < arrRight[j]){
            i++;
        }
        if (arrRight[j] < arrLeft[i]){
            j++;
        }
        if (arrLeft[i] === arrRight[j]){
            outArr.push(arrLeft[i]);
            i++;
            j++;
        }
    }

    return outArr;
}

console.log(intersect1([2,4,7,9,10],[2,3,5,7,9,10]));
console.log(intersect1([1,1,4,5,8],[1,1,1,5,6,8]));
console.log(intersect1([1,3,5,7,9],[2,4,6,8,10]));
console.log(intersect1([-9, 1, 3, 4, 4, 4, 4, 4, 4, 5, 7], [-5, 0, 1, 1, 1, 1, 1, 2, 4, 4, 6, 7]));