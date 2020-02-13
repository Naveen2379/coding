function insertionSort(array) {
    for(let outerIndex=1; outerIndex<array.length;outerIndex++) {
        let key = array[outerIndex];
        console.log('outerIndex: '+outerIndex);
        for(let innerIndex=outerIndex-1;innerIndex>=0;innerIndex--) {
            console.log('innnerIndex: '+innerIndex);
            if( array[innerIndex] > key) {
                let tempValue = key;
                array[outerIndex] = array[innerIndex];
                array[innerIndex] = key;
            }
            key = array[innerIndex];
            console.log(array);
        }
    }
    return array;
}
console.log(insertionSort([5,2,4,6,1,3]));