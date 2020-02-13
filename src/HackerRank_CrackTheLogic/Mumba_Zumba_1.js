function processData(input) {
    //Enter your code here
    const resultArr = input.split("\n");
    let result = [];
    for( let index=1; index<=input[0]; index++) {
        if(resultArr[index]%2 === 0) {
            result.push('MUMBA');
        }
        else {
            result.push('ZUMBA');
        }
    }
    const res = result.join('\n');
    console.log(res);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});