function Person(name, age, native) {
    this.name = name;
    this.age =age;
    this.native = native;
}

let father = new Person('ravi',50,'hyd');
console.log(father.name);       //ravi

let mother = new Person('rani',45,'hyd');

/*
Adding Properties and Methods to Objects
Sometimes you want to add new properties (or methods) to all existing objects of a given type.
Sometimes you want to add new properties (or methods) to an object constructor
*/
//The JavaScript prototype property allows you to add new properties to object constructors:
Person.prototype.nationality = 'Indian';
console.log(mother.nationality);            //Indian
console.log(father.nationality);            //Indian

//The JavaScript prototype property also allows you to add new methods to objects constructors:
Person.prototype.nameAge = function () {
  return this.name+" "+this.age;
};

console.log(mother.nameAge());          //rani 45




