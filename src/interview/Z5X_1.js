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
console.log(i);     //10
console.log(j);     //200
console.log(k);     //30
