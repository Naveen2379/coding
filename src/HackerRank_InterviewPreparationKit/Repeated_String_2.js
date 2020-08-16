function repeatedString_2(s, n) {
    let aCountInOrigStr = 0;
    let aCountInRemainder = [];
    let count = 0;
    let indexes = [];
    let result = 0;
    let noOfTimesStrOccur = Math.floor(n/s.length);
    indexes = s.split('').map( (char, ind) => {
        if(char === 'a') { return ind;}
    });
    console.log(indexes);
    aCountInOrigStr = indexes.filter( (ind) => ind!==undefined).length;
    let beforeResult = noOfTimesStrOccur * aCountInOrigStr;

    let remainder = n%s.length;
    if(remainder !== 0) {
        for(let j=0;j<remainder;j++) {
            aCountInRemainder.push(j);
        }
        console.log(aCountInRemainder);
        indexes.map( (index) => {
            if(aCountInRemainder.includes(index)) {
                ++count;
            }
        })
    }

    result = count + beforeResult;
    console.log(result);
}

//repeatedString_2('abcac', 10);      //4
repeatedString_2('abcac', 14);      //6
//repeatedString_2('a', 1000000000000);
//repeatedString_2('abc', 11);        //4
//repeatedString_2('bca', 11);        //3
//repeatedString_2('abaaa', 14);     //11


function simplifiedRepeatedString(s, n) {
    let strSize = s.length;
    let aCount = s.split('').filter( (a) => a==='a').length;
    let repeat = Math.floor(n/strSize);
    let left = n - (repeat* strSize);
    console.log((repeat*aCount) + s.split('').filter((a,i)=> a==='a' && i<left).length);
}

simplifiedRepeatedString('abcac', 14);      //6