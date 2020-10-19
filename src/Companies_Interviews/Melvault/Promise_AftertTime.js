const wait = (t) => {
    return new Promise((resolve) => {
        setTimeout( () => {
            resolve('after 5 seconds');
        }, t*1000)
    })
}



//wait(5).then(printsomething())
wait(5).then(result => console.log(result));