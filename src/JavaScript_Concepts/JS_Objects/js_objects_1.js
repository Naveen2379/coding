function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

let person3 = new Person('ravi', 'kumar');
person3.fullName = function() {
    return this.firstName+' '+this.lastName;
}
console.log(person3.fullName());