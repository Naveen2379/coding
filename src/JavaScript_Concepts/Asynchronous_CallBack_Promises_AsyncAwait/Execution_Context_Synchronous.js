console.log('a');

function fun1() {
    console.log('b');
}

function fun2() {
    console.log('c');
}
console.log('d');

fun2();
fun1();

/*
* a
* d
* c
* b
* */