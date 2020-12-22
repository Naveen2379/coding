const original_arr = [1,2,3,4,5];

/* clone_arr is not the copy of original_arr, but rather the original_arr itself */
/*
const clone_arr = original_arr;
console.log(clone_arr1);            //[1,2,3,4,5]
clone_arr[0] = 10;
console.log(clone_arr);            //[ 10, 2, 3, 4, 5 ]
console.log(original_arr);          //[ 10, 2, 3, 4, 5 ]
*/

/* below methods do a shallow copy, not deep copy */

/* using slice, spread, from methods */
/* const clone_arr = original_arr.slice(); */
/* const clone_arr = [...original_arr]; */
/*const clone_arr = Array.from(original_arr);*/

/*
console.log(clone_arr);             //[1,2,3,4,5]
clone_arr[0] = 10;
console.log(clone_arr);             //[ 10, 2, 3, 4, 5 ]
console.log(original_arr);          //[ 1, 2, 3, 4, 5 ]
*/



/* checking for deep clone */
const original_arr1 = [1,2,[3, 30],[4, 40],5];

/* using from, slice, spread */
/*const clone_arr1 = Array.from(original_arr1);*/
/*const clone_arr1 = [...original_arr1];*/
const clone_arr1 = original_arr1.slice();

clone_arr1[0] = 10;
console.log(clone_arr1);            //[ 10, 2, [ 3, 30 ], [ 4, 40 ], 5 ]
console.log(original_arr1);         //[ 1, 2, [ 3, 30 ], [ 4, 40 ], 5 ]
clone_arr1[2][1] = 300;
original_arr1[3][1] = 400;
console.log(clone_arr1);             //[ 10, 2, [ 3, 300 ], [ 4, 400 ], 5 ]
console.log(original_arr1);             //[ 1, 2, [ 3, 300 ], [ 4, 400 ], 5 ]








