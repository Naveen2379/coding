const arr = [10, 12, 15, 21];
/*for (var i = 0; i < arr.length; i++) {
    setTimeout(function() {
        console.log('Index: ' + i + ', element: ' + arr[i]);
    }, 3000);
}*/

/*
Index: 4, element: undefined
Index: 4, element: undefined
Index: 4, element: undefined
Index: 4, element: undefined
 */


/* Solution */
//using let keyword
/*for (let i = 0; i < arr.length; i++) {
    setTimeout(function() {
        console.log('Index: ' + i + ', element: ' + arr[i]);
    }, 3000);
}*/

//using passing the needed parameters into the inner function
for (var i = 0; i < arr.length; i++) {
    setTimeout(function(new_i) {
        console.log('Index: ' + new_i + ', element: ' + arr[new_i]);
    }(i), 3000);
}

//using self-invoking function
/*for( var i=0; i< arr.length; i++) {
    console.log(i);
    (function( i) {
        console.log('i '+i);
        setTimeout(function() {
            console.log('Index: ' + i + ', value: ' + arr[i]);
        }, 3000);
    })(i);
}*/

