console.log('first');

function fun1() {
    console.log('second, function');
}

console.log('third');
setTimeout(() => console.log('fourth, setTimeOut'), 1000);

console.log('fifth');
function fun2() {
    console.log('sixth, function');
}
fun1();
fun2();

/*
* first
third
fifth
second, function
sixth, function
fourth, setTimeOut
* */