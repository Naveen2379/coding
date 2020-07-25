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
