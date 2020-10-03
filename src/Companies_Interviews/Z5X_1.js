let i=10;
var j=20;
const k=30;
{
    let i=100;
    var j=200;
    const k=300;
    console.log(i);     //100
    console.log(j);     //200
    console.log(k);     //300
}
//var j=50;         //latest assigned value will shown  -uncomment, j will be 50
console.log(i);     //10
console.log(j);     //200
console.log(k);     //30

//only var keyword takes the latest value assigned to it, not the first assigned value, so here it is 200, but not 20
//let and const keywords have their own block scope, won't be available in outer scope