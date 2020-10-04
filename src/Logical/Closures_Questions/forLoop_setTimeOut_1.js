/*for(var i=0; i<3; i++) {
    setTimeout( () => {
        console.log(i);
    }, 1000+(i*1000));
}*/
/*
* the number 3 consoles 3 times after 1, 2, and 3 seconds
* */

/* Goal is to get the numbers 0, 1, and 2 each after 1, 2, and 3 seconds, respectively */
for(var i=0; i<3; i++) {
    setTimeout( function (i_local) {
        return function () {
            console.log(i_local);
        }
    }(i), 1000+(i*1000));
}

/*for(let i=0; i<3; i++) {
    setTimeout( () => {
        console.log(i);
    }, 1000+(i*1000));
}*/
/*
* the numbers 0, 1 and 2 console after 1, 2, and 3 seconds
* */