function factorial(n) {
    let result = 0;
    if(n<0) {
        result = 0;
    }
    else if(n<=1) {
        result = 1;
    }
    else {
        result = n*factorial(n-1);
    }
    console.log(result);
    return result;
}

factorial(0);

module.exports = factorial;