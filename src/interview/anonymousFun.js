function func1() {
    console.log('func1');
    func0();
}

/*
//arrow function
let func0 = () => {
    console.log('func0');
    console.log('its an arrow function');
};
func1(func0());     /!*func0
                    its an arrow function
                    func1
                    func0
                    its an arrow function*!/
*/

//anonymous function
let func0 = function() {
    console.log('func0');
};
func1(func0);           //func1 func0
func1(func0());         //func0 func1 func0

/*regular function
function func0() {
    console.log('func0');
}*/



