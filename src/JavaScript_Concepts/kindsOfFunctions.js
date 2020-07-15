const fun = () => console.log('it is an arrow function');
fun();  //it is an arrow function

const fun1 = function () {
    console.log('it is an anonymous function');
}
fun1(); //it is an anonymous function

function fun2() {
    console.log('it a normal function');
}
fun2();     //it a normal function