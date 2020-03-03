function largestCommonDivisor(n1, n2) {
    let divisor = 0;
    let min = Math.min(n1, n2);

    //iteration starts from 1 and checks every number till the 'min' number, it may take time if the greatest divisor is near 'min' number
    /*for(let i=1; i<=min; i++) {
        if( n1 === 0 && n2 === 0) {
            return 0;
        }
        else if((n1%i===0) && (n2%i===0)) {
            divisor = i;
        }
    }
    return divisor;
    */
    //iteration starts from 'min' number -no need to go till the very first number to check as we only interested in large number
    if(n1===0 && n2===0) {
        return 0;
    }
    else {
        for (let i = min; i >= 1; i--) {
            if ((n1 % i === 0) && (n2 % i === 0)) {
                return i;
            }
        }
    }
}

//largestCommonDivisor()
module.exports = largestCommonDivisor;