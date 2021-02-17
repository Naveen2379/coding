/*
for(var i=0; i<3; i++) {
    setTimeout( () => {
        console.log(i);
    }, 1000+(i*1000));
}
/!* the number 3 consoles 3 times after 1st, 2nd, and 3rd second respectively *!/
*/


/* Goal is to get the numbers 0, 1, and 2, after 1st, 2nd, and 3rd second, respectively */
/*
for(var i=0; i<3; i++) {
    setTimeout( function (i_local) {
        return function () {
            console.log(i_local);
        }
    }(i), 1000+(i*1000));
}
*/

/*
for(let i=0; i<3; i++) {
    setTimeout( () => {
        console.log(i);
    }, 1000+(i*1000));
}
*/
/* the numbers 0, 1 and 2 console after 1st, 2nd, and 3rd second */

var i;
for(i=0;i<3;i++) {
    setTimeout( () => {
        console.log(i);
    }, 1000+(i*1000))
}
/* the number 3 consoles 3 times after 1st, 2nd, and 3rd second */
