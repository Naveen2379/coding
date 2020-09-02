let obj = {name: 'Rani', age: 25};
function insert(obj, callback) {
    console.log(obj);
}

function fun(res) {
    console.log(res);
}


insert(obj, fun('callback function') );

/*
* callback function
* { name: 'Rani', age: 25 }
* */

function toBeCalled() {
    return 'Kairamkonda';
}

const name = 'Naveen';
const fun1 = function (name, toBeCalled) {
    const res = toBeCalled();
    console.log(name + ' ' + res);
}
fun1(name, toBeCalled);
/*
Naveen Kairamkonda
*/

/* setState sync */
const  firstName = 'Naveen';
function fun2(firstName, callbackFun) {
    const lastName = callbackFun();
    console.log(firstName + ' '+lastName);
}

fun2( name, function fun3() {
    return 'Kairamkonda';
});

/*
* Naveen Kairamkonda
* */


