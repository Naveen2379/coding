/** Function Generators
 * can be paused and resumed duing execution
 *  use yield keyword to produce values and control the flow of iteration
 * 
 */
function* myGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

/** gen -generator object */
const gen = myGenerator();
console.log(gen.next())     //{ value: 1, done: false }
console.log(gen.next()) //{ value: 2, done: false } 
console.log(gen.next()) //{ value: 3, done: false }    
console.log(gen.next()) //{ value: undefined, done: true }
