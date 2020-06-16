const person1 = {
    firstName: 'Naveen',
    lastName: 'Kairamkonda'
}
const person2 = {
    firstName: 'Vinod',
    lastName: 'Pothula'
}

const Person = {
    fullName: function () {
        return this.firstName+ ' '+this.lastName;
    }
}

const boundObj = Person.fullName.bind(person1);
console.log(boundObj());