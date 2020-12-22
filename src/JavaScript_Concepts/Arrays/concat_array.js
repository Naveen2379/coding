/* better way to concat arrays */


let arr1 = [0,1,2];
let arr2 = [3,4,5];

/* concat method    -used to merge two or more arrays and this method doesn't change the existing arrays, but instead returns a new array */
let arr3 = arr1.concat(arr2);
console.log(arr3);          //[ 0, 1, 2, 3, 4, 5 ]

/* with spread syntax*/
let arr4 = [...arr1, ...arr2];
console.log(arr4);          //[ 0, 1, 2, 3, 4, 5 ]


