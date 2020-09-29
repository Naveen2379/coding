/*
* The debounce() function forces a function to wait a certain amount of time before running again.
* The function is built to limit the number of times a function is called. ...
* Events such as scrolling, mouse movement, and keypress bring great overhead with them if they are captured every single time they fire.
* */

function debounce(fn, delay) {
    console.log('debounce function');
    let timer;
    return function (inputValue) {
        console.log(inputValue);
        console.log('inside returned function');
        //clearTimeout(timer);
        console.log(timer);
        clearTimeout(timer);
        timer = setTimeout( () => {
            //let context = this,
                //args = arguments;
            console.log('inside timeOut');
            getData.apply();
        }, delay);
    }
}
let counter = 1;
function getData () {
    console.log('fetching data', counter++);
}
const betterFun = debounce(getData, 5000);