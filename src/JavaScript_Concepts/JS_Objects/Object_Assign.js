const obj = {
    name: 'Naveen'
}

//making obj immutable, copying object working on new obj
const obj2 = Object.assign({}, obj, {country: 'India'});
obj2.name = 'Rajinikar';

console.log(obj);               //{ name: 'Naveen' }
console.log(obj2);              //{ name: 'Rajinikar', country: 'India' }

/*
const obj = {
    name: 'Naveen'
}
const obj2 = Object.assign(obj, {country: 'India'});

obj2.name = 'Rajinikar';
console.log(obj);           //{ name: 'Rajinikar', country: 'India' }
console.log(obj2);          //{ name: 'Rajinikar', country: 'India' }
*/

/*
const employee = {
    firstName: 'Naveen',
    lastName: 'Kairamkonda',
    age: 26,
    designation: 'Front End Developer',
    address: {
        street: 'Hanuman Street',
        city: 'Siddipet'
    },
    fullName() {
        return this.firstName +' '+this.lastName;
    }
}

const newEmployee = Object.assign({}, employee);
console.log(newEmployee);                                   //employee object
employee.firstName = 'Naveen Kumar';
console.log(employee.firstName);                            //Naveen Kumar
console.log(newEmployee.firstName);                         //Naveen
console.log(newEmployee.fullName());                        //Naveen Kairamkonda

employee.address.street = 'Shiva Temple';
console.log(employee.address.street);                       //Shiva Temple
console.log(newEmployee.address.street);                    //Shiva Temple
*/
