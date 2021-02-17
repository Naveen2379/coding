function foo(obj) {
    return {
        a: obj.bar,
        b: obj.baz
    }
}

/*
const { a } = foo({ bar: 27, baz: 41});
console.log(a);             //27

const { b } = foo({ bar: 27, baz: 41});
console.log(b);             //41
*/


/*
const { a,b } = foo({ bar: 27, baz: 41});
console.log(a,b);             //27 41
*/


const { b,a } = foo({ bar: 27, baz: 41});
console.log(b,a);             //41 27

const { c,d } = foo({ bar: 27, baz: 41});
console.log(c,d);             //undefined undefined
