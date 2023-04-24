


// const insertionSort = (array) => {
//     for(let wrongIndex = 1; wrongIndex < array.length; i++){

//     }
//     let newIndex = wrongIndex - 1;

//     console.log(wrongIndex);
//     console.log(newIndex);


//     for (let i = 0; i < array.length; i++) {
//         // console.log(i);
//     }


//     return array;
// }

// const arr1 = [6, 4, 5, 2, 8, 14, 1, 3];
// console.log(insertionSort(arr1));




//on first loop, searches for lowest value
//like bubble sort, but a little better.
//when finished, swaps lowest value for value at 0 index
//on second loop, searches for second lowest value, then
//swaps with value at 1 index
//continue this pattern until whole array is sorted
const selectionSort = (arr) => {
    let index = 0;
    let lowestIndex = index;

    while(index < arr.length -1){

        for (let i = index; i < arr.length; i++) {
    
            if (arr[lowestIndex] > arr[i]) {
                lowestIndex = i;
                console.log("changed lowestIndex to " + lowestIndex);
            }
        }

        let temp = arr[index];
        arr[index] = arr[lowestIndex];
        arr[lowestIndex] = temp;
    
        index++;
        
        console.log(arr);
        console.log(index);
    }
        


    return arr;
}

console.log(selectionSort([5, 4, 2, 6, 8, 14, 1, 3, 2, 2,6,1,6,-4]));
