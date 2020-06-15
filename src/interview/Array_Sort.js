function Array_Sort(arr) {
    //console.log(arr);
    let res_arr = [0];
    if (arr.length > 0) {
        for (let index = 0; index < arr.length; index++) {
            for (let inInd = index + 1; inInd < arr.length; inInd++) {
                let temp;
                if (arr[index] > arr[inInd]) {
                    temp = arr[inInd];
                    arr[inInd] = arr[index];
                    arr[index] = temp;
                }
            }
        }
    }
    return arr;
    //sort method
    /*let res_arr = arr.sort();
    return res_arr;*/
}

//Array_Sort([2,3,5,4,7,9,8,4]);
module.exports = Array_Sort;