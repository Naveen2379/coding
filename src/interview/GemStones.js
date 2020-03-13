function gemStones(input) {
    let extractedInput = input.split('\n');
    let resultArr=[];
    let result = '';
    if(extractedInput[0] < 2) {
        result = 'there should be at least two rocks';
    }
    else {
        for(let outerIndex=0; outerIndex<extractedInput[1].length;outerIndex++) {
            let stringToBechecked = 2;
            for(let innerIndex=0;innerIndex<extractedInput[stringToBechecked].length;innerIndex++) {
                if(extractedInput[1][outerIndex] === extractedInput[stringToBechecked][innerIndex] ) {
                    resultArr.push(extractedInput[1][outerIndex]);
                }
            }
        }

        if(resultArr.length > 0 ) {
            let res = resultArr.filter( (elem, ind, arr) => arr.indexOf(elem) === ind);
            result = res.length;
        }
        else {
            result = 'no common elements found';
        }
    }
    return result;
}


module.exports = gemStones;