//you can change properties of a const object, but cannot reassign
const obj1={a:1, b:2};
obj1.c = 3;

console.log(obj1);          //{ a: 1, b: 2, c: 3 }

const obj2 = obj1;
obj2.d = 4;
console.log(obj2);          //{ a: 1, b: 2, c: 3, d: 4 }
console.log(obj1);          //{ a: 1, b: 2, c: 3, d: 4 }

/*
//cannot reassign a const object and the same for arrays
const obj3 = {a:1, b:2, c:3};
obj3= {d:4, e:5};                   //TypeError: Assignment to constant variable.
console.log(obj3);
*/

