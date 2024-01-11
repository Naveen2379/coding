function* myGenerator1() {
    yield 1;
    yield 2;
}
function* myGenerator2() {
    yield 3;
    yield 4;
}

function* composedGenerator() {
    yield* myGenerator1();
    yield* myGenerator2();
}

const composedGen = composedGenerator();
console.log(composedGen.next())     //{ value: 1, done: false }
console.log(composedGen.next())     //{ value: 2, done: false }    
console.log(composedGen.next())     //{ value: 3, done: false }  
console.log(composedGen.next())     //{ value: 4, done: false }       
console.log(composedGen.next())     //{ value: undefined, done: true }