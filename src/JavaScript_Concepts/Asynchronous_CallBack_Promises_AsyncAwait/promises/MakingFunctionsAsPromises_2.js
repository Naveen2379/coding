

function fun(){
    console.log();
}

let promise1 = new Promise(resolve => 'it is resolved' );
promise1.then( result => console.log(result));