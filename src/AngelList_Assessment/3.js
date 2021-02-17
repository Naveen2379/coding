let p1 = new Promise((resolve, reject) => {
    resolve('foo');
});
let p2 = new Promise((resolve, reject) => {
    reject('bar');
});

console.log('bip');

p1.then( val => {
    console.log(val);
    return p2;
})
    .then( val => {
        console.log('baz');
    })
    .catch( err => {
        console.log(err);
    })
    .then( () => {
        console.log('nothing is here, but still prints');
    })

console.log('bop');

/*
    bip
    bop
    foo
    bar
    nothing is here, but still prints
*/
