const arr=[1,2,3];
arr[0]=0;
arr[3] = 5;
//console.log(arr);       //[ 0, 2, 3, 5 ]

const obj = {a: 10, b: 20};
obj.c=30;
console.log(obj);           //{ a: 10, b: 20, c: 30 }
obj.a=50;
console.log(obj);           //{ a: 50, b: 20, c: 30 }


const str1 = 'Naveen';
str = 'Ravi';
//console.log(str);       //TypeError: Assignment to constant variable

let str2 = 'ravi';
str2 = 'Raju';
console.log(str2);      //Raju

let arr1 = [1,2,3];
let arr2 = [1,2,3];
if(arr1===arr2) {
    console.log(true);
}
else {
    console.log('arrays are not comparable');
}
//o/p: arrays are not comparable

let obj1 = {id:1, name:'naveen'};
let obj2 = {id:1, name:'naveen'};
if(obj1===obj2) {
    console.log(true);
}
else {
    console.log('objects are not comparable');
}
//o/p: objects are not comparable

let obj3 = {
    id: 1, name: 'Ravi'
};
const newObj = Object.assign({}, obj3, {
    nation: 'India', city: 'Hyd'
});
console.log(obj3);                  //{ id: 1, name: 'Ravi' }
console.log(newObj);                //{ id: 1, name: 'Ravi', nation: 'India', city: 'Hyd' }
