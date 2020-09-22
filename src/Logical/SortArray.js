let arr =[1, 4, 8, 2, 1, 6, 3, 2, 5, 7, 3, 6];

for (let i=0; i<arr.length;i++) {
    for(let j=i+1;j<arr.length;j++) {
        let temp = 0;
        if(arr[i] > arr[j] ) {
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}
