/*
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}*/

// Complete the substrCount function below.
function substrCount(n, s) {
    let subStr = '';
    let count = 0;
    for (let i=0;i<s.length; i++) {
        subStr = subStr + s.charAt(i);
        if (subStr[i] === subStr[i-1]) {
            count++;
        }
        if(subStr.length>=2) {
            if(subStr[i-2] === subStr[i]) {
                count++;
            }
        }
    }
    const reverseEqual = s.split('').reverse().join('');
    if(s===reverseEqual) { count++};
    console.log(count + s.length);
}

substrCount(4, 'aaaa');         //10
substrCount(7, 'abcbaba');      //10
substrCount(5, 'asasd');      //7
substrCount(7, 'aaaaaaa');      //19


/*function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const s = readLine();

    const result = substrCount(n, s);

    ws.write(result + '\n');

    ws.end();
}*/
