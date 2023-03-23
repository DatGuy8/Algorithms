const l1 = [2, 4, 3]
const l2 = [5, 6, 4]
var addTwoNumbers = function (l1, l2) {
    let firstNum = 0;
    let secondNum = 0;
    let j = 1;
    for (let i = l1.length - 1; i >= 0; i--) {
        firstNum += l1[i] * j;
        j = j * 10;
    }
    j = 1; 
    // console.log(firstNum);
    for(let i = l2.length - 1; i>= 0; i--){
        secondNum += l2[i] * j;
        j = j * 10;
    }
    // console.log(secondNum);
    let finalNum = firstNum + secondNum;
    let myFunc = num => Number(num);
    finalNum = Array.from(String(finalNum),myFunc);
    console.log(finalNum)
    for(let i = 0; i < finalNum.length/2; i++){
        // console.log(i);
        console.log(finalNum[i])
        let temp = finalNum[i];
        finalNum[i] = finalNum[finalNum.length-1 - i];
        finalNum[finalNum.length-1 - i] = temp;
    }

    return finalNum;

};

console.log(addTwoNumbers(l1, l2));