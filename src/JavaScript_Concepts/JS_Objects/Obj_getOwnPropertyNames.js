const employee = {
    firstName: 'Rajinikar',
    lastName: 'Pathuri',
    age: 26,
    fullName() {
        return this.firstName + ' ' + this.lastName;
    }
};

Object.defineProperty(employee, 'salary', {
    value: 35000,
    enumerable: false,
    writable: false
});

console.dir(Object.getOwnPropertyNames(employee));