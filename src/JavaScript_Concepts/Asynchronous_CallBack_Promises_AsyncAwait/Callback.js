function fun1(callBackFun) {
    console.log('question papers given');
    callBackFun(true);
    console.log('prints after callback fun executed');
}

console.log('exam started');
fun1(examFinishStatus);

function examFinishStatus(status) {
    if(status) {
        console.log('exam is finished');
    }
    else {
        console.log('answer sheet not submitted');
    }
}

/*
* exam started
* question papers given
* exam is finished
* prints after callback fun executed
* */