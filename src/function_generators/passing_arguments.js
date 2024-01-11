function* twoWayGenerator1(value) {  //doesn't respect value argument here
    yield "Please provide a value";
    yield `You provided: ${value}`
}
//const gen1 = twoWayGenerator1()

function* twoWayGenerator2() {
    const value = yield "Please provide a value";
    yield `You provided: ${value}`
}
const gen2 = twoWayGenerator2()

console.log(gen2.next())     //{value: Please provide a value, done: false}
console.log(gen2.next(30))   //{value: You provided 30, done: false}
console.log(gen2.next().done)     //true