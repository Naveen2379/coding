function User() {
    var name = 'John';
    function sayHi() {
        console.log(`Hello ${name}`);
    }
    return sayHi();
}

//const user1 = User()();
//console.log(user1);

setTimeout( User, 0);