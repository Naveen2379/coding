function fun(){
    var a = b = 3;
    c=10;
    console.log(this.b);            //3
    console.log(window.b);          //3
    console.log(this.a);            //undefined
}
fun();
console.log(typeof a);              //undefined
console.log(typeof b);              //number
console.log(c);                     //10
console.log(this);                  //window

console.log("a defined? " + (typeof a !== 'undefined'));            //false
console.log("b defined? " + (typeof b !== 'undefined'));            //true