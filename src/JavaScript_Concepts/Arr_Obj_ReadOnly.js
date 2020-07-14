/*
* The Object.freeze() method freezes an object. A frozen object can no longer be changed; freezing an object prevents new properties from being added to it,
* existing properties from being removed, prevents changing the enumerability, configurability, or writability of existing properties,
* and prevents the values of existing properties from being changed. In addition, freezing an object also prevents its prototype from being changed.
* freeze() returns the same object that was passed in.
*
* */

let obj = {
    id: 1,
    name: 'naveen'
}

//Object.freeze(obj);
obj.country = 'India';
console.log(obj);           //{ id: 1, name: 'naveen' }     //if obj is freezed
console.log(delete obj.name);               //true
console.log(obj);                           //{ id: 1, country: 'India' }       // if obj is not freezed
obj.fun = function (a,b) {
    return a+b;
}

console.log(obj);           //{ id: 1, name: 'naveen' }     //if obj is freezed
//console.log(obj.fun(3,5));      //8, if  obj is not freezed

/*
        Array Read-OObjReadOnlynly
* let arr = [1,2,3,4,5];
arr[5]=6;
arr[0]=5;
console.log(arr);       //[ 5, 2, 3, 4, 5, 6 ]

Object.freeze(arr);
arr[1] =10;
console.log(arr);       [ 5, 2, 3, 4, 5, 6 ]
* */