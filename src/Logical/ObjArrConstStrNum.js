const obj1 = { a:1, b:2, c:3};
obj1.a = 10;
console.log(obj1);          //{ a: 10, b: 2, c: 5, d: 6 }

const arr = [4,2,4,8];
arr[2] = 6;
console.log(arr);           //[ 4, 2, 6, 8 ]

const s = 'Naveen';
const n = 10;
//s='Ravi';       //assign to constant or already read-only variable
//n=20;           //assign to constant or already read-only variable