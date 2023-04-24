//===================Unfinished================================

const quickSort = (arr) => {
    let originalPivot = Math.floor(arr.length / 2);
    let pivotNum = Math.floor(arr.length / 2);
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
    // while (leftIndex != rightIndex) {

    while (leftIndex < rightIndex) {

        while (leftIndex != rightIndex) {
            while (arr[leftIndex] < arr[pivotNum]) {
                leftIndex++;
                // console.log("Left Index is",leftIndex);
            }

            while (arr[rightIndex] > arr[pivotNum]) {
                rightIndex--;
                // console.log("Right Index is",rightIndex);
            }
            if (rightIndex == leftIndex) {
                break;
            }

            // console.log(arr);
            let temp = arr[leftIndex];
            arr[leftIndex] = arr[rightIndex];
            arr[rightIndex] = temp;
            console.log("Switched values at arr[" + leftIndex + "] and arr[" + rightIndex + "]");
            console.log(arr);
        }
        pivotNum = Math.floor(leftIndex / 2);
        rightIndex = leftIndex;
        console.log("reached here", rightIndex);
        leftIndex = 0;

    }
    // console.log(leftIndex);
    // rightIndex = arr.length - 1;
    // leftIndex = originalPivot;
    // // pivotNum = rightIndex - leftIndex ===================================Stuck around here=========================================



    //     // console.log("reached here", leftIndex);
    //     pivotNum = Math.floor(leftIndex / 2);
    //     rightIndex = Math.floor(leftIndex * 2);
    //     leftIndex = rightIndex;
    // }

    return arr;
}

const quickSort1 = arr => {
    let pivot = Math.floor(arr.length / 2);
    while (pivot > 0 && pivot < arr.length - 1){
        


    }
}

console.log(quickSort([41, 4, 2, 10, 6, 3, 8, 20, 9, 15, 12, 7, 30]));
console.log(quickSort1([41, 4, 2, 10, 6, 3, 8, 20, 9, 15, 12, 7, 30]));