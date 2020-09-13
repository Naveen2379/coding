function greaterNums(arr1, arr2) {
    let arr = arr1.every( (elem) => {
        return arr2.includes(elem);
    })

    let final_arr = [];
    if(arr) {
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
    }
    return final_arr;
}
console.log(greaterNums([4,1,2], [1,3,4,2]));

