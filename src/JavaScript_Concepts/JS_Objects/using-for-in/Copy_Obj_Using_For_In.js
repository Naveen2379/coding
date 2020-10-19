/* using for-in, complex objects are copied by reference (no deep copy) */

var employee = {
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

let newEmployee = {};
for (let prop in employee) {
    newEmployee[prop] = employee[prop];
}
console.log(newEmployee);                           /*
                                                        {
                                                          firstName: 'Naveen',
                                                          lastName: 'Kairamkonda',
                                                          age: 26,
                                                          designation: 'Front End Developer',
                                                          address: { street: 'Hanuman Street', city: 'Siddipet' },
                                                          fullName: [Function: fullName]
                                                        }
                                                        */
employee.address.city = 'Hyderabad';
console.log(employee.address.city);                 //Hyderabad
console.log(newEmployee.address.city);              //Hyderabad
/* The object properties are copied by reference. When we copy the 'address' from employee to newEmployee,
the reference of the object is copied and not the actual object. So, if you make any changes to employee, it will be available to newEmployee also,
since they are pointing to the same reference. So, in this case, a deep copy of objects is not created.
 */

employee.age = 28;
console.log(employee.age);                          //28
console.log(newEmployee.age);                       //26
console.log(newEmployee.fullName());                //Naveen Kairamkonda