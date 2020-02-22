function insertionSort(array) {
    console.log(array);
    for(let outerIndex=1; outerIndex<array.length;outerIndex++) {
        let key = array[outerIndex];
        console.log('outerIndex: ' + outerIndex);
        let i = outerIndex - 1;
        while (i >= 0 && array[i] > key) {
            console.log('while: '+ i);
            array[i + 1] = array[i];
            i = i-1;
        }
        console.log("i: "+ i);
        array[i+1] = key;
        console.log(array);
    }
    return array;
}
console.log(insertionSort([5,3,1]));
//console.log(insertionSort([5,2,4,6,1,3]));
//console.log(insertionSort([4,9,8,1,7,3]));