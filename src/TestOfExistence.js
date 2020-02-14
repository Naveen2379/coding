function testOfExistence(input) {
    let res = 'NO';
    let extractedInput = input.split('\n');
    for( let index=0;index<input.length;index++) {
        if(extractedInput[0] === extractedInput[1].charAt(index)) {
            res = 'YES';
            break;
        }
    }
    return res;
}
module.exports = testOfExistence;