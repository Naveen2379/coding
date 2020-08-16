function repeatedString(s, n) {
    let aCountInOrigStr = 0;
    let aCountInRemainder = [];
    let count = 0;
    let indexes = [];
    let result = 0;
    for(let j=0;j<s.length;j++) {
        if(s.charAt(j) === 'a') {
            indexes.push(j);
            ++aCountInOrigStr;
        }
    }
    let noOfTimesStrOccur = Math.floor(n/s.length);
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

//repeatedString('abcac', 10);      //4
//repeatedString('a', 1000000000000);
//repeatedString('abc', 11);        //4
//repeatedString('bca', 11);        //3
repeatedString('abaaa', 14);     //11
