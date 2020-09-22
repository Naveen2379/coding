let arr = [1, 8, 5, 2, 9, 4, 8, 6, 9, 3, 8];        //if arr length is ODD      -element at index 5
let arr1 = [1,2,4,2,4,3];                           // if arr length is EVEN    -element at index 2

//console.log(arr.pop());     // 8    removes the last element and returns the removed element
//console.log(arr);

/* using splice method*/
arr.splice(arr.length/2, 1);
console.log(arr);

/*
/!* using slice method *!/
const newArr1 = arr.slice(0, arr.length/2);
const newArr2 = arr.slice(arr.length/2+1, arr.length);
let finalArr = newArr1.concat(newArr2);
console.log(arr);
console.log(newArr1);
console.log(finalArr);
*/


