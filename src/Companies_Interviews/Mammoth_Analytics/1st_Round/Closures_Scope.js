function makeCounter() {
    let count = 0;                      //if I use 'var' keyword, same output will come as var is having function scope
    console.log('count ', count);
    return function() {
        console.log('closure count ', count);
        return count++;
    }
}

let counter1 = makeCounter();
let counter2 = makeCounter();
console.log( counter1() );	//0
console.log( counter1() ); 	//1
console.log( counter2() ); 	//0
console.log( counter2() ); 	//1