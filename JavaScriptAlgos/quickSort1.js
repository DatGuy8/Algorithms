//quickSort works here(COMPLETED)

//changes array in place, without needing a sliced array
//returns the index of the pivot
// const partition2 = (arr, left, right) => {
// }

//changes array in place, but needs a sliced array
//returns the index of the pivot
const partition = (arr) => {
    // console.log(arr);
    let pivot = arr[0];
    let pointer = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            pointer++;
            
            let temp = arr[i];
            arr[i] = arr[pointer];
            arr[pointer] = temp;
        }
    }
    let temp = arr[0];
    arr[0] = arr[pointer];
    arr[pointer] = temp;
    // console.log(arr);
    return pointer;

}

console.log(partition([6,4,5,2,8,14,1,3]));

//time for recursion again!!
//partition your array, then quickSort the left half
//and the right half.
//Each half should be partitioned and quickSorted recursively.
const quickSort = (arr) => {
    if(arr.length < 2){
        return arr;
    }
    
    let pivot = partition(arr);
    // console.log(arr);


    let left = arr.slice(0,pivot);
    let right = arr.slice(pivot + 1, arr.length);

    
    // console.log(left);
    return [...quickSort(left), arr[pivot], ...quickSort(right)];

    
}

console.log(quickSort([7,45,2,67,100,3,2,1,6,4,5,2,8,14,1,3, 82, 90,-1,0]));