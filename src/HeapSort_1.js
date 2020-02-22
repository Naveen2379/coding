function heapify(arr, n, i) {
    let largest= i;
    let l=2*i+1;
    let r=2*i+2;
    if(l<n && arr[l]>arr[largest]) {
        //console.log(l);
        largest = l;
    }
    if(r<n && arr[r] > arr[largest]) {
        //console.log(r);
        largest = r;
    }
    if(largest != i) {
        //console.log(arr[i] + "  " + arr[largest]);
        swap(arr[largest],arr[i]);
        function swap() {
            let tempValue = arr[i];
            arr[i] = arr[largest];
            arr[largest] = tempValue;
            //console.log(arr[i] + "  " + arr[largest]);
        }
        heapify(arr, n, largest);
    }
    return arr;
}

//const arr = [1,12,9,5,6,10];
const arr = [4,10,3,5,1];
const n = arr.length;
for(let i=n/2-1;i>=0;i--) {
    console.log(heapify(arr, 6, i));
}

/*for( let i=n-1;i>=0;i--) {
    function swap() {
        let tempValue = arr[i];
        arr[i] = arr[largest];
        arr[largest] = tempValue;
        //console.log(arr[i] + "  " + arr[largest]);
    }
    swap(arr[0],arr[i]);
    console.log(heapify(arr, i, 0));
}*/


