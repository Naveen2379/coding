const original_arr1 = [1,2,[3, 30],[4, 40],5];
const original_arr2 = [0, 1, 2, [[[3, 4]]], [5,6]];
/* using for-of */
const res_arr = [];
function deepCloneArray(array) {
    for( let element_arr of array) {
            res_arr.push(element_arr);
    }
    return res_arr;
}

/*
const res_array1 = deepCloneArray(original_arr1);
console.log(res_array1);

res_array1[2][1] = 300;                 //[ 1, 2, [ 3, 30 ], [ 4, 40 ], 5 ]
console.log(res_array1);                //[ 1, 2, [ 3, 300 ], [ 4, 40 ], 5 ]
console.log(original_arr1);             //[ 1, 2, [ 3, 300 ], [ 4, 40 ], 5 ]
*/


/*
const res_array2 = original_arr1.map( (elem_arr) => {
    if(Array.isArray(elem_arr)) return elem_arr.slice();
    return elem_arr
});
console.log(res_array2);                //[ 1, 2, [ 3, 30 ], [ 4, 40 ], 5 ]
res_array2[2][1] = 300;
console.log(res_array2);                //[ 1, 2, [ 3, 300 ], [ 4, 40 ], 5 ]
console.log(original_arr1);             //[ 1, 2, [ 3, 30 ], [ 4, 40 ], 5 ]
*/

/* 3 levels deeper */
const res_array3 = original_arr2.map( (elem_arr) => {
    if(Array.isArray(elem_arr)) return elem_arr.slice();
    return elem_arr
});
console.log(res_array3);                //[ 0, 1, 2, [ [ [Array] ] ], [ 5, 6 ] ]
res_array3[2] = 200;

original_arr2[3][0][0][1] = 400;
console.log(res_array3[3][0][0]);                //[ 3, 400]
console.log(original_arr2[3][0][0]);             //[ 3, 400 ]
console.log(res_array3);                            //[ 0, 1, 200, [ [ [Array] ] ], [ 5, 6 ] ]
console.log(original_arr2);                         //[ 0, 1, 2, [ [ [Array] ] ], [ 5, 6 ] ]




