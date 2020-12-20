function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}



let person1 = new Person('ravi', 'kumar');

person1.fullName = function() {
    return this.firstName+' '+this.lastName;
}

console.log(person1.fullName());