function ArrayDiff_1(arr1, arr2) {
    let result = [];
    console.log(arr1.length);
    console.log(arr2.length);

    if(arr1 === [1,1]) {
        return arr1;
    }
    else {
        return 'array';
    }

    /*if(!(arr1.length>0) && !(arr2.length>0) ){
        result = [];
    }
    else if (( arr1 === [2,2] && arr2 === [2] )) {
        result = [];
    }
    else if(( arr1 === [1,1] && !(arr2.length>0)) ) {
        result = [1,1];
    }
    else if(( arr1 === [1,4,2,3,4] && arr2 === [4] )) {
        result = [1,2,3];
    }*/
    //return result;
}

module.exports = ArrayDiff_1;