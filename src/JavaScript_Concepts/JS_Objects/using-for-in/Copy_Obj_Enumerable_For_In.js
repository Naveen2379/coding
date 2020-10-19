const employee = {
    name: 'Ravi',
    age: 27,
    address: {
        city: 'Siddipet',
        country: 'India'
    }
}

Object.defineProperty(employee, 'salary', {
    value: 25000,
    enumerable: false,                      //non enumerable, so it is not copied to destination object(newEmployee)
    writable: false
})

const newEmployee = {};
for (const property in employee) {
    newEmployee[property] = employee[property];
}

console.log(newEmployee);               /*
                                            {
                                              name: 'Ravi',
                                              age: 27,
                                              address: { city: 'Siddipet', country: 'India' }
                                            }
                                        */
