const obj1 = {
    carName: 'Volvo',
    model: 2020
}

const obj2 = obj1;
console.log(obj2);              ////{ carName: 'Volvo', model: 2020 }       ---> object can assigned and can also be mutated
obj2.carName = 'Toyota';
console.log(obj1);              //{ carName: 'Toyota', model: 2020 }        ---> object can be mutated

