
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
}

// Complete the substrCount function below.
function substrCount(n, s) {
    let subStrArr = [];
    let subStr = s.charAt(0);
    let result = n;
    for(let i=0;i<n-1;i++) {
        if(s.charAt(i) !== s.charAt(i+1)) {
            subStr = subStr+s.charAt(i+1);
            if(subStr.length>2) {
                if(subStr.charAt(i-1) === subStr.charAt(i+1)) {
                    subStrArr.push(subStr.slice(i-1));
                }
            }
        }
        else {
            subStr = subStr+s.charAt(i+1);
            subStrArr.push(subStr);
            /*else if(subStr.length>=2) {
                console.log('equal > 2');
                if(subStr.charAt(i-1)=== subStr.charAt(i+1)) {
                    console.log(subStr.slice(i-1));
                    subStrArr.push(subStr.slice(i-1));
                }
                if(subStr.length-1) {
                    subStrArr.push(subStr);
                }
                console.log(subStrArr);

            }
            else {
                subStrArr.push(subStr);
            }*/
        }
    }
    console.log(subStrArr);
    result = result + subStrArr.length;
    console.log(subStrArr.length);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const s = readLine();

    const result = substrCount(n, s);

    ws.write(result + '\n');

    ws.end();
}
