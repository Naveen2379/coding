function Mumba_Zumba(input) {
    //const resultStr = input.replace(/\s/g, '');
    const resultArr = input.split(" ");
    let result = [];
    for( let index=1; index<=resultArr[0]; index++) {
        if(resultArr[index]%2 === 0) {
            result.push('Mumba');
        }
        else {
            result.push('Zumba');
        }
    }

    return result.join('\n');
}

module.exports = Mumba_Zumba;