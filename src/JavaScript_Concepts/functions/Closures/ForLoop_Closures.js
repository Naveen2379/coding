/*for(let i=0;i<3;i++) {
    function f() {
        console.log(i);
    }
    f();        // 0    1   2
}*/

var val = 10;
for(let i=0;i<3;i++) {
    console.log('for loop');
    console.log(i);
    val = i;
    function f(b) {
        console.log('in function');
        console.log(i);
        console.log(i+b);
    }
}
console.log(val);
f(val);                 //4
val = 5;
console.log(val);
f(val);        // 7
//console.dir(f);


