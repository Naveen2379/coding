function factorial(n) {
    let fact = 1;
    if(n === 0 || n === 1) {
        return 1;
    }
    else {
        fact =  n*factorial(n-1);
    }
    return fact;
}

console.log(factorial(3));