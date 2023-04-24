//use recursion to break up the array into halves and combine two sorted halves




const mergeSort = (arr) => {
    if(arr.length <=1) return arr;
    let half = Math.floor(arr.length/2);
    return combine(mergeSort(arr.slice(0, half)), mergeSort(arr.slice(half, arr.length)));
}
