let arr1 = [1,2,3];
let arr2 = [1,2,3];

/* each array reference is allocated different memory space, so they can't be equal */
//console.log(arr1 === arr2);     //false

//console.log(arr1.toString() === arr2.toString());               //true

//console.log(JSON.stringify(arr1) === JSON.stringify(arr2));     //true

let arr3 = [1,2, [3,4]];
let arr4 = [1,2, [3,4]];
console.log(arr3.toString() === arr4.toString());               //true
console.log(JSON.stringify(arr3) === JSON.stringify(arr4));     //true

let arr5 = [1,2, [3,4, [5,6], 7], 8, 9];
let arr6 = [1,2, [3,4, [5,6], 7], 8, 9];
console.log(arr5.toString() === arr6.toString());               //true
console.log(JSON.stringify(arr5) === JSON.stringify(arr6));     //true

/* order of the elements in both arrays are not same */
let arr7 = [1,2, 10, 9, [3,4, [5,6], 7]];
let arr8 = [1,2, [3,4, [5,6], 7], 9, 10];
console.log(arr7.toString() === arr8.toString());               //false
console.log(JSON.stringify(arr7) === JSON.stringify(arr8));     //false
