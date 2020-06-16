/*
* Constructor -blueprint to create many objects of the same type --> object type
*                   PROTOTYPE
* prototype is used to add new properties or methods to object constructors
* */

function Person(first, last, age, native) {     //in a constructor function 'this' doesn't have a value
    this.firstName = first;     //'this' is a substitute for the new object when that new object is created, here it is 'father'    ---> father.firstName
    this.lastName = last;
    this.age = age;
    this.native = native;
}

Person.prototype.nationality = 'India';
const father = new Person('ravi', 'kumar', 40, 'hyd');

console.log(father.nationality);

Person.prototype.fullName = function () {
    return this.firstName+' '+this.lastName;
}

console.log(father.fullName());