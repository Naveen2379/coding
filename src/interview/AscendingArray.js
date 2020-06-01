function ascendingOrder(numArr) {
    for(let i=0;i<numArr.length;i++) {
        for(j=i+1;j<numArr.length;j++) {
            if(numArr[i]>numArr[j]) {
                temp = numArr[i];
                numArr[i] = numArr[j];
                numArr[j] = temp;
            }
        }
        console.log(numArr);
    }
    console.log(numArr);
}

let numArr = [5,4,8,1,9,2,6,3];
ascendingOrder(numArr);
