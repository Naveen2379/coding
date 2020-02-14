function processData(input) {
    //Enter your code here
    //console.log(input);
    let res = 'NO';
    let extractedInput = input.split('\n');
    res = extractedInput[1].includes(extractedInput[0]);
    if(res) {
        console.log("YES");
    }
    else {
        console.log("NO");
    }

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
