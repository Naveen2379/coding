const obj1 = { name: "Joseph" }
const obj2 = { name: "Joseph" }
const obj3 = obj1;

console.log(obj1 == obj2);      //false
console.log(obj1 === obj2);     //false
console.log(obj1 == obj3);      //true

