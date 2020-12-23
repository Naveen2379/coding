function f1 (){
    try {
        f2();
    }catch(error){
        console.log('f1');
    }
}

function f2 (){
    try{
        f3();
    }catch(error){
        throw new Error('f2');
        console.log('f2');
    }
}

function f3 () {
    try{
        throw new Error('f3');
    }catch(error){
        throw new Error('f3');
        console.log('f3');
    }
}
f1();               //f1
//f2();                 //throw new Error('f2'); Error: f2
