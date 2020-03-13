function fun(x) {
    console.log(typeof x, arguments.length);
}

fun();                  //undefined     0
fun(5);             //number     1
fun("r", "n", "v"); //string    3
fun([2,4,5]);       //object    1
fun({a: "raju", b: 5});     //object 1
fun({a: "raju", b: 5}, {});     //object 2
