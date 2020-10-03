(function () {
    console.log('this is a self invoking function');
})();

/*
* Function expression can be made self invoking -if the expression is followed by ()
* Function Declarations can't be self invoked
* */
(function fun() {
    console.log('function declaration');
})()
