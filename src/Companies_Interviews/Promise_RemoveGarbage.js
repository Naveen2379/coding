let clean_room = function() {
    return new Promise(function (resolve,reject) {
       resolve('Cleaned the room');
    });
};

let remove_garbage = function (message) {
    return new Promise(((resolve, reject) => {
        resolve(message + ' removed the garbage');
    }));
};

let win_icecream = function (message) {
    return new Promise(((resolve, reject) => {
        resolve( message + ' won icecream');
    }));
};

clean_room().then((result) => remove_garbage(result)).then((result)=> win_icecream(result)).then((result) => console.log('finished ' + result));

//to run all
Promise.all([clean_room(), remove_garbage(), win_icecream()]).then(()=> console.log('finished'));

//to run any one of them
Promise.race([clean_room(), remove_garbage(), win_icecream()]).then(() => console.log('one of them finished'));
