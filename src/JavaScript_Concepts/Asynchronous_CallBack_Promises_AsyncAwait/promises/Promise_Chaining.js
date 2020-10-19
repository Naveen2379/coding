const promise1 = new Promise(((resolve, reject) => {
    resolve('student entered the exam hall');
}));


function studentVerification(result) {
    return new Promise((resolve, reject) => {
        resolve(result + ' and ' +'user verification is done');
        //reject(result + ', but student verification details are not correct');
    })
}
console.log(typeof promise1);
promise1
    .then( (result) => {
        //console.log(result);
        return studentVerification(result);
    })
    .then(result => {
        //console.log(result);
        return new Promise( (resolve => {
            resolve(result+' and '+'user completed the exam')
        }))
    })
    .then( result => console.log(result))
    .catch(err => console.log(err));




