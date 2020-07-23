function pf(msg) {
    return new Promise( (resolve) => {

    })
}

var async_f = async function () {
    var p1 = pf('first');
    var p2 = pf('second');
}

async_f();