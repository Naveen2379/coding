let add = (function () {
    let counter = 0;
    console.log(`outer fun: ${counter}`);
    return function () {
        counter+=1;
        console.log(`inner func: ${counter}`);
        //return counter;
    }
})();
add();
add();
add();

/*let fun = (function () {
    //console.log('self invoked');
    return function () { console.log('inner function'); return 0; };
})();
console.log(fun());*/
