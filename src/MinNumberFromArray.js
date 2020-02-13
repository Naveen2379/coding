function minNumber(arr) {
    for(let i=0;i<arr.length;i++) {
        console.log(arr[0] + ' ' + i);
        if(arr[0] >= arr[i]) {
            arr[0] = arr[i];
        }
    }
    return arr[0];
}

const arr = [5,9,2,10,15,4,7,12,8,16,-1];
console.log(minNumber(arr));