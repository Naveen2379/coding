function* myGenerator() {
    try {
        yield 1;
        yield 2;
        throw new Error('something went wrong...')
    }
    catch(err) {
        yield `Error: ${err.message}`
    }
}

const gen = myGenerator()
console.log(gen.next())     //{value: 1, done: false}
console.log(gen.next())     //{value: 2, done: false} 
console.log(gen.next())     //{value: Error: something went wrong..., done: false}
console.log(gen.next())     //{value: undefined, done: true}