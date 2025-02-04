const obj1 = {
    carName: 'Volvo',
    model: 2020
}

/*
const obj2 = {...obj1};

console.log(obj2);              ////{ carName: 'Volvo', model: 2020 }       ---> object can be assigned to another object and can also be mutated
obj2.carName = 'Toyota';
console.log(obj1);              //{ carName: 'Volvo', model: 2020 }         ---> object can be mutated
console.log(obj2);              //{ carName: 'Toyota', model: 2020 }
*/

/* obj2 is the actual object(obj1) itself */
const obj2 = obj1;
console.log(obj2);          //{ carName: 'Volvo', model: 2020 }
obj2.model = 2021;
console.log(obj1);          //{ carName: 'Volvo', model: 2021 }
console.log(obj2);          //{ carName: 'Volvo', model: 2021 }