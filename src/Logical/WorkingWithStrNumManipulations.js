console.log(10+10+'Naveen');


/* NaN values are generated when arithmetic operations result in undefined or unrepresentable values */
console.log(10+undefined);      //NaN
console.log(NaN == NaN);       //false
console.log(NaN === NaN);       //false
console.log(NaN);               //NaN
console.log(0/0);               //NaN
console.log(isNaN(NaN));        //true
console.log(isNaN(undefined));      //true
console.log(isNaN({}));     //true
console.log(isNaN([]));     //false

// dates
console.log(isNaN(new Date()));                // false
console.log(isNaN(new Date().toString()));     // true

// strings
console.log(isNaN('37'));      // false: "37" is converted to the number 37 which is not NaN
console.log(isNaN('37.37'));   // false: "37.37" is converted to the number 37.37 which is not NaN
console.log(isNaN("37,5"));    // true
console.log(isNaN('123ABC'));  // true:  parseInt("123ABC") is 123 but Number("123ABC") is NaN
console.log(isNaN(''));        // false: the empty string is converted to 0 which is not NaN
console.log(isNaN(' '));       // false: a string with spaces is converted to 0 which is not NaN



console.log(10+'Ravi'+10);      //10Ravi10


let str = 'string';
console.log(str+5);     //string5
let num = 1;
console.log(num+'naveen');      //strnaveen

let num1 = 112;
console.log(num1+'Ravi');       //112Ravi

let num10;
console.log('Ravi'+num10);      //Raviundefined


