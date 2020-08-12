/*'use strict';

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
    let final_count = 0;
    let count = 0;
    let reverseStr = '';
    if(reverseStr === s) {
        count = ((s.length)*(s.length+1))/2;
        final_count = count;
    }
}

substrCount(3, 'aaa');          //7     -Wrong Ans, should be 6
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
