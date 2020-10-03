function fun1(fun2) {
    console.log('fun1');
    console.log(fun2);
}

let fun2 = () => {
    console.log('fun2');
};

//fun1();   //fun1 [Function: fun2]
//fun1(fun2());   //fun2 fun1 [Function: fun2]
//fun1(fun2);     //fun1 [Function: fun2]
/*fun1(function fun2() {
    console.log('fun1');
    fun2();
}); //fun1 [Function: fun2]*/


let a = 10;
let b = 15;
function sum(c,d) {
    console.log('sum: '+ (a+b));
}
sum();  //sum: 25
sum(a,b);   //sum: 25
//sum(c,d);       // c is not defined

/*function variables() {
    function fun() {
        let a = 10;
        let b = 20;
    }
    let obj = {
        a: 5,
        b: 10
    };
    console.log(this);      /!*<ref *1> Object [global] {
                                  global: [Circular *1],
                                  clearInterval: [Function: clearInterval],
                                  clearTimeout: [Function: clearTimeout],
                                  setInterval: [Function: setInterval],
                                  setTimeout: [Function: setTimeout] {
                                    [Symbol(util.promisify.custom)]: [Function (anonymous)]
                                  },
                                  queueMicrotask: [Function: queueMicrotask],
                                  clearImmediate: [Function: clearImmediate],
                                  setImmediate: [Function: setImmediate] {
                                    [Symbol(util.promisify.custom)]: [Function (anonymous)]
                                  }
                               }*!/
    console.log(obj.a);         //5
    console.log(this.a+this.b);  //NaN
    return this.a;          //undefined

}
console.log(variables());*/





