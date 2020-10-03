function greaterNums(arr1, arr2) {
    let final_arr = [];
    for(let i=0;i<arr1.length;i++) {
        for(let j= arr2.indexOf(arr1[i]);j<arr2.length;j++) {
            if(arr2[j] > arr1[i]) {
                final_arr.push(arr2[j]);
                break;
            }
        }
        if(final_arr.length === i) {
            final_arr.push(-1);
        }
    }
    return final_arr;
}
console.log(greaterNums([4,1,2], [1,3,4,2]));           ////[-1, 3, -1]
console.log(greaterNums([5,2,6,1,3], [6,5,1,4,7,3,2])); //[7, -1, 7, 4, -1]
