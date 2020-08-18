function countingMountainValleys(s) {
    let valleyCount = 0;
    function countingValleys(strCopy) {
        //console.log('string', strCopy);
        let uCount = 0;
        let dCount = 0;
        console.log(strCopy, strCopy.length);
        for(let i=0; i<strCopy.length;i++) {
            if(strCopy.charAt(i) === 'U') {
                ++uCount;
                console.log('uCount: char at ',i, ' is ', strCopy.charAt(i));
                if(uCount === dCount) {
                    console.log('uCount, dCount are matched in uCount at ', i );
                    if(strCopy.charAt(0) === 'D') {
                        ++valleyCount;
                        strCopy = strCopy.slice(i+1);
                        break;
                    }
                }
            }
            else {
                ++dCount;
                console.log('dCount: char at ',i, ' is ', strCopy.charAt(i));
                if(dCount === uCount) {
                    console.log('uCount, dCount are matched in dCount at ', i );
                    if(strCopy.charAt(0) === 'U') {
                        strCopy = strCopy.slice(i+1);
                        break;
                    }
                    else {
                        strCopy = strCopy.slice(i+1);
                        break;
                    }

                }
            }
        }
        if(strCopy !== '') {
            console.log('strCopy after break statement', strCopy)
            countingValleys(strCopy);
        }
    }
    countingValleys(s);
    return (valleyCount);
}
let s = '';
//s= 'UDDDUDUU';
//s= 'DUUDUD';
//s = 'DU';
//s = 'UD';
s = 'DDUUUUDDDDUUUD';
const valleyCount = countingMountainValleys(s);
console.log(valleyCount);