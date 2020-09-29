const promise1 = new Promise(((resolve, reject) => {
    resolve('student entered the exam hall');
}));


function studentVerification(result) {
    return new Promise((resolve, reject) => {
        //resolve(result + 'and' +' user verification is done');
        reject(result + ', but student verification details are not correct');
    })
}

promise1
    .then( (result) => {
        //console.log(result);
        return studentVerification(result);
    })
    .then(result => console.log(result))
    .catch(err => console.log(err));




const promise3 = new Promise( (resolve) => {
    resolve('user completed the exam');
});
