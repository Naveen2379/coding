/* let behaves the same as var when it is outside of any block scope */
let i=0;
function fun() {
    i = 10;
    console.log(i);         //10
}
fun();
console.log(i);             //10
