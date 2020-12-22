const original_arr1 = [1,2,[3, 30],[4, 40],5];
const original_arr2 = [0, 1, 2, [[[3, 4]]]];
/* using for-of */
const res_arr = [];
function deepCloneArray(array) {
    for( let element_arr of array) {
        if(!Array.isArray(element_arr)) {
            res_arr.push(element_arr);
        }
        else {
            deepCloneArray(element_arr);
        }
    }
    return res_arr;
}

/*
const res_array1 = deepCloneArray(original_arr1);
console.log(res_array1);             //[ 1,  2, 3, 30, 4, 40, 5 ]
*/

const res_array2 = deepCloneArray(original_arr2);
console.log(res_array2);             //[ 0, 1, 2, 3, 4 ]

/* using flat */
const flat_arr1 = original_arr1.flat();
console.log(flat_arr1);             //[ 1,  2, 3, 30, 4, 40, 5 ]
const flat_arr2 = original_arr2.flat(3);
console.log(flat_arr2);             //[ 0, 1, 2, 3, 4 ]


/* To flat single level array --> using reduce & concat --> flattening only by 1 */
const original_arr3 = [0, 1, 2, [[[3, 4]]], [5,6]];
const reduce_arr1 = original_arr1.reduce( (acc,val) => acc.concat(val), []);
console.log(reduce_arr1);               //[ 1,  2, 3, 30, 4, 40, 5 ]
const reduce_arr2 = original_arr3.reduce( (acc,val) => acc.concat(val), []);
console.log(reduce_arr2);                //[ 0, 1, 2, [ [ 3, 4 ] ], 5, 6 ]

