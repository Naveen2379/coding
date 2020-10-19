/* using for-in, complex objects are copied by reference (no deep copy) */

function Employee(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Employee.prototype.country = 'India';

Employee.prototype.fullName = function () {             //attaching methods using prototype
    return this.firstName+' '+this.lastName;
}

var userDetails = new Employee('Naveen', 'Kairamkonda');

console.log(userDetails.__proto__);                         //{ showData: [Function (anonymous)] }
console.log(userDetails.fullName());                        //Naveen Kairamkonda


const newObj = {};
for(const prop in userDetails) {
    newObj[prop] = userDetails[prop];
}
console.log(newObj);                                        /*
                                                                {
                                                                  firstName: 'Naveen',
                                                                  lastName: 'Kairamkonda',
                                                                  showData: [Function (anonymous)]
                                                                }
                                                            */
console.log(newObj.fullName());                             //Naveen Kairamkonda