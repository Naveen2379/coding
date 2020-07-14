setTimeout( () => {
    console.log('after 2 seconds');
}, 2000);


new Promise((resolve, reject) => {
    resolve('first promise');
}).then( (result) => {
    console.log(result);
    return new Promise((resolve, reject) => {
        resolve('second promise');
    }).then( (result) => {
        console.log(result);
        return new Promise((resolve, reject) => {
            resolve('third promise');
        });
    })
}).then( (result) => console.log('returned from last then function ',result));

/*
* first promise
* second promise
* returned from last then function  third promise
* after 2 seconds
* */