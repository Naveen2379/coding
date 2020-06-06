function ArrayDiff_1(arr1, arr2) {
    /*let result = [];
    console.log(arr1.length);
    console.log(arr2.length);

    if(arr1 === [1,1]) {
        return arr1;
    }
    else {
        return 'array';
    }*/

    /*const arr2_element = arr2.map((element) => {
        console.log(element);
        return element
    });
    console.log(arr2_element);*/

    arr1.map( (elem1) => {
        arr2.map( (elem2) => {
            if(elem1 === elem2) {

            }
            else {
                return
            }
        })
    })
    console.log(res_arr);

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
ArrayDiff_1([2,3,4,5], [2,4]);

//module.exports = ArrayDiff_1;