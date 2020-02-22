function minNumber(arr) {
    for(let outerIndex=0;outerIndex<arr.length-1;outerIndex++) {
        //console.log("outerIndex: "+ outerIndex);
        for(let innerIndex=outerIndex+1;innerIndex<arr.length;innerIndex++) {
            //console.log(arr + '  innerIndex: ' + innerIndex);
            if(arr[outerIndex] > arr[innerIndex]) {
                const tempValue = arr[outerIndex];
                arr[outerIndex] = arr[innerIndex];
                arr[innerIndex] = tempValue;
                console.log(arr);
            }
        }
    }
    return arr;
}

//const arr = [5,9,4,2,10,15,4,4,7,12,8,16,-1,-2];
const arr = [5,1,9,-1,3];
console.log(minNumber(arr));