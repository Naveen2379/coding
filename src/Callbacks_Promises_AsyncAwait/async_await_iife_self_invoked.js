function resolveAfter2Seconds(y) {
    return new Promise( resolve => {
        setTimeout( () => {
            resolve(y);
        }, 2000);
    })
}

( async function(x) {
    let prom1 = await resolveAfter2Seconds(20);
    console.log('after 2 seconds');
    let prom2 = await resolveAfter2Seconds(30);
    console.log('after 4 seconds');
    return x + prom1 + prom2;
})(10).then(res => console.log(res));
//after 2 seconds
//after 4 seconds
//60
// returns 60 after 4 seconds

