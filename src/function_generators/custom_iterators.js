function* range(start, end,step) {
    yield 10
    let current = start
    while(current <= end) {
        yield current;
        //current = current + step
        current += step
    }
}

const gen = range(1, 10, 2);

/** with iterator   -for..of */
for(const key of gen) {
    console.log('key ', key)
    /**
     * key  10
     * key  1
     * key  3
     * key  5
     * key  7
     * key  9
     */
}

/** without iterator */
// console.log(gen.next())   //{ value: 10, done: false }
// console.log(gen.next())   //{ value: 1, done: false }
// console.log(gen.next())   //{ value: 3, done: false } 
// console.log(gen.next())   //{ value: 5, done: false } 
// console.log(gen.next())   //{ value: 7, done: false }
// console.log(gen.next())   //{ value: 9, done: false } 
// console.log(gen.next())   //{ value: undefined, done: true }
// console.log(gen.next())   //{ value: undefined, done: true }




      
     


